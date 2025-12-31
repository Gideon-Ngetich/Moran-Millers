import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Button, ConfigProvider, Drawer, Layout, Menu, Space, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

export default function Header() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Get current pathname for active menu highlighting
  const currentPath = useRouterState({
    select: (state) => state.location.pathname,
  });

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
    label: (
      <Link
        to={item.key}
        onClick={() => setDrawerOpen(false)}
      >
        {item.label}
      </Link>
    ),
  }));

  const handleGetQuote = () => {
    navigate({ to: '/contact' });
    setDrawerOpen(false);
  };

  const handleShopWholesale = () => {
    navigate({ to: '/products' });
    setDrawerOpen(false);
  };

  const actionButtons = (
    <Space size="middle">
      <Button onClick={handleGetQuote}>Get Quote</Button>
      <Button
        type="primary"
        style={{ backgroundColor: '#fa541c' }} // brand-orange approximation
        onClick={handleShopWholesale}
      >
        Shop Wholesale
      </Button>
    </Space>
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#389e0d', // brand-green approximation
        },
      }}
    >
      <AntHeader
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
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        {/* Logo Section */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <img
            src="/assets/generated/moran-logo-transparent.dim_200x200.png"
            alt="Moran Millers"
            style={{ height: 48, width: 48 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', color: '#389e0d' }}>
              Moran Millers Ltd
            </span>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Think Unga, Think Moran!
            </Text>
          </div>
        </Link>

        {/* Desktop Navigation & Actions */}
        <div
          style={{ display: 'none', alignItems: 'center', gap: 32 }}
          className="desktop-menu"
        >
          <Menu
            mode="horizontal"
            items={menuItems}
            selectedKeys={[currentPath]}
            style={{
              flex: 1,
              justifyContent: 'center',
              border: 'none',
              background: 'transparent',
            }}
          />
          {actionButtons}
        </div>

        {/* Mobile Hamburger */}
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 24 }} />}
          onClick={() => setDrawerOpen(true)}
          className="mobile-trigger"
        />

        {/* Mobile Drawer */}
        <Drawer
          placement="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          width={300}
          closeIcon={false}
          styles={{ body: { padding: 0 } }}
        >
          <div style={{ padding: '32px 16px' }}>
            <Menu
              mode="inline"
              items={menuItems}
              selectedKeys={[currentPath]}
              style={{ borderInlineEnd: 'none' }}
            />
            <div style={{ marginTop: 32 }}>{actionButtons}</div>
          </div>
        </Drawer>

        {/* Responsive Styles */}
        <style>{`
          @media (min-width: 1024px) {
            .desktop-menu {
              display: flex !important;
            }
            .mobile-trigger {
              display: none !important;
            }
          }
          @media (max-width: 1023px) {
            .mobile-trigger {
              display: block;
            }
          }
        `}</style>
      </AntHeader>
    </ConfigProvider>
  );
}