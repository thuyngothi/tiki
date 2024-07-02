
import React, { useState } from "react";
import { Button, Input, Modal, Flex, Typography, Divider } from 'antd'
import { CloseCircleFilled, CloseOutlined, UserOutlined } from "@ant-design/icons";

const AccountModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <>
            <Button
                className="account-btn"
                size='large'
                type="primary"
                icon={<UserOutlined className="header-icon" />}
                onClick={showModal}
            >Tài khoản</Button>

            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                width='900px'
            >
                <Flex justify="space-between">
                    <Flex vertical gap='middle' className="account-modal">
                        <h1 style={{fontWeight:'500'}}>Xin chào,</h1>
                        <p style={{fontSize:'1rem'}}>Đăng nhập hoặc Tạo tài khoản</p>
                        
                        <Input 
                        placeholder="Số điện thoại"
                        className="register-phone"/>
                        <Button
                            type="primary"
                            danger
                            className="register-btn"
                        >Tiếp tục</Button>

                        <Button type="link">
                            Đăng nhập bằng email
                        </Button>
                        <Divider style={{fontWeight:'400', color: '#808089'}}>Hoặc tiếp tục bằng</Divider>
                        
                        <Flex justify="center" gap='middle'>
                            <img className="login-icon" src="	https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png"></img>
                            <img className="login-icon" src="	https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png"></img>
                        </Flex>
                        <Typography.Text type="secondary">Bằng việc tiếp tục, bạn đã đọc và đồng ý với <a>điều khoản sử dụng</a>
                        và <a>Chính sách bảo mật thông tin cá nhân</a> của Tiki
                        </Typography.Text>
                    </Flex>
                    <Flex gap='large' vertical className="acc-modal-side">
                        <img src="https://salt.tikicdn.com/ts/upload/eb/f3/a3/25b2ccba8f33a5157f161b6a50f64a60.png"></img>
                        <Flex vertical>
                            <Typography.Title level={4}>Mua sắm tại Tiki</Typography.Title>
                            <Typography.Text>Siêu ưu đãi mỗi ngày</Typography.Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Modal>
        </>
    )
}

export default AccountModal;