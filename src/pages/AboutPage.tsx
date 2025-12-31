import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Button, ConfigProvider, Drawer, Layout, Menu, Space, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

export default function Header() {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Get current pathname to highlight active menu item
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
    <Space size={12}>
      <Button onClick={handleGetQuote}>Get Quote</Button>
      <Button
        type="primary"
        style={{ backgroundColor: '#fa541c', borderColor: '#fa541c' }}
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
          colorPrimary: '#389e0d', // brand-green
          borderRadius: 6,
        },
      }}
    >
      <AntHeader
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          height: 80,
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <img
            src="/assets/generated/moran-logo-transparent.dim_200x200.png"
            alt="Moran Millers"
            style={{ height: 48, width: 48 }}
          />
          <div>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: '#389e0d' }}>
              Moran Millers Ltd
            </div>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Think Unga, Think Moran!
            </Text>
          </div>
        </Link>

        {/* Desktop Menu + Buttons */}
        <div className="desktop-only" style={{ display: 'none', alignItems: 'center', gap: 48 }}>
          <Menu
            mode="horizontal"
            items={menuItems}
            selectedKeys={[currentPath]}
            style={{
              flex: 1,
              minWidth: 0,
              justifyContent: 'center',
              background: 'transparent',
              borderBottom: 'none',
            }}
          />
          {actionButtons}
        </div>

        {/* Mobile Hamburger */}
        <Button
          type="text"
          icon={<MenuOutlined style={{ fontSize: 24 }} />}
          onClick={() => setDrawerOpen(true)}
          className="mobile-only"
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
            .desktop-only {
              display: flex !important;
            }
            .mobile-only {
              display: none !important;
            }
          }
          @media (max-width: 1023px) {
            .mobile-only {
              display: block;
            }
          }
        `}</style>
      </AntHeader>
    </ConfigProvider>
  );
}