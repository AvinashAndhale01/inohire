import { ConfigProvider, App } from 'antd';
import 'antd/dist/reset.css';

export default function AdminLayout({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#DC143C',
          borderRadius: 8,
        },
      }}
    >
      <App>
        {children}
      </App>
    </ConfigProvider>
  );
}
