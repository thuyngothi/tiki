
import { Breadcrumb, Divider, Flex, Typography } from 'antd'
import { Link } from "react-router-dom";
import { useState } from 'react';

import './ProductDetail.scss'
import top_deal_prod from '../../assets/Products/top_deal/top_deal_prod.png'
import real_prod from '../../assets/Products/top_deal/real_prod.png'
import turnback from '../../assets/Products/top_deal/turnback.png'

const images = [
    'https://salt.tikicdn.com/cache/750x750/ts/product/22/cb/a9/524a27dcd45e8a13ae6eecb3dfacba7c.jpg.webp',
    'https://salt.tikicdn.com/cache/100x100/ts/product/71/c2/4b/58afce3cf6c10b648d1d28252fdf5e48.jpg.webp',
    'https://salt.tikicdn.com/cache/100x100/ts/product/c3/51/d8/908cd5310a98a19d52d2be9146769fa3.png.webp',
]

const { Text } = Typography

const ProductDetail = () => {
    const [imageIndex, setImageIndex] = useState(0);
    return (
        <>
            <Flex align='center' className='commitment container-max' gap='small'>
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
                            title: 'book name'
                        }
                    ]
                }
            />
            <Flex className='product-detail container-max'>
                <Flex vertical className='prod-image wrapper' gap='small'>
                    <Flex className='expand-image'>
                        <img src={images[imageIndex]}></img>
                    </Flex>
                    <Flex className='list-image' gap='small'>
                        {
                            images.map((image, index) => (
                                <img 
                                    src={image}
                                    onClick={()=> {
                                        let chosen = index 
                                        setImageIndex(index);                                       
                                    }}
                                    onMouseEnter={() => { setImageIndex(index);}}
                                ></img>
                            ))
                        }
                    </Flex>
                </Flex>

                <Flex vertical className='prod-content wrapper'
                    style={{
                        width:'55%'
                    }} >
                    <Flex justify='space-around'>
                        <img style={{width:'85px', height:'20px'}} src={top_deal_prod}></img>
                        <img style={{width:'95px', height:'20px'}} src={real_prod}></img>
                        <img style={{width:'100px', height:'20px'}} src={turnback}></img>
                        <Text className='author'>Tác giả: <a>Trần Phách Hàm</a></Text>
                    </Flex>
                </Flex>
            </Flex>

        </>
    )
}

export default ProductDetail;