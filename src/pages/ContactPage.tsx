import { Card, Col, ConfigProvider, Row, Space, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useContactDetails } from '../hooks/useQueries';

const { Title, Text, Paragraph } = Typography;

export default function ContactPage() {
  const { isLoading: contactLoading } = useContactDetails();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#389e0d', // brand-green
          borderRadius: 12,
        },
      }}
    >
      <div className="flex flex-col">
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(to bottom right, rgba(56, 158, 13, 0.1), #ffffff)',
            padding: '96px 0',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={1} style={{ margin: '0 0 24px 0', fontSize: '3rem', fontWeight: 'bold' }}>
              Contact Us
            </Title>
            <Text style={{ fontSize: '1.25rem', color: '#666666' }}>
              Get in touch with us for inquiries, quotes, or any questions you may have
            </Text>
          </div>
        </section>

        {/* Contact Information */}
        <section style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
              Get In Touch
            </Title>

            {contactLoading ? (
              <Row gutter={[32, 32]}>
                {[0, 1, 2].map((i) => (
                  <Col xs={24} md={8} key={i}>
                    <Card loading />
                  </Col>
                ))}
              </Row>
            ) : (
              <Row gutter={[32, 32]}>
                <Col xs={24} md={8}>
                  <Card hoverable>
                    <Space direction="vertical" size="large">
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
                        <EnvironmentOutlined style={{ fontSize: 24, color: '#389e0d' }} />
                      </div>
                      <div>
                        <Title level={4}>Visit Us</Title>
                        <Paragraph type="secondary">P.O. Box 44231 – 00100 Nairobi</Paragraph>
                      </div>
                    </Space>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card hoverable>
                    <Space direction="vertical" size="large">
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
                        <PhoneOutlined style={{ fontSize: 24, color: '#fa541c' }} />
                      </div>
                      <div>
                        <Title level={4}>Call Us</Title>
                        <Paragraph type="secondary">
                          <a href=''>+254 700 281 281</a>
                        </Paragraph>
                      </div>
                    </Space>
                  </Card>
                </Col>

                <Col xs={24} md={8}>
                  <Card hoverable>
                    <Space direction="vertical" size="large">
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
                        <MailOutlined style={{ fontSize: 24, color: '#faad14' }} />
                      </div>
                      <div>
                        <Title level={4}>Email Us</Title>
                        <Paragraph type="secondary">
                          <a href={`mailto: millersmoran@gmail.com`}>millersmoran@gmail.com</a>
                        </Paragraph>
                      </div>
                    </Space>
                  </Card>
                </Col>
              </Row>
            )}
          </div>
        </section>
      </div>
    </ConfigProvider>
  );
}