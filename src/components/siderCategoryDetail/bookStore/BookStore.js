import { useEffect, useState } from 'react'
import { Breadcrumb, Flex, Layout, Divider, Typography, Button, Card } from "antd";
import { DownOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";

import './BookStore.scss'
import InsideSideBar from "../siderComponent/InsideSidebar/InsideSideBar";
import MainContent from "../../content/MainContent";
import { bookSliders, book_categories, list_books } from "./bookData";
import InsideSlider from '../siderComponent/InsideSlider/InsideSlider';
import top_deal_prod from '../../../assets/Products/top_deal/top_deal_prod.png'
import real_prod from '../../../assets/Products/top_deal/real_prod.png'

const items = [
    {
        key: 'sub1',
        label: 'English Books',
        children: [
            {
                key: '1',
                label: 'Art & photography',
            },
            {
                key: '2',
                label: 'Biographies & Memories',
            },
            {
                key: '3',
                label: 'Business & Economics',
            },
            {
                key: '4',
                label: 'How-to - Self Help',
            },
            {
                key: '5',
                label: "Children's Books",
            },
            {
                key: '6',
                label: 'Dictionary',
            },
            {
                key: '7',
                label: 'Education - Teaching',
            },
            {
                key: '8',
                label: 'Fiction - Literature',
            },
            {
                key: '9',
                label: 'Magazines',
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Sách Tiếng Việt',
        children: [
            {
                key: '10',
                label: 'Sách văn học',
            },
            {
                key: '11',
                label: 'Sách kinh tế',
            },
            {
                key: '12',
                label: 'Sách thiếu nhi',
            },
            {
                key: '13',
                label: 'Sách kỹ năng sống',
            },
            {
                key: '14',
                label: "Nuôi dạy con",
            },
            {
                key: '15',
                label: 'Sách giáo khoa',
            },
            {
                key: '16',
                label: 'Sách học ngoại ngữ',
            },
            {
                key: '17',
                label: 'Sách tham khảo',
            },
            {
                key: '18',
                label: 'Từ điển',
            },
        ],
    },
    {
        key: 'sub3',
        label: 'Văn Phòng Phẩm',
        children: [
            {
                key: '19',
                label: 'Dụng cụ văn phòng',
            },
            {
                key: '20',
                label: 'Bút - Viết các loại',
            },
            {
                key: '21',
                label: 'Bút chì màu',
            },
            {
                key: '22',
                label: 'Dụng cụ học sinh',
            },
            {
                key: '23',
                label: "Flashcards",
            },
            {
                key: '24',
                label: 'Sổ tay các loại',
            },
            {
                key: '25',
                label: 'Tập Vở các loại',
            },
            {
                key: '26',
                label: 'Sách tham khảo',
            },
            {
                key: '27',
                label: 'Từ điển',
            },
        ],
    },
    {
        key: 'sub4',
        label: 'Quà Lưu Niệm',
        children: [
            {
                key: '28',
                label: 'Thú nhồi bông',
            },
            {
                key: '29',
                label: 'Bookmark',
            },
            {
                key: '30',
                label: 'Bưu ảnh - Postcard',
            },
            {
                key: '31',
                label: 'Quà tặng trang sức',
            },
            {
                key: '32',
                label: "Nuôi dạy con",
            },
            {
                key: '33',
                label: 'Tượng',
            },
            {
                key: '34',
                label: 'Album',
            },
            {
                key: '35',
                label: 'Mồ Hình trang trí',
            },
            {
                key: '36',
                label: 'Hộp quà',
            },
        ],
    },
]
const sort_brand_items = [
    {
        id: 1,
        name: 'Hồng Hà',
        value: 'hongha',
    },
    {
        id: 2,
        name: 'Deli',
        value: 'deli',
    },
    {
        id: 3,
        name: 'Thiên Long',
        value: 'thienlong',
    },
    {
        id: 4,
        name: 'Pentel',
        value: 'pantel',
    },
    {
        id: 5,
        name: 'Stacom',
        value: 'stacom',
    },
    {
        id: 6,
        name: 'KLONG',
        value: 'klong',
    },
    {
        id: 7,
        name: 'MAGIC',
        value: 'magic',
    },
    {
        id: 8,
        name: 'Lazy Box',
        value: 'lazybox',
    },
    {
        id: 9,
        name: 'Fahasa',
        value: 'fahasa',
    },
    {
        id: 10,
        name: 'imFRIDAY',
        value: 'imfriday',
    },
]

const { Title, Text, Paragraph } = Typography;
const { Content } = Layout;
const BookStore = () => {
    // Logic show list category
    const [showModal, setShowModal] = useState(false)
    const handleShow = () => {
        setShowModal(!showModal);
    }

    // Logic show list product depend on category
    const [activeCategory, setActiveCategory] = useState('default_book');
    const [activeCategories, setActiveCategories] = useState([])
    const [currentData, setCurrentData] = useState([]);
    const [removeCategory, setRemoveCategory] = useState('');

    useEffect(() => {
        if (activeCategory) {
            setActiveCategories([...activeCategories, activeCategory])
            const data = list_books.filter(item => {
                return item.category === activeCategory;
            })
            setCurrentData([...data, ...currentData])           
        }  
        console.log('useEffect 1');       
    }, [activeCategory])

    useEffect(() => {
        if(removeCategory){
             // Cach 1
             const newCategories = activeCategories.filter(item => item != removeCategory)
             setActiveCategories(newCategories);
             const newData = list_books.filter(item => {
                 return newCategories.includes(item.category)
             })
 
             // Cach 2
             // const newCategories = activeCategories.filter(item => item != removeCategory)
             // setActiveCategories(newCategories);
             // const newData = currentData.filter(item => {
             //     return item.category != removeCategory
             // })
             setCurrentData(newData)            
        }
        console.log('useEffect 2')
    },[removeCategory])

    const handleAddActiveCategory = (category) => {
        if(activeCategories.includes(category)){
            setRemoveCategory(category)
        }
       else{
        setActiveCategory(category)
       }
    }

    // ==================== RETURN JSX ===============================
    return (
        <>
            <Flex
                justify='center'
                className="book-store"
            >
                {console.log('gender UI')}
                <Flex
                    vertical
                    justify="left"
                    style={{ padding: '16px 24px', backgroundColor: '#f5f5fa', width: "100%" }}
                    className='container-max'
                >
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: <Link to="/">Trang chủ</Link>,
                            },
                            {
                                title: "Nhà Sách Tiki",
                            }
                        ]}
                    />

                    <Flex
                        style={{ padding: '16px 24px', backgroundColor: '#f5f5fa' }}
                        className='container-max'
                    >
                        {/* =============== Side bar ================ */}
                        <InsideSideBar data={items} />

                        <Content>
                            <Flex justify="left" align="center"
                                style={{ marginTop: '0' }}
                                className="wrapper">
                                <Title style={{ margin: '0px', padding: '8px' }}>Nhà Sách Tiki</Title>
                            </Flex>

                            <InsideSlider bookSliders={bookSliders} />

                            <Flex vertical className="book-category wrapper">
                                <Title level={4}>Khám phá theo danh mục</Title>
                                <Flex gap='40px' justify="flex-start" style={{ width: '100%', padding: '4px 20px' }}>
                                    {
                                        book_categories.map(book_category => (
                                            <>
                                                <Flex key={book_category.id} style={{ width: '10%', margin: '8px' }}>
                                                    <img src={book_category.picture} />
                                                </Flex>
                                            </>
                                        ))
                                    }
                                </Flex>
                            </Flex>

                            <Flex className='sort wrapper' vertical>
                                <Title level={4}>Tất cả sản phẩm</Title>
                                <Flex justify='space-between'>
                                    <Flex className='sort-type brand-sort' vertical style={{
                                        width: '38%',
                                    }}>
                                        <Text type='secondary'>Thương hiệu</Text>
                                        <Flex justify='space-around' align='center' className='sort-type-item'>
                                            <Button
                                                className={`${activeCategories.includes('hongha') ? 'active' : ''}`}
                                                onClick={() => handleAddActiveCategory('hongha')}
                                            >Hồng Hà</Button>
                                            <Button
                                                className={`${activeCategories.includes('deli') ? 'active' : ''}`}
                                                onClick={() => handleAddActiveCategory('deli')}
                                            >Deli</Button>
                                            <Button
                                                className={`${activeCategories.includes('thienlong') ? 'active' : ''}`}
                                                onClick={() => handleAddActiveCategory('thienlong')}
                                            >Thiên Long</Button>
                                            <Button
                                                className={`${activeCategories.includes('pentel') ? 'active' : ''}`}
                                                onClick={() => handleAddActiveCategory('pentel')}
                                            >Pentel</Button>
                                            <Button
                                                shape='circle'
                                                icon={<DownOutlined />}
                                                onClick={handleShow}
                                            ></Button>
                                        </Flex>
                                        {showModal &&
                                            <Flex className='sort-type-detail'
                                                style={{ width: '450px' }}
                                                onClick={handleShow}
                                            >
                                                <Flex vertical>
                                                    <Flex wrap gap='small' className='sort-brand-item'>
                                                        {sort_brand_items.map(item => (
                                                            <Button key={item.id}>{item.name}</Button>
                                                        ))}
                                                    </Flex>
                                                </Flex>
                                            </Flex>
                                        }

                                    </Flex>
                                    <Divider type='vertical' style={{
                                        color: '#000',
                                    }} />

                                    <Flex className='sort-type provider-sort' vertical style={{
                                        width: '58%',
                                    }}>
                                        <Text type='secondary'>Nhà cung cấp</Text>
                                        <Flex justify='space-around' className='sort-type-item'>
                                            <Button>Nhà Sách Vĩnh Thụy</Button>
                                            <Button>Nhà Sách Fahasa</Button>
                                            <Button>BamBoo Books</Button>
                                            <Button>infor book</Button>
                                            <Button
                                                shape='circle'
                                                icon={<DownOutlined />}
                                            ></Button>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>

                            <Flex className="product-list wrapper" wrap gap='12px'>
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
                                                    width: '24%',
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
                                            {/* </Link> */}
                                        </>
                                    ))
                                }

                            </Flex>

                            <MainContent />
                        </Content>
                    </Flex>

                </Flex>
            </Flex>

        </>
    )
}

export default BookStore;