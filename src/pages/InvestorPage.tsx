import { useNavigate } from '@tanstack/react-router';
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  Row,
  Space,
  Typography,
  Avatar,
} from 'antd';
import {
  AimOutlined,
  RiseOutlined,
  DollarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
// import { useInvestorInfo } from '../hooks/useQueries';

const { Title, Paragraph } = Typography;

export default function InvestorPage() {
  const navigate = useNavigate();
//   const { data: investorInfo, isLoading } = useInvestorInfo();

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
            <Title level={1} style={{ fontSize: '3rem', marginBottom: 24 }}>
              Investor Relations
            </Title>
            <Paragraph style={{ fontSize: '1.25rem', color: '#666666' }}>
              Join us in building Kenya's leading grain milling company with strong growth potential and social impact
            </Paragraph>
          </div>
        </section>

        {/* Investment Opportunity */}
        {/* <section style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
              Investment Opportunity
            </Title>

            {isLoading ? (
              <Space orientation="vertical" size="large" style={{ width: '100%' }}>
                <Card loading />
                <Card loading />
              </Space>
            ) : investorInfo ? (
              <Space orientation="vertical" size="large" style={{ width: '100%' }}>
                <Card
                  hoverable
                  style={{ borderColor: 'rgba(56, 158, 13, 0.2)' }}
                >
                  <Space size="large">
                    <Avatar
                      size={64}
                      icon={<AimOutlined style={{ fontSize: 32 }} />}
                      style={{ backgroundColor: 'rgba(56, 158, 13, 0.1)', color: '#389e0d' }}
                    />
                    <div style={{ flex: 1 }}>
                      <Title level={4}>Funding Goal</Title>
                      <Paragraph type="secondary">
                        Capital required for expansion and growth
                      </Paragraph>
                      <Title level={1} style={{ color: '#389e0d', margin: 0 }}>
                        KSh {investorInfo.fundingGoal.toLocaleString()}
                      </Title>
                    </div>
                  </Space>
                </Card>

                <Card hoverable>
                  <Title level={4}>Financial Outlook (2025-2027)</Title>
                  <Paragraph type="secondary" style={{ whiteSpace: 'pre-line' }}>
                    {investorInfo.financialOutlook}
                  </Paragraph>
                </Card>

                <Card hoverable>
                  <Title level={4}>Use of Funds</Title>
                  <Paragraph type="secondary" style={{ whiteSpace: 'pre-line' }}>
                    {investorInfo.useOfFunds}
                  </Paragraph>
                </Card>
              </Space>
            ) : (
              <Card hoverable>
                <Title level={4}>Investment Information</Title>
                <Paragraph type="secondary">
                  Moran Millers is seeking strategic investment to scale operations and expand market reach across Kenya.
                </Paragraph>
                <Paragraph type="secondary">
                  Contact us to learn more about investment opportunities and receive our detailed investor brief.
                </Paragraph>
              </Card>
            )}
          </div>
        </section> */}

        {/* Investment Highlights */}
        <section style={{ padding: '96px 0', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 64 }}>
              Why Invest in Moran Millers
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} md={12} lg={6}>
                <Card hoverable>
                  <Space orientation="vertical" size="middle">
                    <Avatar
                      size={48}
                      icon={<RiseOutlined />}
                      style={{ backgroundColor: 'rgba(56, 158, 13, 0.1)', color: '#389e0d' }}
                    />
                    <Title level={4}>Growing Market</Title>
                    <Paragraph type="secondary">
                      Kenya's flour market continues to expand with increasing demand for quality products
                    </Paragraph>
                  </Space>
                </Card>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <Card hoverable>
                  <Space orientation="vertical" size="middle">
                    <Avatar
                      size={48}
                      icon={<AimOutlined />}
                      style={{ backgroundColor: 'rgba(250, 84, 28, 0.1)', color: '#fa541c' }}
                    />
                    <Title level={4}>Proven Model</Title>
                    <Paragraph type="secondary">
                      Established operations with strong customer relationships and reliable supply chains
                    </Paragraph>
                  </Space>
                </Card>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <Card hoverable>
                  <Space orientation="vertical" size="middle">
                    <Avatar
                      size={48}
                      icon={<DollarOutlined />}
                      style={{ backgroundColor: 'rgba(250, 173, 20, 0.1)', color: '#faad14' }}
                    />
                    <Title level={4}>Strong Margins</Title>
                    <Paragraph type="secondary">
                      Efficient operations and vertical integration drive healthy profit margins
                    </Paragraph>
                  </Space>
                </Card>
              </Col>

              <Col xs={24} md={12} lg={6}>
                <Card hoverable>
                  <Space orientation="vertical" size="middle">
                    <Avatar
                      size={48}
                      icon={<TeamOutlined />}
                      style={{ backgroundColor: 'rgba(56, 158, 13, 0.1)', color: '#389e0d' }}
                    />
                    <Title level={4}>Social Impact</Title>
                    <Paragraph type="secondary">
                      Investment that creates jobs and supports sustainable agriculture in rural communities
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* Growth Strategy */}
        <section style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
              Our Growth Strategy
            </Title>
            <Space orientation="vertical" size="large" style={{ width: '100%' }}>
              <Card hoverable>
                <Title level={4}>Phase 1: Capacity Expansion</Title>
                <Paragraph type="secondary">
                  Upgrade milling equipment to increase production capacity by 50%
                </Paragraph>
              </Card>
              <Card hoverable>
                <Title level={4}>Phase 2: Product Innovation</Title>
                <Paragraph type="secondary">
                  Launch Moran Uji Mix and develop additional value-added products for retail market
                </Paragraph>
              </Card>
              <Card hoverable>
                <Title level={4}>Phase 3: Market Expansion</Title>
                <Paragraph type="secondary">
                  Establish distribution networks in major urban centers across Kenya
                </Paragraph>
              </Card>
              <Card hoverable>
                <Title level={4}>Phase 4: Brand Building</Title>
                <Paragraph type="secondary">
                  Invest in marketing and brand awareness to become a household name in Kenya
                </Paragraph>
              </Card>
            </Space>
          </div>
        </section>

        {/* CTA Section */}
        <section
          style={{
            background: 'linear-gradient(to right, #389e0d, rgba(56, 158, 13, 0.8))',
            padding: '96px 0',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ color: 'white' }}>
              Interested in Learning More?
            </Title>
            <Paragraph style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 32 }}>
              Download our investor brief or schedule a call with our team to discuss investment opportunities
            </Paragraph>
            <Space size="middle">
              <Button
                type="primary"
                size="large"
                style={{ backgroundColor: 'white', color: 'black', border: 'none' }}
                onClick={() => navigate({ to: '/contact' })}
              >
                Download Investor Brief
              </Button>
              <Button
                size="large"
                style={{ borderColor: 'white', color: 'black' }}
                onClick={() => navigate({ to: '/contact' })}
              >
                Talk to Our Team
              </Button>
            </Space>
          </div>
        </section>
      </div>
    </ConfigProvider>
  );
}