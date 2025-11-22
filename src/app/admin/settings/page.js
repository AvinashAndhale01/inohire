'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Card, Layout, App } from 'antd';
import { LogoutOutlined, SettingOutlined, TableOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import Link from 'next/link';

const { Header, Content } = Layout;

export default function AdminSettings() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const router = useRouter();
  const { message } = App.useApp();

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const response = await fetch('/api/settings');
      const data = await response.json();
      
      if (data.success) {
        form.setFieldsValue({
          calendlyUrl: data.data.calendlyUrl,
        });
      }
    } catch (error) {
      message.error('Failed to fetch settings');
    } finally {
      setFetching(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove('admin_token');
    message.success('Logged out successfully');
    router.push('/admin/login');
  };

  const onFinish = async (values) => {
    const token = Cookies.get('admin_token');
    
    if (!token) {
      message.error('Please login first');
      router.push('/admin/login');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        message.success('Settings updated successfully!');
      } else {
        message.error(data.error || 'Failed to update settings');
      }
    } catch (error) {
      message.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

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
            icon={<TableOutlined />}
            onClick={() => router.push('/admin/dashboard')}
          >
            Dashboard
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
              <SettingOutlined /> Settings
            </div>
          }
          style={{ maxWidth: 800, margin: '0 auto', borderRadius: 8 }}
          loading={fetching}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="Calendly Schedule URL"
              name="calendlyUrl"
              rules={[
                { required: true, message: 'Please enter Calendly URL' },
                { type: 'url', message: 'Please enter a valid URL' }
              ]}
              extra="This URL will be used for all 'Schedule Call' buttons across the website"
            >
              <Input 
                placeholder="https://calendly.com/your-link/30min"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                loading={loading}
                size="large"
                style={{ 
                  backgroundColor: '#DC143C',
                  borderColor: '#DC143C',
                }}
              >
                Save Settings
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Content>
    </Layout>
  );
}
