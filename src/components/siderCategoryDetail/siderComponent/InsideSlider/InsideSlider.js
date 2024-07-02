import { useState } from 'react'
import { Flex, Typography } from "antd";
import './InsideSlider.scss'

const { Text, Paragraph } = Typography;

const InsideSlider = ({ bookSliders }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(prev => (prev - 1 + bookSliders.length) % bookSliders.length)
    }
    const nextSlide = () => {
        setCurrentIndex(prev => (prev + 1) % bookSliders.length)
    }

    return (
        <Flex gap='small' wrap={true} className="inside-slider wrapper">
            <a className="prev push-btn" onClick={prevSlide}>&#10094;</a>
            <a className="next push-btn" onClick={nextSlide}>&#10095;</a>
            {
                bookSliders.map((slider, index) => (
                    <>
                        <Flex justify="space-between" key={slider.id} style={{ width: '100%' }} className={`slide ${index === currentIndex ? 'active' : ''}`}>
                            {
                                slider.items.map(item => (
                                    <Flex key={item.id} style={{ width: '49%' }} className="slide-item">
                                        <>
                                            <div style={{
                                                position: 'relative',
                                                width: "35%",
                                                overflow:'hidden',
                                            }}>
                                                <Flex
                                                    justify="center"
                                                    align="center"
                                                    style={{
                                                        position:'relative',
                                                        width: '200px',
                                                        height: '170px',
                                                        filter: `blur(50px)`,
                                                    }}
                                                    className="main-img">
                                                        <img style={{ width: '100%' }} src={item.picture} />
                                                </Flex>
                                                <div style={{
                                                    width: '65%',
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                }}>
                                                    <img style={{ width: '100%' }} src={item.picture} />
                                                </div>
                                            </div>

                                            <Flex vertical style={{ width: '65%', height:'max-content' }} className="slide-content">
                                                <Paragraph
                                                    style={{
                                                        fontSize: '24px',
                                                        paddingRight: '24px'
                                                    }}
                                                    ellipsis={{
                                                        rows: 1,
                                                    }}
                                                >{item.title}
                                                </Paragraph>
                                                <Text type='secondary'>Tài trợ bởi
                                                    <span style={{ color: '#000' }}>{` ${item.donor}`}</span>
                                                </Text>
                                                <Flex gap='small' justify="flex-start" style={{ width: '65%' }} className="list-img">
                                                    {item.detail.map(book => (
                                                        <>
                                                            <Flex key={book.id} justify="center" style={{ width: '33%' }}>
                                                                <img style={{ width: '100%', border: '1px solid #ccc' }} src={book.picture}></img>
                                                            </Flex>
                                                        </>
                                                    ))}
                                                </Flex>
                                            </Flex>
                                        </>
                                    </Flex>
                                ))
                            }
                        </Flex>
                    </>
                ))}
        </Flex>
    )
}

export default InsideSlider;