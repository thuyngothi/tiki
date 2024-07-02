
import { Flex, Typography } from 'antd'
import './Footer.scss'

import bo_cong_thuong_1 from '../assets/Footer/bo-cong-thuong_1.png'
import bo_cong_thuong_2 from '../assets/Footer/bo_cong_thuong_2.png'
import DMCA from '../assets/Footer/dmca.png'

const { Title, Text, Paragraph } = Typography
const Footer = () => {
    return (
        <>
            <Flex gap='small' className='footer-container wrapper'>
                <Flex gap='middle' className='common-infor'>
                    <Flex vertical className='infor-item client-support'>
                        <Title level={5}>Hỗ trợ Khách hàng</Title>
                        <Text type='secondary'>Hotline: <a href='#' target='blank'>1900-6035</a></Text>
                        <a href='https://hotro.tiki.vn/s/' target='blank'><Text type='secondary'>Các câu hỏi thường gặp</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Gửi yêu cầu hỗ trợ</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Hướng dẫn đặt hàng</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Phương thức vận chuyển</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Chính sách đổi trả</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Hướng dẫn trả góp</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Chính sách hàng nhập khẩu</Text></a>
                        <Text type='secondary'>Hỗ trợ khách hàng: <a>hotro@tiki.vn</a></Text>
                        <Text type='secondary'>Báo lỗi bảo mật: <a>security@tiki.vn</a></Text>
                    </Flex>

                    <Flex vertical className='infor-item about-tiki'>
                        <Title level={5}>Về Tiki</Title>
                        <a href='#' target='blank'><Text type='secondary'>Giới thiệu Tiki</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Tiki blog</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Tuyển dụng</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Chính sách bảo mật thanh toán</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Chính sách bảo mật thông tin cá nhân</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Chính sách giải quyết khiếu nại</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Điều khoản sử dụng</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Giới thiệu Tiki xu</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Tiếp thị liên kết cùng Tiki</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Bán hàng doanh nghiệp</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Điều kiện vận chuyển</Text></a>
                    </Flex>

                    <Flex vertical className='infor-item about-tiki'>
                        <Title level={5}>Hợp tác và liên kết</Title>
                        <a href='#' target='blank'><Text type='secondary'>Quy chế hoạt động Sàn GDTMDT</Text></a>
                        <a href='#' target='blank'><Text type='secondary'>Bán hàng cùng Tiki</Text></a>
                        <br></br>
                        <Title level={5}>Chứng nhận bởi</Title>
                        <Flex className='certified-by'>
                            <div><a href='#' target='blank'><img src={bo_cong_thuong_1}></img></a></div>
                            <div><a href='#' target='blank'><img src={bo_cong_thuong_2}></img></a></div>
                            <div><a href='#' target='blank'><img src={DMCA}></img></a></div>
                        </Flex>

                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default Footer;