'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Table, Card, Button, Tag, Space, Layout, Popconfirm, App, Modal, Input } from 'antd';
import { LogoutOutlined, UserOutlined, MailOutlined, PhoneOutlined, SettingOutlined, CheckOutlined, DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';

const { Header, Content } = Layout;

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emailModalVisible, setEmailModalVisible] = useState(false);
  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [statusNote, setStatusNote] = useState('');
  const [editingStatus, setEditingStatus] = useState(false);
  const router = useRouter();
  const { message } = App.useApp();

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    const token = Cookies.get('admin_token');
    
    if (!token) {
      message.error('Please login first');
      router.push('/admin/login');
      return;
    }

    try {
      const response = await fetch('/api/admin/submissions', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success) {
        setSubmissions(data.data);
      } else {
        message.error('Failed to fetch submissions');
        if (response.status === 401) {
          router.push('/admin/login');
        }
      }
    } catch (error) {
      message.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove('admin_token');
    message.success('Logged out successfully');
    router.push('/admin/login');
  };

  const handleComplete = async (id) => {
    const token = Cookies.get('admin_token');
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status: 'completed' }),
      });

      const data = await response.json();
      if (data.success) {
        message.success('Marked as completed');
        fetchSubmissions();
      } else {
        message.error('Failed to update');
      }
    } catch (error) {
      message.error('An error occurred');
    }
  };

  const handleDelete = async (id) => {
    const token = Cookies.get('admin_token');
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        message.success('Submission deleted');
        fetchSubmissions();
      } else {
        message.error('Failed to delete');
      }
    } catch (error) {
      message.error('An error occurred');
    }
  };

  const columns = [

    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      render: (text) => (
        <Space>
          <UserOutlined />
          {text}
        </Space>
      ),
    },
    {
      title: 'Email',
      key: 'email',
      width: 120,
      render: (_, record) => (
        <Button 
          type="link" 
          icon={<MailOutlined />}
          onClick={() => {
            setSelectedRecord(record);
            setEmailModalVisible(true);
          }}
        >
          Show Email
        </Button>
      ),
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      width: 200,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: 130,
      render: (text) => text ? (
        <Space>
          <PhoneOutlined />
          {text}
        </Space>
      ) : '-',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      width: 180,
    },
    {
      title: 'Message',
      key: 'message',
      width: 120,
      render: (_, record) => (
        <Button 
          type="link"
          onClick={() => {
            setSelectedRecord(record);
            setMessageModalVisible(true);
          }}
        >
          Show Message
        </Button>
      ),
    },
    {
      title: 'Status',
      key: 'status',
      width: 200,
      render: (_, record) => (
        <Space>
          <Tag color={record.status === 'completed' ? 'green' : 'orange'}>
            {record.status === 'completed' ? 'COMPLETED' : 'PENDING'}
          </Tag>
          <Button 
            size="small" 
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedRecord(record);
              setStatusNote(record.note || '');
              setEditingStatus(true);
              setStatusModalVisible(true);
            }}
          />
          <Button 
            size="small" 
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedRecord(record);
              setEditingStatus(false);
              setStatusModalVisible(true);
            }}
          />
        </Space>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 180,
      render: (date) => new Date(date).toLocaleString(),
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      defaultSortOrder: 'descend',
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 100,
      fixed: 'right',
      render: (_, record) => (
        <Space>
          {record.status === 'pending' && (
            <Button
              type="primary"
              size="small"
              icon={<CheckOutlined />}
              onClick={() => handleComplete(record._id)}
            />
          )}
          <Popconfirm
            title="Delete submission"
            description="Are you sure you want to delete this?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              size="small"
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ 
        background: '#fff', 
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h1 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>
          Inno<span style={{ color: '#DC143C' }}>Hire</span> Admin
        </h1>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button 
            icon={<SettingOutlined />}
            onClick={() => router.push('/admin/settings')}
          >
            Settings
          </Button>
          <Button 
            type="primary" 
            danger 
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Header>
      
      <Content style={{ padding: 24, background: '#f0f2f5' }}>
        <Card 
          title={
            <div style={{ fontSize: 20, fontWeight: 600 }}>
              Form Submissions ({submissions.length})
            </div>
          }
          style={{ borderRadius: 8 }}
        >
          <Table
            columns={columns}
            dataSource={submissions}
            rowKey="_id"
            loading={loading}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total) => `Total ${total} submissions`,
            }}
            scroll={{ x: 1000 }}
          />
        </Card>
        
        <Modal
          title="Email"
          open={emailModalVisible}
          onCancel={() => setEmailModalVisible(false)}
          footer={[
            <Button key="close" onClick={() => setEmailModalVisible(false)}>
              Close
            </Button>
          ]}
        >
          <p>{selectedRecord?.email}</p>
        </Modal>

        <Modal
          title="Message"
          open={messageModalVisible}
          onCancel={() => setMessageModalVisible(false)}
          footer={[
            <Button key="close" onClick={() => setMessageModalVisible(false)}>
              Close
            </Button>
          ]}
        >
          <p style={{ whiteSpace: 'pre-wrap' }}>{selectedRecord?.message}</p>
        </Modal>

        <Modal
          title={editingStatus ? "Edit Status Note" : "Status Note"}
          open={statusModalVisible}
          onCancel={() => setStatusModalVisible(false)}
          footer={[
            <Button key="close" onClick={() => setStatusModalVisible(false)}>
              Close
            </Button>,
            editingStatus && (
              <Button 
                key="save" 
                type="primary" 
                onClick={async () => {
                  const token = Cookies.get('admin_token');
                  try {
                    const response = await fetch(`/api/admin/submissions/${selectedRecord._id}`, {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                      },
                      body: JSON.stringify({ note: statusNote }),
                    });
                    const data = await response.json();
                    if (data.success) {
                      message.success('Note updated');
                      fetchSubmissions();
                      setStatusModalVisible(false);
                    } else {
                      message.error('Failed to update note');
                    }
                  } catch (error) {
                    message.error('An error occurred');
                  }
                }}
              >
                Save
              </Button>
            )
          ]}
        >
          {editingStatus ? (
            <Input.TextArea
              value={statusNote}
              onChange={(e) => setStatusNote(e.target.value)}
              placeholder="Add a note..."
              rows={4}
            />
          ) : (
            <p style={{ whiteSpace: 'pre-wrap' }}>
              {selectedRecord?.note || 'No note available'}
            </p>
          )}
        </Modal>
      </Content>
    </Layout>
  );
}
