import { useNavigate } from '@tanstack/react-router';
import { Button, Card, Col, ConfigProvider, Row, Space, Tag, Typography, Avatar } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

export default function InnovationPage() {
  const navigate = useNavigate();

  const benefits = [
    'Rich in essential vitamins and minerals',
    'Perfect blend of maize and millet for optimal nutrition',
    'Quick and easy to prepare',
    'Suitable for all ages',
    'No artificial additives or preservatives',
    'Supports local farmers and sustainable agriculture',
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#389e0d', // brand-green
          colorWarning: '#fa541c', // brand-orange
          colorSuccess: '#faad14', // brand-yellow
          borderRadius: 12,
        },
      }}
    >
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(to bottom right, rgba(250, 84, 28, 0.1), #ffffff)',
            padding: '96px 0',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={1} style={{ fontSize: '3rem', marginBottom: 24 }}>
              Innovation Spotlight
            </Title>
            <Paragraph style={{ fontSize: '1.25rem', color: '#666666' }}>
              Introducing groundbreaking products that combine tradition with modern nutrition science
            </Paragraph>
          </div>
        </section>

        {/* Moran Uji Mix Feature */}
        <section style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size="large">
                  <Tag color="#fa541c" style={{ padding: '4px 16px', fontSize: '0.875rem', fontWeight: 'bold' }}>
                    NEW PRODUCT
                  </Tag>
                  <Title level={2}>Moran Uji Mix</Title>
                  <Paragraph style={{ fontSize: '1.25rem', color: '#666666' }}>
                    A Nutritious Twist to Your Morning Routine
                  </Paragraph>
                  <Paragraph style={{ fontSize: '1.125rem', color: '#666666' }}>
                    Our innovative Moran Uji Mix combines the finest maize and millet flour with carefully selected grains to
                    create a nutritious, delicious porridge that powers your day. Perfect for families seeking a healthy,
                    traditional breakfast option with modern nutritional benefits.
                  </Paragraph>

                  <div>
                    <Title level={4} style={{ marginBottom: 16 }}>Key Benefits:</Title>
                    <Row gutter={[16, 16]}>
                      {benefits.map((benefit, index) => (
                        <Col xs={24} sm={12} key={index}>
                          <Space size="small">
                            <CheckCircleOutlined style={{ color: '#389e0d', fontSize: 20 }} />
                            <Text type="secondary">{benefit}</Text>
                          </Space>
                        </Col>
                      ))}
                    </Row>
                  </div>

                  <Space size="middle">
                    <Button
                      type="primary"
                      size="large"
                      style={{ backgroundColor: '#fa541c', borderColor: '#fa541c' }}
                      onClick={() => navigate({ to: '/contact' })}
                    >
                      Pre-Order Moran Uji Mix
                    </Button>
                    <Button size="large" onClick={() => navigate({ to: '/products' })}>
                      Learn More
                    </Button>
                  </Space>
                </Space>
              </Col>

              <Col xs={24} lg={12}>
                <div style={{ position: 'relative' }}>
                  <img
                    src="/assets/generated/uji-mix-product.dim_400x400.jpg"
                    alt="Moran Uji Mix"
                    style={{
                      width: '100%',
                      borderRadius: 12,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -24,
                      right: -24,
                      backgroundColor: '#389e0d',
                      padding: '24px 32px',
                      borderRadius: 12,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    <Text style={{ display: 'block', fontSize: '0.875rem', fontWeight: 'bold' }}>
                      Coming Soon
                    </Text>
                    <Title level={1} style={{ margin: 0, color: 'white' }}>
                      2025
                    </Title>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Innovation Process */}
        <section style={{ padding: '96px 0', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 64 }}>
              Our Innovation Process
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={8}>
                <Card hoverable>
                  <Space direction="vertical" size="middle">
                    <Avatar
                      size={48}
                      style={{ backgroundColor: 'rgba(56, 158, 13, 0.1)', color: '#389e0d', fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                      1
                    </Avatar>
                    <Title level={4}>Research & Development</Title>
                    <Paragraph type="secondary">
                      We study nutritional needs and traditional recipes to create products that honor heritage while meeting
                      modern health standards
                    </Paragraph>
                  </Space>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card hoverable>
                  <Space direction="vertical" size="middle">
                    <Avatar
                      size={48}
                      style={{ backgroundColor: 'rgba(250, 84, 28, 0.1)', color: '#fa541c', fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                      2
                    </Avatar>
                    <Title level={4}>Quality Testing</Title>
                    <Paragraph type="secondary">
                      Rigorous testing ensures every batch meets our high standards for nutrition, taste, and safety
                    </Paragraph>
                  </Space>
                </Card>
              </Col>

              <Col xs={24} md={8}>
                <Card hoverable>
                  <Space direction="vertical" size="middle">
                    <Avatar
                      size={48}
                      style={{ backgroundColor: 'rgba(250, 173, 20, 0.1)', color: '#faad14', fontSize: '1.5rem', fontWeight: 'bold' }}
                    >
                      3
                    </Avatar>
                    <Title level={4}>Community Feedback</Title>
                    <Paragraph type="secondary">
                      We work closely with families and communities to refine our products based on real-world use and preferences
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: 'linear-gradient(to bottom right, rgba(250, 84, 28, 0.1), rgba(250, 173, 20, 0.1))',
            padding: '96px 0',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2}>Be Among the First to Try Moran Uji Mix</Title>
            <Paragraph style={{ fontSize: '1.125rem', color: '#666666', marginBottom: 32 }}>
              Pre-order now and get exclusive early access to our innovative nutritious blend
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: '#fa541c', borderColor: '#fa541c' }}
              onClick={() => navigate({ to: '/contact' })}
            >
              Pre-Order Now
            </Button>
          </div>
        </section>
      </div>
    </ConfigProvider>
  );
}