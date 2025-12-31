import { useNavigate } from '@tanstack/react-router';
import { Button, Card, Col, ConfigProvider, Row, Space, Typography } from 'antd';
import { useProducts } from '../hooks/useQueries';
import Sifted_maizeflour from '../assets/Gemini_Generated_Image_4errvo4errvo4err.png'
import MilletFlour from "../assets/millet_flour.png"
import ujiMix from '../assets/ujiMix.png'

const { Title, Paragraph } = Typography;

export default function ProductsPage() {
  const navigate = useNavigate();
  const { data: products, isLoading } = useProducts();

  const getProductImage = (name: string) => {
    if (name.includes('Maize Flour')) {
      return Sifted_maizeflour;
    }
    if (name.includes('Millet')) {
      return MilletFlour;
    }
    return ujiMix;
  };

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
              Our Products & Services
            </Title>
            <Paragraph style={{ fontSize: '1.25rem', color: '#666666' }}>
              Premium quality flour products and comprehensive milling solutions for businesses across Kenya
            </Paragraph>
          </div>
        </section>

        {/* Products Grid */}
        <section style={{ padding: '96px 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
            <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
              <Title level={2}>Our Product Range</Title>
              <Paragraph style={{ fontSize: '1.125rem', color: '#666666' }}>
                From premium flour to custom milling services, we offer comprehensive solutions for your grain needs
              </Paragraph>
            </Space>

            {isLoading ? (
              <Row gutter={[32, 32]} style={{ marginTop: 48 }}>
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <Col xs={24} md={12} lg={8} key={i}>
                    <Card loading />
                  </Col>
                ))}
              </Row>
            ) : (
              <Row gutter={[32, 32]} style={{ marginTop: 48 }}>
                {products?.map((product:any) => (
                  <Col xs={24} md={12} lg={8} key={product.id}>
                    <Card
                      hoverable
                      cover={
                        <img
                          alt={product.name}
                          src={getProductImage(product.name)}
                          style={{ height: 200, objectFit: 'cover' }}
                        />
                      }
                      bodyStyle={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
                    >
                      <Title level={4}>{product.name}</Title>
                      <Paragraph type="secondary" style={{ flexGrow: 1 }}>
                        {product.description}
                      </Paragraph>

                      {product.price > 0 && (
                        <Title level={3} style={{ color: '#389e0d', margin: '16px 0' }}>
                          KSh {product.price.toLocaleString()}
                          <p style={{ fontSize: '0.875rem', fontWeight: 'normal' }}>
                            {' '}/unit
                          </p>
                        </Title>
                      )}

                      <Button
                        type="primary"
                        block
                        size="large"
                        onClick={() => navigate({ to: '/contact' })}
                      >
                        {product.cta || 'Order Now'}
                      </Button>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
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
              Ready to Place Your Order?
            </Title>
            <Paragraph style={{ fontSize: '1.125rem', opacity: 0.9, marginBottom: 32 }}>
              Contact us today for wholesale pricing and custom milling solutions
            </Paragraph>
            <Space size="middle">
              <Button
                type="primary"
                size="large"
                style={{ backgroundColor: 'white', color: '#389e0d', border: 'none' }}
                onClick={() => navigate({ to: '/contact' })}
              >
                Request a Quote
              </Button>
            
            </Space>
          </div>
        </section>
      </div>
    </ConfigProvider>
  );
}