
import { Button, Flex, Input, Typography } from "antd";
import Search from "antd/es/input/Search";
import { HomeFilled, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

import './Header.scss'
import AccountModal from "./AccountModal.js";
import DeliveryLocationModal from "./DeliveryLocationModal.js";

const CustomHeader = () => {
    return (
        <>
            <Flex className="header-content">
                <Flex align="center" vertical className="logo" flex='1'>
                    <img src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"></img>
                    <p className="logo-text">Tốt & Nhanh</p>
                </Flex>
                <Flex vertical flex='8'>
                    <Flex align="center" gap='small' justify="space-around">
                        <Search
                            style={{ width: '60%' }}
                            placeholder="Bạn tìm gì hôm nay?"
                            enterButton='Tìm kiếm'
                            size="large"
                            allowClear
                        />
                        <Button
                            className="header-btn"
                            size='large'
                            type="primary"
                            icon={<HomeFilled className="header-icon" />}
                        >
                            Trang chủ
                        </Button>

                        <AccountModal />

                        <Button
                            className="header-btn"
                            size='large'
                            type='primary'>
                            <ShoppingCartOutlined className="header-icon" />
                        </Button>
                    </Flex>

                    <Flex justify="space-between">
                        <ul className='header-menu'>
                            <li><a>điện gia dụng</a></li>
                            <li><a>xe cộ</a></li>
                            <li><a>mẹ & bé</a></li>
                            <li><a>khỏe đẹp</a></li>
                            <li><a>nhà cửa</a></li>
                            <li><a>sách</a></li>
                            <li><a>thể thao</a></li>
                        </ul>
                        {/* <Flex align="center" className="delivery-location">
                            <img src="https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png"></img>
                            <Typography.Text type="secondary">Giao đến:
                                <span className="address"> Q.Hoàn Kiếm, P.Hàng Trống, Hà Nội</span>
                            </Typography.Text>
                        </Flex> */}
                        <DeliveryLocationModal />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default CustomHeader;