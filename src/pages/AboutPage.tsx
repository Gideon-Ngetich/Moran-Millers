// import { useNavigate } from '@tanstack/react-router';
import { Col, ConfigProvider, Row, Space, Typography} from 'antd';
// import { useContactDetails, useLeadershipBios, useDailySchedule } from '../hooks/useQueries';

const { Title, Paragraph } = Typography;

export default function AboutPage() {
//   const navigate = useNavigate();
//   const { data: contactDetails } = useContactDetails();
//   const { data: leadership } = useLeadershipBios();
//   const { data: schedule } = useDailySchedule();

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
              About Moran Millers Ltd
            </Title>
            <Paragraph style={{ fontSize: '1.25rem', color: '#666666' }}>
              Building Kenya's most trusted grain milling company through quality, innovation, and community empowerment
            </Paragraph>
          </div>
        </section>

        {/* Company Overview */}
        <section style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <img
                  src="https://i.ytimg.com/vi/jfFTLgFRjic/hq720.jpg"
                  alt="Moran Millers Facility"
                  style={{ width: '100%', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                />
              </Col>
              <Col xs={24} lg={12}>
                <Space direction="vertical" size="large">
                  <Title level={2}>Our Story</Title>
                  <Paragraph style={{ fontSize: '1.125rem', color: '#666666' }}>
                    Moran Millers Ltd is a privately owned agro-processing company registered in Kenya and operational since 2015. From our base along Ngong–Kiserian Road in Kajiado County, we mill premium maize and millet flour under the brand “Moran” and repurpose by-products into animal feeds.
                  </Paragraph>
                  <Title level={3} style={{ color: '#389e0d' }}>Our Vision</Title>
                  <Paragraph style={{ color: '#666666' }}>
                    To be East Africa’s leading agro-processing enterprise recognized for innovation, quality, and inclusive growth.
                  </Paragraph>
                  <Title level={3} style={{ color: '#fa541c' }}>Our Mission</Title>
                  <Paragraph style={{ color: '#666666' }}>
                    To deliver premium-quality flour that meets nutritional needs while supporting sustainable agriculture and food security.
                  </Paragraph>
                </Space>
              </Col>
            </Row>
          </div>
        </section>

        {/* Leadership Team */}
        {/* <section style={{ padding: '96px 0', backgroundColor: '#f9f9f9' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 64 }}>
              Our Leadership Team
            </Title>
            <Row gutter={[32, 32]}>
              {leadership?.map((leader) => (
                <Col xs={24} md={12} key={leader.name}>
                  <Card hoverable>
                    <Space size="large">
                      <Avatar
                        size={80}
                        src={
                          leader.name.includes('Bryan')
                            ? 'https://c8.alamy.com/comp/2XMXY0A/ceo-portrait-and-mature-black-man-in-office-for-corporate-career-business-or-leadership-in-kenya-face-happy-professional-and-executive-2XMXY0A.jpg'
                            : 'https://media.istockphoto.com/id/1653368202/photo/atrium-portrait-of-cheerful-kenyan-business-professional.jpg?s=612x612&w=0&k=20&c=GMEGHvhKewayec_K6iw9ATpIjWst8T4YvJihiBtT3CE='
                        }
                        alt={leader.name}
                      />
                      <div>
                        <Title level={4}>{leader.name}</Title>
                        <Paragraph type="secondary" style={{ color: '#389e0d' }}>
                          {leader.position}
                        </Paragraph>
                        <Paragraph type="secondary">{leader.bio}</Paragraph>
                      </div>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section> */}

        {/* Daily Operations */}
        {/* <section style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
              Our Daily Operations
            </Title>
            <Paragraph style={{ textAlign: 'center', fontSize: '1.125rem', color: '#666666', marginBottom: 48 }}>
              A glimpse into our structured daily rhythm that ensures quality and efficiency
            </Paragraph>
            <Row justify="center">
              <Col xs={24} md={16}>
                <List
                  itemLayout="horizontal"
                  dataSource={schedule}
                  renderItem={(event) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            size={64}
                            style={{ backgroundColor: 'rgba(56, 158, 13, 0.1)', color: '#389e0d', fontWeight: 'bold' }}
                          >
                            {event.time}
                          </Avatar>
                        }
                        title={<Title level={5}>{event.activity}</Title>}
                      />
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </div>
        </section> */}

        {/* Market Context */}
        <section
          style={{
            background: 'linear-gradient(to bottom right, rgba(250, 84, 28, 0.1), rgba(250, 173, 20, 0.1))',
            padding: '96px 0',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 24px' }}>
            <Title level={2}>Our Market Position</Title>
            <Paragraph style={{ fontSize: '1.125rem', color: '#666666' }}>
              Operating in Kenya's dynamic grain milling sector, Moran Millers serves a growing market of households, retailers, and institutions seeking quality flour products.
            </Paragraph>
            <Paragraph style={{ fontSize: '1.125rem', color: '#666666' }}>
              We differentiate ourselves through superior quality control, innovative product development, and a commitment to sustainable practices that benefit both our customers and the communities we serve.
            </Paragraph>
          </div>
        </section>
      </div>
    </ConfigProvider>
  );
}