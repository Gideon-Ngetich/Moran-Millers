import { useNavigate } from '@tanstack/react-router';
import { Button, Card, Col, ConfigProvider, Row, Space, Typography } from 'antd';
import {
  TrophyOutlined,
  TeamOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { SlLocationPin } from "react-icons/sl";
import { useContactDetails } from '../hooks/useQueries';

const { Title, Text, Paragraph } = Typography;

export default function HomePage() {
  const navigate = useNavigate();
  const { data: contactDetails } = useContactDetails();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#389e0d', // brand-green
          colorWarning: '#fa541c', // brand-orange
          colorSuccess: '#faad14', // brand-yellow (used for accents)
          borderRadius: 12,
        },
      }}
    >
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(to bottom right, rgba(56, 158, 13, 0.1), #ffffff, rgba(250, 84, 28, 0.1))',
            padding: '120px 0 80px',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size="large">
                  <Title level={1} style={{ fontSize: '3.5rem', margin: 0 }}>
                    Premium Maize & Millet Flour for Every Kenyan Home
                  </Title>
                  <Paragraph style={{ fontSize: '1.25rem', color: '#666666' }}>
                    Nourishing families with certified quality flour while empowering communities through sustainable milling practices.
                  </Paragraph>
                  <Space size="middle">
                    <Button
                      type="primary"
                      size="large"
                      style={{ backgroundColor: '#fa541c', borderColor: '#fa541c' }}
                      onClick={() => navigate({ to: '/products' })}
                    >
                      Shop Wholesale
                    </Button>
                    <Button size="large" onClick={() => navigate({ to: '/contact' })}>
                      Partner With Us
                    </Button>
                  </Space>
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <img
                  src="/assets/generated/hero-grains.dim_1200x600.jpg"
                  alt="Premium grains"
                  style={{
                    width: '100%',
                    borderRadius: 12,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                  }}
                />
              </Col>
            </Row>
          </div>
        </section>

        {/* Value Pillars */}
        <section style={{ padding: '96px 0', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 64 }}>
              Why Choose Moran Millers
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card hoverable>
                  <Space direction="vertical" size="middle">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        backgroundColor: 'rgba(56, 158, 13, 0.1)',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TrophyOutlined style={{ fontSize: 24, color: '#389e0d' }} />
                    </div>
                    <Title level={4}>Certified Quality</Title>
                    <Paragraph type="secondary">
                      Premium Grade 1 and Grade 2 maize flour meeting the highest industry standards
                    </Paragraph>
                  </Space>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card hoverable>
                  <Space direction="vertical" size="middle">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        backgroundColor: 'rgba(250, 84, 28, 0.1)',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <TeamOutlined style={{ fontSize: 24, color: '#fa541c' }} />
                    </div>
                    <Title level={4}>Community First</Title>
                    <Paragraph type="secondary">
                      Supporting local farmers and creating economic opportunities in rural Kenya
                    </Paragraph>
                  </Space>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card hoverable>
                  <Space direction="vertical" size="middle">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        backgroundColor: 'rgba(250, 173, 20, 0.1)',
                        borderRadius: 12,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <EnvironmentOutlined style={{ fontSize: 24, color: '#faad14' }} />
                    </div>
                    <Title level={4}>Sustainable Milling</Title>
                    <Paragraph type="secondary">
                      Circular economy practices that minimize waste and maximize value
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Contact Banner */}
        <section
          style={{
            background: 'linear-gradient(to right, #389e0d, rgba(56, 158, 13, 0.8))',
            padding: '64px 0',
            color: 'white',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Row gutter={[48, 32]}>
              <Col xs={24} md={8}>
                <Space size="middle">
                  <SlLocationPin style={{ fontSize: 28 }} />
                  <div>
                    <Text strong style={{ color: 'white', display: 'block' }}>
                      Location
                    </Text>
                    <Text style={{ opacity: 0.9 }}>
                      {contactDetails?.address || 'Kericho - Eldoret Road, Umugas Area'}
                    </Text>
                  </div>
                </Space>
              </Col>
              <Col xs={24} md={8}>
                <Space size="middle">
                  <PhoneOutlined style={{ fontSize: 28 }} />
                  <div>
                    <Text strong style={{ color: 'white', display: 'block' }}>
                      Phone
                    </Text>
                    <Text style={{ opacity: 0.9 }}>
                      {contactDetails?.phone || '+254 723 821 830'}
                    </Text>
                  </div>
                </Space>
              </Col>
              <Col xs={24} md={8}>
                <Space size="middle">
                  <MailOutlined style={{ fontSize: 28 }} />
                  <div>
                    <Text strong style={{ color: 'white', display: 'block' }}>
                      Email
                    </Text>
                    <Text style={{ opacity: 0.9 }}>
                      {contactDetails?.email || 'info@moranmillers.co.ke'}
                    </Text>
                  </div>
                </Space>
              </Col>
            </Row>
          </div>
        </section>

        {/* Featured Products Preview */}
        <section style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Space direction="vertical" size="middle" style={{ width: '100%', textAlign: 'center' }}>
              <Title level={2}>Our Premium Products</Title>
              <Paragraph style={{ fontSize: '1.125rem', color: '#666666' }}>
                Quality flour products for homes and businesses across Kenya
              </Paragraph>
            </Space>

            <Row gutter={[32, 32]} style={{ marginTop: 48 }}>
              <Col xs={24} md={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Sifted Maize Flour"
                      src="/assets/generated/maize-flour-product.dim_400x400.jpg"
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                  }
                >
                  <Title level={4}>Sifted Maize Flour</Title>
                  <Paragraph type="secondary">
                    Premium Grade 1 flour for the finest ugali and baking
                  </Paragraph>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Millet Flour"
                      src="/assets/generated/millet-flour-product.dim_400x400.jpg"
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                  }
                >
                  <Title level={4}>Millet Flour</Title>
                  <Paragraph type="secondary">
                    Nutritious and gluten-free flour for health-conscious consumers
                  </Paragraph>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt="Moran Uji Mix"
                      src="/assets/generated/uji-mix-product.dim_400x400.jpg"
                      style={{ height: 200, objectFit: 'cover' }}
                    />
                  }
                >
                  <Title level={4}>Moran Uji Mix</Title>
                  <Paragraph type="secondary">
                    Innovative nutritious blend for a healthy morning routine
                  </Paragraph>
                </Card>
              </Col>
            </Row>

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <Button size="large" type="primary" onClick={() => navigate({ to: '/products' })}>
                View All Products
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: 'linear-gradient(to bottom right, rgba(250, 84, 28, 0.1), rgba(250, 173, 20, 0.1))',
            padding: '96px 0',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
            <Title level={2}>Ready to Partner With Us?</Title>
            <Paragraph style={{ fontSize: '1.125rem', color: '#666666', marginBottom: 32 }}>
              Join hundreds of businesses across Kenya who trust Moran Millers for quality flour products
            </Paragraph>
            <Space size="middle">
              <Button
                type="primary"
                size="large"
                style={{ backgroundColor: '#389e0d', borderColor: '#389e0d' }}
                onClick={() => navigate({ to: '/contact' })}
              >
                Get in Touch
              </Button>
              <Button size="large" onClick={() => navigate({ to: '/about' })}>
                Learn More About Us
              </Button>
            </Space>
          </div>
        </section>
      </div>
    </ConfigProvider>
  );
}