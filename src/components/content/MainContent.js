import { Button, Card, Flex, Typography } from "antd";
import { useEffect, useState } from "react";

import './Content.scss'
import Slider from "./Slider";
import slideData from "../../contentData";
import Footer from "../../footer/Footer";
import { categories, cameras, real_brands, books, beauties, homeElectrics, totalProducts } from "../../contentData";

import top_deal from '../../assets/Category/top_deal_prod.png'
import ProductList from "./ProductList";
import ProductDetail from "../productDetail/ProductDetail";

const { Text, Paragraph, Title } = Typography

const topDealCategories = [
    {
        id: 1, name: 'homeElectric', content: 'Điện Gia Dụng',
    },
    {
        id: 2, name: 'book', content: 'Nhà Sách Tiki',
    },
    {
        id: 3, name: 'camera', content: 'Máy Ảnh - Máy Quay Phim',
    },
    {
        id: 4, name: 'beauty', content: 'Làm Đẹp và Sức Khỏe',
    },
]

const MainContent = () => {

    const [activeCategory, setActiveCategory] = useState(0);
    const [curCategory, setCurCategory] = useState('homeElectrics');
    const [currentData, setCurrentData] = useState(homeElectrics);

    useEffect(() => {
        setTimeout(() => {
            const result = totalProducts.filter((prod) => {
                return prod.category === topDealCategories[activeCategory].name;
            })
            setCurrentData(result);
        }, 50)

    }, [activeCategory])

    console.log(currentData);

    // Lặp product list nhiều lần
    const productElements = []
    for (let i = 0; i < 3; i++) {
        productElements.push(
            <Flex className="top-deal wrapper" style={{
                minHeight: "462px"
            }}>
                <Flex vertical style={{ maxWidth: '100%' }}>
                    <img className="banner-img" src={top_deal}></img>
                    <Flex className="topdeal-list">
                        {topDealCategories.map((item, index) => (
                            <Button
                                onClick={() => {
                                    setActiveCategory(index)
                                    // setCurCategory(item.name)
                                }}
                                className={`${activeCategory === index ? 'active' : ''}`}
                                key={item.id}
                            >
                                {item.content}
                            </Button>
                        ))}
                    </Flex>

                    <br></br>
                    {/* ================ Products List ================ */}
                    <ProductList currentData={currentData} />
                </Flex>
            </Flex>
        )
    }


    return (
        <>
            <Slider slides={slideData} />

            {/*=============== Category ================*/}
            <Flex justify="space-around" className="category-list wrapper">
                {categories.map(item => (
                    <div key={item.id} className="category-item">
                        <img src={item.picture}></img>
                        <p className="category-name">{item.desc}</p>
                    </div>
                ))}
            </Flex>

            {/* ============== TOP DEAL ================*/}
            <Flex className="top-deal wrapper" style={{
                minHeight: "462px"
            }}>
                <Flex vertical style={{ maxWidth: '100%' }}>
                    <img className="banner-img" src={top_deal}></img>
                    <Flex className="topdeal-list">
                        {topDealCategories.map((item, index) => (
                            <Button
                                onClick={() => {
                                    setActiveCategory(index)
                                    // setCurCategory(item.name)
                                }}
                                className={`${activeCategory === index ? 'active' : ''}`}
                                key={item.id}
                            >
                                {item.content}
                            </Button>
                        ))}
                    </Flex>

                    <br></br>
                    {/* ================ Products List ================ */}
                    <ProductList currentData={currentData} />
                </Flex>
            </Flex>

            <Flex vertical className="real-brand wrapper">
                <Title level={4}>Thương hiệu chính hãng</Title>
                <Flex style={{ width: '100%' }} justify="space-around">
                    {
                        real_brands.map(brand => (
                            <div key={brand.id} style={{ width: '15%', margin: '8px' }}>
                                <img
                                    style={{
                                        width: '100%',
                                    }}
                                    src={brand.picture} />
                            </div>
                        ))
                    }
                </Flex>
            </Flex>

            {
                productElements
            }

            {/* <ProductDetail /> */}

            <Footer />

        </>
    )
}

export default MainContent;