
import { Breadcrumb, Divider, Flex, Typography, Button, Modal, Card } from 'antd'
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';

import './ProductDetail.scss'
import Footer from '../footer/Footer.js';

import top_deal_prod from '../../assets/Products/top_deal/top_deal_prod.png'
import real_prod from '../../assets/Products/top_deal/real_prod.png'
import turnback from '../../assets/Products/top_deal/turnback.png'
import star from '../../assets/Products/top_deal/star.png'
import now_delivery from '../../assets/Products/top_deal/now.png'
import weather from '../../assets/Products/top_deal/weather.png'
import tiki_logo from '../../assets/Products/top_deal/tiki_logo.webp'
import official from '../../assets/Products/top_deal/official.webp'
import DeliveryLocationModal from '../header/DeliveryLocationModal';
import { totalProducts } from '../../contentData';

const { Text, Title, Paragraph } = Typography

const ProductDetail = () => {
    // Lấy ra tham số Id của URL
    const { id } = useParams();
    const product = totalProducts.find(prod => prod.id === parseInt(id))
    console.log(product)

    // Logic Expand Image product
    const [expandIndex, setExpandIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleChoose = (index) => {
        setActiveIndex(index);
        setExpandIndex(index);
    }

    // Logic show modal
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }

    // Logic set list products
    const [currentData, setCurrentData] = useState([]);
    useEffect(() => {
        setCurrentData(() => {
            const data = totalProducts.filter(item => {
                return item.id != product.id
            })
            const result = data.filter(item => {
                return item.category === product.category
            })
            return result;
        })
    }, [])

    // Logic count product
    const [amountProd, setAmountProd] = useState(1);

    return (
        <>
            {/* <Title style={{color:'red'}}>{id}</Title> */}
            <Flex justify='center'>
                <Flex vertical>
                    <Flex align='center' className='commitment' gap='small'>
                        <Flex align='center' justify='center'>
                            <a className='title'>Cam kết</a>
                        </Flex>
                        <Flex align='center' justify='center' gap='3px'>
                            <img src='https://salt.tikicdn.com/ts/upload/96/76/a3/16324a16c76ee4f507d5777608dab831.png'></img>
                            <a>100% hàng thật</a>
                        </Flex>

                        <Divider type='vertical' style={{ height: '20px', backgroundColor: '#ccc' }} />

                        <Flex align='center' justify='center' gap='4px'>
                            <img src='https://salt.tikicdn.com/ts/upload/0b/f2/19/c03ae8f46956eca66845fb9aaadeca1e.png'></img>
                            <a>Hoàn 200% nếu hàng giả</a>
                        </Flex>

                        <Divider type='vertical' style={{ height: '20px', backgroundColor: '#ccc' }} />

                        <Flex align='center' justify='center' gap='4px'>
                            <img src='https://salt.tikicdn.com/ts/upload/3a/f4/7d/86ca29927e9b360dcec43dccb85d2061.png'></img>
                            <a>30 ngày đổi trả</a>
                        </Flex>

                        <Divider type='vertical' style={{ height: '20px', backgroundColor: '#ccc' }} />

                        <Flex align='center' justify='center' gap='4px'>
                            <img src='https://salt.tikicdn.com/ts/upload/04/c8/6f/3ec1db7c9ac4099df6b31da715614b0e.png'></img>
                            <a>Giao nhanh 2h</a>
                        </Flex>

                        <Divider type='vertical' style={{ height: '20px', backgroundColor: '#ccc' }} />

                        <Flex align='center' justify='center' gap='4px'>
                            <img src='	https://salt.tikicdn.com/ts/upload/6a/81/06/0675ef5512c275a594d5ec1d58c37861.png'></img>
                            <a>Giá siêu rẻ</a>
                        </Flex>
                    </Flex>

                    <Breadcrumb
                        separator='>'
                        items={
                            [
                                {
                                    title: <Link to="/">Trang chủ</Link>,
                                },
                                {
                                    // title:'Product name'
                                    title: `${product.name}`
                                }
                            ]
                        }
                    />
                    <Flex
                        vertical
                        className='product-detail container-max'
                        style={{
                            position: 'sticky',
                            top: '0'
                        }}
                    >
                        <Flex style={{ width: '100%' }}>
                            <Flex
                                vertical className='prod-image wrapper'
                                gap='small'
                                style={{
                                    position: 'sticky',
                                    top: '0'
                                }}
                            >
                                <Flex className='expand-image'>
                                    <img
                                        // key={product.list_pics.indexOf(expandIndex)}
                                        src={product.list_pics[expandIndex]}
                                    />
                                </Flex>
                                <Flex className='list-image' gap='small'>
                                    {
                                        product.list_pics.map((image, index) => (
                                            <img
                                                key={image.id}
                                                src={image}
                                                onClick={() => handleChoose(index)}
                                                onMouseEnter={() => setExpandIndex(index)}
                                                onMouseLeave={() => setExpandIndex(activeIndex)}
                                                className={`${activeIndex === index ? 'active' : ''}`}
                                            ></img>
                                        ))
                                    }
                                </Flex>
                                <Divider />
                            </Flex>

                            <Flex vertical className='prod-content'
                                style={{
                                    width: '48%'
                                }} >
                                <Flex vertical className='wrapper'>
                                    <Flex justify='flex-start' gap='middle' wrap>
                                        <img style={{ width: '85px', height: '20px' }} src={top_deal_prod}></img>
                                        <img style={{ width: '95px', height: '20px' }} src={real_prod}></img>
                                        <img style={{ width: '100px', height: '20px' }} src={turnback}></img>
                                        <Text className='author'>Tác giả: <a>Trần Phách Hàm</a></Text>
                                    </Flex>
                                    <Flex align='center' gap='4px' className='star-review'>
                                        <Text>4.8</Text>
                                        <span>
                                            <img src={star}></img>
                                            <img src={star}></img>
                                            <img src={star}></img>
                                            <img src={star}></img>
                                            <img src={star}></img>
                                        </span>
                                        <span><Text type='secondary'>(4787)</Text></span>
                                        <Divider type='vertical' style={{ height: '15px', backgroundColor: '#ccc' }} />
                                        <Text type='secondary'>Đã bán: 5000+</Text>
                                    </Flex>
                                    <Title style={{ marginBottom: '0' }} level={3}>{product.name}</Title>
                                    <Flex align='center' gap='small'>
                                        <Text className='main-price'>{product.price}<sup>đ</sup></Text>
                                        <Text className='discount'>{product.discount}</Text>
                                    </Flex>
                                </Flex>

                                <Flex vertical className='wrapper'>
                                    <Title level={5}>Thông tin vận chuyển</Title>
                                    <Flex align='center'
                                        justify='space-between'
                                        onClick={showModal}
                                    >
                                        <Text style={{ color: '#777' }}>Giao đến Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội</Text>
                                        <Button type='link'>Đổi</Button>
                                    </Flex>

                                    <Modal
                                        open={isModalOpen}
                                        footer={null}
                                        onCancel={handleCancel}
                                        width={600}
                                        className="location-modal"
                                    >
                                        <DeliveryLocationModal />
                                    </Modal>

                                    <Divider style={{ margin: '4px 0' }} />

                                    <Flex vertical className='now-delivery'>
                                        <Flex align='center' gap='small'>
                                            <Flex align='center'><img src={now_delivery}></img></Flex>
                                            <Text style={{ fontSize: '15px' }}>Giao siêu tốc 2h</Text>
                                        </Flex>
                                        <Text style={{ color: '#777', lineHeight: '14px' }}>Trước 10h sáng ngày mai: 25.000<sup>đ</sup></Text>
                                        <Flex align='center' gap='small'>
                                            <Flex align='center'><img src={weather}></img></Flex>
                                            <Text style={{ fontSize: '15px', marginTop: '12px' }}>Giao đúng sáng mai</Text>
                                        </Flex>
                                        <Text style={{ color: '#777', lineHeight: '14px' }}>8h-12h, 04/07: 14.000<sup>đ</sup></Text>
                                        <Text style={{ color: '#777', margin: '4px 0' }}>Nếu đặt trong 50 phút nữa</Text>
                                    </Flex>
                                </Flex>

                                <Flex vertical className='wrapper'>
                                    <Title level={5}>Ưu đãi khác</Title>
                                    <Flex align='center' justify='space-between'>
                                        <Text>1 Mã Giảm Giá</Text>
                                        <Button style={{ color: '#0a68ff' }}>Giảm 25K</Button>
                                    </Flex>
                                </Flex>

                                <Flex vertical className='wrapper'>
                                    <Title level={5}>Sản phẩm tương tự</Title>

                                    <Flex justify='space-between' className="product-list wrapper" wrap gap='10px'>
                                        {
                                            currentData.map(item => (
                                                <>
                                                    {/* <Link to={`/product/${item.id}`}
                                                style={{
                                                    width: '23%',
                                                    margin: '6px 8px'
                                                }}> */}
                                                    <Card
                                                        key={item.id}
                                                        className="product-item"
                                                        hoverable
                                                        style={{
                                                            width: '23%',
                                                        }}
                                                        cover={<img alt="camera" src={item.picture} />}
                                                    >
                                                        <Flex vertical>
                                                            <Paragraph
                                                                style={{
                                                                    margin: '5px auto',
                                                                    color: '#5d5d5e'
                                                                }}
                                                                ellipsis={{
                                                                    rows: 2,
                                                                }}
                                                            >
                                                                {item.name}
                                                            </Paragraph>
                                                            <Title
                                                                style={{
                                                                    margin: '0',
                                                                    fontSize: '18px'
                                                                }}
                                                                type={!!item.discount ? 'danger' : ''}>
                                                                {item.price}<sup>đ</sup>
                                                            </Title>
                                                            <Flex gap='small' align="center">
                                                                {!!item.discount &&
                                                                    <Text className="discount">{item.discount}</Text>
                                                                }
                                                                {!!item.origin_price &&
                                                                    <Text type="secondary" delete style={{ fontSize: '12px' }}>
                                                                        {item.origin_price}
                                                                    </Text>
                                                                }
                                                            </Flex>

                                                        </Flex>
                                                    </Card>
                                                    {/* </Link> */}
                                                </>
                                            ))
                                        }

                                    </Flex>
                                    
                                </Flex>
                            </Flex>

                            <Flex gap='middle' vertical className='tiki-trading wrapper'
                                style={{
                                    width: '25%',
                                    height:'max-content',
                                    paddingTop: '20px',
                                    position: 'sticky',
                                    top: '0'
                                }}
                            >
                                <Flex justify='flex-start' gap='small' wrap>
                                    <img className='tiki-logo' src={tiki_logo}></img>
                                    <Flex vertical>
                                        <Title style={{ margin: '0' }} level={5}>Tiki Trading</Title>
                                        <Flex align='center'>
                                            <img className='tiki-official' src={official}></img>
                                            <Divider type='vertical' style={{ height: '12px', backgroundColor: '#ccc' }} />
                                            <Text style={{ fontSize: '15px' }}>4.7</Text>
                                            <img style={{ width: '18px', height: '18px' }} src={star}></img>
                                            <Text style={{ color: '#777', fontSize: '15px' }}>(5.4tr đánh giá)</Text>
                                        </Flex>
                                    </Flex>
                                    <Divider style={{ margin: '7px 0' }} />
                                </Flex>

                                <Flex vertical gap='small'>
                                    <Text style={{ fontSize: '15px', fontWeight: '700' }}>Số lượng</Text>
                                    <Flex className='number-prod' gap='small'>
                                        <Button disabled>-</Button>
                                        <input value={amountProd} className='input' />
                                        <Button>+</Button>
                                    </Flex>
                                </Flex>
                                <Flex vertical>
                                    <Text style={{ fontSize: '16px', fontWeight: '700' }}>Tạm tính</Text>
                                    <Text className='total-price' style={{ fontSize: '24px', fontWeight: '600' }}>{product.price}<sup>đ</sup></Text>
                                </Flex>
                                <Flex vertical gap='small'>
                                    <Button type='primary' size='large' style={{ backgroundColor: '#ff424e' }}>Mua ngay</Button>
                                    <Button size='large' className='add-to-card'>Thêm vào giỏ</Button>
                                    <Button size='large' className='buy-first'>Mua trước trả sau</Button>
                                </Flex>
                            </Flex>
                        </Flex>

                        <Footer />

                    </Flex>
                </Flex>
            </Flex>

        </>
    )
}

export default ProductDetail;