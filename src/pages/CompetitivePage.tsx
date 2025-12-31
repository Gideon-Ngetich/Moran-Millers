import { useNavigate } from '@tanstack/react-router';
import {
  Avatar,
  Button,
  Card,
  Col,
  ConfigProvider,
  Divider,
  List,
  Rate,
  Row,
  Skeleton,
  Space,
  Table,
  Tag,
  Typography,
} from 'antd';
import {
  TrophyOutlined,
  BulbOutlined,
  EnvironmentOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
// import { useCompanyComparison } from '@/hooks/useQueries';

const { Title, Text, Paragraph } = Typography;

export default function CompetitivePage() {
  const navigate = useNavigate();
//   const { data: comparison, isLoading } = useCompanyComparison();

  const differentiators = [
    {
      icon: TrophyOutlined,
      title: 'Superior Quality Control',
      description:
        'Our rigorous quality assurance processes ensure every batch meets the highest standards. We test at multiple stages from grain sourcing to final packaging.',
      color: '#389e0d', // brand-green
      bgColor: 'rgba(56, 158, 13, 0.1)',
    },
    {
      icon: BulbOutlined,
      title: 'Innovation Leadership',
      description:
        'We continuously invest in product development, bringing innovative solutions like Moran Uji Mix that combine tradition with modern nutrition science.',
      color: '#fa541c', // brand-orange
      bgColor: 'rgba(250, 84, 28, 0.1)',
    },
    {
      icon: EnvironmentOutlined,
      title: 'Sustainability Commitment',
      description:
        'Our circular economy practices and farmer empowerment programs set us apart as a socially responsible business partner.',
      color: '#faad14', // brand-yellow
      bgColor: 'rgba(250, 173, 20, 0.1)',
    },
  ];

  const columns = [
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
      render: (text: string, _record: any) => (
        <Space>
          <Text strong>{text}</Text>
          {text === 'Moran Millers' && <Tag color="success">Us</Tag>}
        </Space>
      ),
    },
    {
      title: 'Quality',
      dataIndex: 'quality',
      key: 'quality',
      align: 'center' as const,
      render: (value: string) => (
        <Rate
          disabled
          defaultValue={Number(value)}
          style={{ fontSize: 14, color: '#389e0d' }}
        />
      ),
    },
    {
      title: 'Innovation',
      dataIndex: 'innovation',
      key: 'innovation',
      align: 'center' as const,
      render: (value: string) => (
        <Rate
          disabled
          defaultValue={Number(value)}
          style={{ fontSize: 14, color: '#fa541c' }}
        />
      ),
    },
    {
      title: 'Sustainability',
      dataIndex: 'sustainability',
      key: 'sustainability',
      align: 'center' as const,
      render: (value: string) => (
        <Rate
          disabled
          defaultValue={Number(value)}
          style={{ fontSize: 14, color: '#faad14' }}
        />
      ),
    },
  ];

  const partnerBenefits = [
    'Consistent Quality: Every batch meets strict quality standards, ensuring your customers receive the best products',
    'Reliable Supply Chain: Strong farmer partnerships ensure consistent supply even during peak seasons',
    'Competitive Pricing: Efficient operations allow us to offer competitive wholesale prices without compromising quality',
    'Custom Solutions: Flexible packaging and custom milling services tailored to your specific needs',
    'Ethical Business Practices: Partner with a company committed to sustainability and community development',
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#389e0d',
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
          <div
            className="container"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}
          >
            <Title level={1} style={{ margin: '0 0 24px 0', fontSize: '3rem', fontWeight: 'bold' }}>
              Why Choose Moran Millers
            </Title>
            <Text style={{ fontSize: '1.25rem', color: '#666666' }}>
              Discover what sets us apart in Kenya's competitive grain milling industry
            </Text>
          </div>
        </section>

        {/* Key Differentiators */}
        <section style={{ padding: '96px 0' }}>
          <div
            className="container"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}
          >
            <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
              Our Competitive Advantages
            </Title>
            <Row gutter={[32, 32]}>
              {differentiators.map((item, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card hoverable>
                    <Space direction="vertical" size="middle">
                      <Avatar
                        size={64}
                        icon={<item.icon style={{ fontSize: 32, color: item.color }} />}
                        style={{ backgroundColor: item.bgColor }}
                      />
                      <Title level={4}>{item.title}</Title>
                      <Paragraph type="secondary">{item.description}</Paragraph>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Comparison Table */}
        {/* <section style={{ padding: '96px 0', backgroundColor: '#f5f5f5' }}>
          <div
            className="container"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}
          >
            <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
              Market Comparison
            </Title>
            <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 32, fontSize: '1.125rem' }}>
              See how Moran Millers compares to other players in the market
            </Text>

            {isLoading ? (
              <div style={{ maxWidth: 800, margin: '0 auto' }}>
                <Skeleton active />
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <Table
                  dataSource={comparison}
                  columns={columns}
                  pagination={false}
                  rowClassName={(record) =>
                    record.company === 'Moran Millers' ? 'ant-table-row-highlight' : ''
                  }
                  style={{ maxWidth: 900, margin: '0 auto' }}
                />
              </div>
            )}
          </div>
        </section> */}

        {/* Why Partner Section */}
        <section style={{ padding: '96px 0' }}>
          <div
            className="container"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}
          >
            <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
              Why Partner With Moran Millers
            </Title>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
              <List
                itemLayout="horizontal"
                dataSource={partnerBenefits}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<CheckCircleOutlined style={{ fontSize: 24, color: '#389e0d' }} />}
                      title={<Text strong>{item.split(':')[0]}</Text>}
                      description={<Text type="secondary">{item.split(':')[1]}</Text>}
                    />
                  </List.Item>
                )}
              />
            </div>
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
          <div
            className="container"
            style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}
          >
            <Title level={2} style={{ color: 'white', marginBottom: 16 }}>
              Ready to Partner With Moran?
            </Title>
            <Paragraph style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 32 }}>
              Join leading businesses across Kenya who trust Moran Millers for quality flour products
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: 'white', color: '#389e0d', border: 'none' }}
              onClick={() => navigate({ to: '/contact' })}
            >
              Become a Partner
            </Button>
          </div>
        </section>
      </div>

      {/* Optional: Highlight row style */}
      <style>{`
        .ant-table-row-highlight {
          background-color: rgba(56, 158, 13, 0.05) !important;
        }
      `}</style>
    </ConfigProvider>
  );
}