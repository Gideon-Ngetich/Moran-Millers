import { Link, useNavigate } from '@tanstack/react-router';
import { Button, ConfigProvider, Drawer, Layout, Menu, Space, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Header } = Layout;
const { Text } = Typography;

export default function HeaderComponent() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { key: '/', label: 'Home' },
    { key: '/about', label: 'About Us' },
    { key: '/products', label: 'Products' },
    { key: '/innovation', label: 'Innovation' },
    { key: '/impact', label: 'Impact' },
    { key: '/competitive', label: 'Competitive' },
    { key: '/investor', label: 'Investors' },
    { key: '/blog', label: 'Blog' },
    { key: '/contact', label: 'Contact' },
  ];

  const menuItems = navItems.map((item) => ({
    key: item.key,
    label: <Link to={item.key}>{item.label}</Link>,
  }));

  const currentPath = location.pathname; // Approximate active detection (for exact, use TanStack Router's useMatch or similar)

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#52c41a', // Approximate brand-green
          colorInfo: '#faad14', // Approximate brand-orange for buttons
        },
      }}
    >
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          height: 80,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src="/assets/generated/moran-logo-transparent.dim_200x200.png"
            alt="Moran Millers"
            style={{ height: 48, width: 48 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', color: '#52c41a' }}>
              Moran Millers Ltd
            </span>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Think Unga, Think Moran!
            </Text>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <Menu
          mode="horizontal"
          items={menuItems}
          selectedKeys={[currentPath]}
          style={{ flex: 1, justifyContent: 'center', display: 'none', border: 'none' }}
          className="desktop-menu"
          overflowedIndicator={null}
        />

        <Space style={{ display: 'none' }} className="desktop-menu">
          <Button type="default" onClick={() => navigate({ to: '/contact' })}>
            Get Quote
          </Button>
          <Button
            type="primary"
            style={{ backgroundColor: '#faad14' }}
            onClick={() => navigate({ to: '/products' })}
          >
            Shop Wholesale
          </Button>
        </Space>

        {/* Mobile Menu Trigger */}
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 24 }} />}
          onClick={() => setOpen(true)}
          style={{ display: 'block' }}
          className="mobile-menu-trigger"
        />

        {/* Mobile Drawer */}
        <Drawer
          title={null}
          placement="right"
          open={open}
          onClose={() => setOpen(false)}
          width={300}
          styles={{ body: { padding: 0 } }}
        >
          <div style={{ padding: '24px 16px' }}>
            <Menu
              mode="inline"
              items={menuItems}
              selectedKeys={[currentPath]}
              style={{ border: 'none' }}
              onClick={() => setOpen(false)}
            />
            <Space direction="vertical" style={{ width: '100%', marginTop: 32 }}>
              <Button type="default" block onClick={() => { navigate({ to: '/contact' }); setOpen(false); }}>
                Get Quote
              </Button>
              <Button
                type="primary"
                block
                style={{ backgroundColor: '#faad14' }}
                onClick={() => { navigate({ to: '/products' }); setOpen(false); }}
              >
                Shop Wholesale
              </Button>
            </Space>
          </div>
        </Drawer>

        <style>{`
          @media (min-width: 1024px) {
            .desktop-menu {
              display: flex !important;
            }
            .mobile-menu-trigger {
              display: none !important;
            }
          }
        `}</style>
      </Header>
    </ConfigProvider>
  );
}