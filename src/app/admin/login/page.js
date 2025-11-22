'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Input, Button, Card, App } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';

export default function AdminLogin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { message } = App.useApp();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        Cookies.set('admin_token', data.token, { expires: 7 });
        message.success('Login successful!');
        router.push('/admin/dashboard');
      } else {
        message.error(data.error || 'Login failed');
      }
    } catch (error) {
      message.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
    }}>
      <Card 
        style={{ 
          width: 400, 
          boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          borderRadius: '16px'
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
            Admin <span style={{ color: '#DC143C' }}>Login</span>
          </h1>
          <p style={{ color: '#6C757D' }}>Access your dashboard</p>
        </div>

        <Form
          name="admin_login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' }
            ]}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Email" 
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              block
              size="large"
              style={{ 
                backgroundColor: '#DC143C',
                borderColor: '#DC143C',
                height: 48,
                fontSize: 16,
                fontWeight: 600
              }}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
