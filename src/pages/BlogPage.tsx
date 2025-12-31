import { Link, useNavigate } from '@tanstack/react-router';
import { Button, Card, Col, ConfigProvider, Empty, Row, Skeleton, Space, Typography } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
// import { useBlogSummaries } from '@/hooks//useQueries';

const { Title, Text } = Typography;

export default function BlogPage() {
  const navigate = useNavigate();
//   const { data: blogSummaries, isLoading } = useBlogSummaries();

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#389e0d', // brand-green
        },
        components: {
          Card: {
            borderRadiusLG: 12,
          },
        },
      }}
    >
      <div style={{ minHeight: '100vh' }}>
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(to bottom right, rgba(56, 158, 13, 0.1), #fff)',
            padding: '80px 0',
          }}
        >
          <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <Title level={1} style={{ marginBottom: 24, fontSize: '3rem' }}>
              Blog & News
            </Title>
            <Text style={{ fontSize: '1.25rem', color: '#666' }}>
              Stay updated with the latest news, insights, and stories from Moran Millers
            </Text>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section style={{ padding: '80px 0' }}>
          <div className="container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            {/* {isLoading ? (
              <Row gutter={[24, 32]}>
                {[1, 2, 3].map((i) => (
                  <Col xs={24} md={12} lg={8} key={i}>
                    <Card>
                      <Skeleton.Image style={{ width: '100%', height: 192 }} active />
                      <Skeleton active paragraph={{ rows: 3 }} style={{ marginTop: 16 }} />
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : blogSummaries && blogSummaries.length > 0 ? (
              <Row gutter={[24, 32]}>
                {blogSummaries.map((post) => (
                  <Col xs={24} md={12} lg={8} key={post.id}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={post.title}
                          src="/assets/generated/uji-mix-product.dim_400x400.jpg"
                          style={{
                            height: 192,
                            objectFit: 'cover',
                          }}
                        />
                      }
                      bodyStyle={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                    >
                      <Space direction="vertical" size="middle" style={{ flex: 1 }}>
                        <Space size="small">
                          <CalendarOutlined style={{ color: '#999' }} />
                          <Text type="secondary">{formatDate(post.date)}</Text>
                        </Space>

                        <Title level={4} style={{ margin: '8px 0', lineHeight: 1.4 }}>
                          {post.title}
                        </Title>

                        <div style={{ marginTop: 'auto' }}>
                          <Button
                            block
                            onClick={() =>
                              navigate({ to: '/blog/$postId', params: { postId: post.id } })
                            }
                          >
                            Read More
                          </Button>
                        </div>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            ) : (
              <div style={{ textAlign: 'center', padding: '64px 0' }}>
                <Empty
                  description={
                    <Space direction="vertical">
                      <Title level={3}>No Blog Posts Yet</Title>
                      <Text type="secondary">
                        Check back soon for updates and news from Moran Millers
                      </Text>
                    </Space>
                  }
                />
              </div>
            )} */}
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
                <Empty
                  description={
                    <Space orientation="vertical">
                      <Title level={3}>No Blog Posts Yet</Title>
                      <Text type="secondary">
                        Check back soon for updates and news from Moran Millers
                      </Text>
                    </Space>
                  }
                />
              </div>
          </div>
        </section>
      </div>
    </ConfigProvider>
  );
}