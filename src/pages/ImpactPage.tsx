import { useNavigate } from '@tanstack/react-router';
import {
    Button,
    Card,
    Col,
    ConfigProvider,
    Row,
    Space,
    Typography,
    List,
    Avatar,
} from 'antd';
import {
    RiseOutlined,
    SyncOutlined,
    CheckCircleOutlined,
} from '@ant-design/icons';
import { FiTarget } from "react-icons/fi";
import { useImpactPoints } from '../hooks/useQueries';

const { Title, Text, Paragraph } = Typography;

export default function ImpactPage() {
    const navigate = useNavigate();
    const { data: impactPoints, isLoading } = useImpactPoints();

    const sdgGoals = [
        {
            icon: FiTarget,
            number: 'SDG 2',
            title: 'Zero Hunger',
            description: 'Providing nutritious, affordable flour products to communities across Kenya',
            color: '#389e0d', // brand-green
            bgColor: 'rgba(56, 158, 13, 0.1)',
        },
        {
            icon: RiseOutlined,
            number: 'SDG 8',
            title: 'Decent Work & Economic Growth',
            description: 'Creating jobs and supporting local farmers through fair trade practices',
            color: '#fa541c', // brand-orange
            bgColor: 'rgba(250, 84, 28, 0.1)',
        },
        {
            icon: SyncOutlined,
            number: 'SDG 12',
            title: 'Responsible Consumption',
            description: 'Implementing circular economy practices and minimizing waste in our operations',
            color: '#faad14', // brand-yellow
            bgColor: 'rgba(250, 173, 20, 0.1)',
        },
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
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                        <Title level={1} style={{ fontSize: '3rem', marginBottom: 24 }}>
                            Impact & Sustainability
                        </Title>
                        <Paragraph style={{ fontSize: '1.25rem', color: '#666666' }}>
                            Building a sustainable future through responsible milling practices and community empowerment
                        </Paragraph>
                    </div>
                </section>

                {/* SDG Alignment */}
                <section style={{ padding: '96px 0' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                        <Title level={2} style={{ textAlign: 'center', marginBottom: 64 }}>
                            Our Commitment to the UN Sustainable Development Goals
                        </Title>
                        <Row gutter={[32, 32]}>
                            {sdgGoals.map((goal) => (
                                <Col xs={24} md={8} key={goal.number}>
                                    <Card hoverable>
                                        <Space direction="vertical" size="large">
                                            <Avatar
                                                size={64}
                                                icon={<goal.icon style={{ fontSize: 32, color: goal.color }} />}
                                                style={{ backgroundColor: goal.bgColor }}
                                            />
                                            <div>
                                                <Text strong style={{ color: goal.color, fontSize: '0.875rem' }}>
                                                    {goal.number}
                                                </Text>
                                                <Title level={4} style={{ margin: '8px 0' }}>
                                                    {goal.title}
                                                </Title>
                                                <Paragraph type="secondary">{goal.description}</Paragraph>
                                            </div>
                                        </Space>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </section>

                {/* Circular Economy */}
                <section style={{ padding: '96px 0', backgroundColor: '#f9f9f9' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                        <Row gutter={[48, 48]} align="middle">
                            <Col xs={24} lg={12}>
                                <img
                                    src="/assets/generated/sustainable-milling.dim_800x600.jpg"
                                    alt="Sustainable Milling"
                                    style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                />
                            </Col>
                            <Col xs={24} lg={12}>
                                <Space direction="vertical" size="large">
                                    <Title level={2}>Circular Economy Practices</Title>
                                    <Paragraph style={{ fontSize: '1.125rem', color: '#666666' }}>
                                        At Moran Millers, we believe in maximizing value while minimizing waste. Our circular economy approach ensures
                                        that every part of the grain is utilized effectively.
                                    </Paragraph>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                                        <Card style={{ borderColor: 'rgba(56, 158, 13, 0.2)', backgroundColor: 'rgba(56, 158, 13, 0.05)' }}>
                                            <Title level={5} style={{ color: '#389e0d' }}>Zero Waste Milling</Title>
                                            <Paragraph type="secondary">
                                                Byproducts from our milling process are converted into high-quality animal feed, ensuring nothing goes to waste
                                            </Paragraph>
                                        </Card>
                                        <Card style={{ borderColor: 'rgba(250, 84, 28, 0.2)', backgroundColor: 'rgba(250, 84, 28, 0.05)' }}>
                                            <Title level={5} style={{ color: '#fa541c' }}>Energy Efficiency</Title>
                                            <Paragraph type="secondary">
                                                Modern milling equipment optimized for energy efficiency reduces our environmental footprint
                                            </Paragraph>
                                        </Card>
                                        <Card style={{ borderColor: 'rgba(250, 173, 20, 0.2)', backgroundColor: 'rgba(250, 173, 20, 0.05)' }}>
                                            <Title level={5} style={{ color: '#faad14' }}>Sustainable Sourcing</Title>
                                            <Paragraph type="secondary">
                                                We partner with local farmers who practice sustainable agriculture methods
                                            </Paragraph>
                                        </Card>
                                    </div>
                                </Space>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* Farmer Empowerment */}
                <section style={{ padding: '96px 0' }}>
                    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                        <Row gutter={[48, 48]} align="middle">
                            <Col xs={24} lg={12} push={12}>
                                <img
                                    src="/assets/generated/farmers-community.dim_800x600.jpg"
                                    alt="Farmers Community"
                                    style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                />
                            </Col>
                            <Col xs={24} lg={12} pull={12}>
                                <Space direction="vertical" size="large">
                                    <Title level={2}>Empowering Local Farmers</Title>
                                    <Paragraph style={{ fontSize: '1.125rem', color: '#666666' }}>
                                        Our success is built on strong partnerships with local farmers. We provide fair prices, reliable markets, and
                                        support that helps farming communities thrive.
                                    </Paragraph>
                                    <List
                                        itemLayout="horizontal"
                                        dataSource={[
                                            'Fair Trade Pricing: Competitive prices that ensure farmers earn a living wage',
                                            'Technical Support: Training and resources to improve crop quality and yields',
                                            'Reliable Market Access: Guaranteed purchase agreements for quality produce',
                                        ]}
                                        renderItem={(item) => (
                                            <List.Item>
                                                <List.Item.Meta
                                                    avatar={
                                                        <Avatar
                                                            icon={<CheckCircleOutlined />}
                                                            style={{ backgroundColor: 'rgba(56, 158, 13, 0.1)', color: '#389e0d' }}
                                                        />
                                                    }
                                                    title={item.split(':')[0]}
                                                    description={<Text type="secondary">{item.split(':')[1]}</Text>}
                                                />
                                            </List.Item>
                                        )}
                                    />
                                </Space>
                            </Col>
                        </Row>
                    </div>
                </section>

                {/* Impact Metrics */}
                {!isLoading && impactPoints && impactPoints.length > 0 && (
                    <section style={{ padding: '96px 0', backgroundColor: '#f9f9f9' }}>
                        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                            <Title level={2} style={{ textAlign: 'center', marginBottom: 64 }}>
                                Our Impact by the Numbers
                            </Title>
                            <Row gutter={[32, 32]}>
                                {impactPoints.map((point: any, index: any) => (
                                    <Col xs={24} md={12} lg={8} key={index}>
                                        <Card hoverable>
                                            <Title level={3} style={{ color: '#389e0d' }}>
                                                {point.goal}
                                            </Title>
                                            <Paragraph type="secondary">{point.description}</Paragraph>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </section>
                )}

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
                            Join Our Mission
                        </Title>
                        <Paragraph style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 32 }}>
                            Partner with us to create positive impact in communities across Kenya
                        </Paragraph>
                        <Space size="middle">
                            <Button
                                type="primary"
                                size="large"
                                style={{ backgroundColor: 'white', color: '#389e0d', border: 'none' }}
                                onClick={() => navigate({ to: '/contact' })}
                            >
                                Get Involved
                            </Button>
                            <Button
                                size="large"
                                style={{ borderColor: 'white', color: 'white' }}
                                onClick={() => navigate({ to: '/about' })}
                            >
                                Learn More About Us
                            </Button>
                        </Space>
                    </div>
                </section>
            </div>
        </ConfigProvider>
    );
}