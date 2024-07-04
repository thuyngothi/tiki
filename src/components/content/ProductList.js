import { Button, Card, Flex, Typography } from "antd";
import { useEffect, useState } from "react";

import top_deal_prod from '../../assets/Products/top_deal/top_deal_prod.png'
import real_prod from '../../assets/Products/top_deal/real_prod.png'
import { Link } from "react-router-dom";

const { Text, Paragraph, Title } = Typography

const ProductList = ({ currentData }) => {
    return (
        <>
            <Flex className="product-list">
                {
                    currentData.map(item => (
                        <>
                            <Link to={`/product/${item.id}`} 
                                style={{
                                    width: '15%',
                                    margin: '6px 8px'
                                }}>
                            <Card
                                key={item.id}
                                className="product-item"
                                hoverable
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                                cover={<img alt="camera" src={item.picture} />}
                            >
                                <Flex vertical>
                                    <img className="top-deal-img" src={top_deal_prod}></img>
                                    <img className="real-prod-img" src={real_prod}></img>
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
                                            <Text className="discount" code>{item.discount}</Text>
                                        }
                                        {!!item.origin_price &&
                                            <Text type="secondary" delete style={{ fontSize: '12px' }}>
                                                {item.origin_price}
                                            </Text>
                                        }
                                    </Flex>

                                </Flex>
                            </Card>
                            </Link>
                        </>
                    ))
                }

            </Flex>
        </>
    )
}

export default ProductList;
