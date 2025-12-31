import { useNavigate } from '@tanstack/react-router';
import {
    Button,
    Card,
    Col,
    ConfigProvider,
    Empty,
    Row,
    Skeleton,
    Space,
    Typography,
} from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
// import { useBlogSummaries } from '../hooks/useQueries';

const { Title, Text } = Typography;

export default function BlogPage() {
    const navigate = useNavigate();
    // const { data: blogSummaries, isLoading } = useBlogSummaries();

    const formatDate = (timestamp: bigint) => {
        const date = new Date(Number(timestamp) / 1000000);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        // <ConfigProvider
        //   theme={{
        //     token: {
        //       colorPrimary: '#389e0d', // brand-green
        //       borderRadius: 12,
        //     },
        //   }}
        // >
        //   <div className="flex flex-col">
        //     {/* Hero Section */}
        //     <section
        //       style={{
        //         background: 'linear-gradient(to bottom right, rgba(56, 158, 13, 0.1), #ffffff)',
        //         padding: '96px 0',
        //       }}
        //     >
        //       <div
        //         className="container"
        //         style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}
        //       >
        //         <Title level={1} style={{ margin: '0 0 24px 0', fontSize: '3rem' }}>
        //           Blog & News
        //         </Title>
        //         <Text style={{ fontSize: '1.25rem', color: '#666' }}>
        //           Stay updated with the latest news, insights, and stories from Moran Millers
        //         </Text>
        //       </div>
        //     </section>

        //     {/* Blog Posts Section */}
        //     <section style={{ padding: '96px 0' }}>
        //       <div
        //         className="container"
        //         style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}
        //       >
        //         {isLoading ? (
        //           <Row gutter={[24, 32]}>
        //             {[0, 1, 2].map((i) => (
        //               <Col xs={24} sm={12} lg={8} key={i}>
        //                 <Card>
        //                   <Skeleton.Image
        //                     active
        //                     style={{ width: '100%', height: 192 }}
        //                   />
        //                   <Skeleton active paragraph={{ rows: 4 }} style={{ marginTop: 24 }} />
        //                 </Card>
        //               </Col>
        //             ))}
        //           </Row>
        //         ) : blogSummaries && blogSummaries.length > 0 ? (
        //           <Row gutter={[24, 32]}>
        //             {blogSummaries.map((post:any) => (
        //               <Col xs={24} sm={12} lg={8} key={post.id}>
        //                 <Card
        //                   hoverable
        //                   cover={
        //                     <img
        //                       alt={post.title}
        //                       src="/assets/generated/uji-mix-product.dim_400x400.jpg"
        //                       style={{
        //                         height: 192,
        //                         objectFit: 'cover',
        //                       }}
        //                     />
        //                   }
        //                 >
        //                   <div style={{ minHeight: 180 }}>
        //                     <Space size={8} style={{ marginBottom: 12, color: '#999' }}>
        //                       <CalendarOutlined />
        //                       <Text type="secondary">{formatDate(post.date)}</Text>
        //                     </Space>

        //                     <Title level={4} ellipsis={{ rows: 2 }}>
        //                       {post.title}
        //                     </Title>
        //                   </div>

        //                   <Button
        //                     block
        //                     onClick={() =>
        //                       navigate({
        //                         to: '/blog/$postId',
        //                         params: { postId: post.id },
        //                       })
        //                     }
        //                   >
        //                     Read More
        //                   </Button>
        //                 </Card>
        //               </Col>
        //             ))}
        //           </Row>
        //         ) : (
        //           <div style={{ textAlign: 'center', padding: '80px 0' }}>
        //             <Empty
        //               description={
        //                 <Space direction="vertical" size="middle">
        //                   <Title level={3}>No Blog Posts Yet</Title>
        //                   <Text type="secondary">
        //                     Check back soon for updates and news from Moran Millers
        //                   </Text>
        //                 </Space>
        //               }
        //             />
        //           </div>
        //         )}
        //       </div>
        //     </section>
        //   </div>
        // </ConfigProvider>

        <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <Empty
                description={
                    <Space direction="vertical" size="middle">
                        <Title level={3}>No Blog Posts Yet</Title>
                        <Text type="secondary">
                            Check back soon for updates and news from Moran Millers
                        </Text>
                    </Space>
                }
            />
        </div>
    );
}