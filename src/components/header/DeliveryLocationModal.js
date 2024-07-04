import { Modal, Flex, Typography, Button, Divider, Radio, Space, Form, Input, Select } from "antd";
import { useState } from "react";

const DeliveryLocationModal = () => {

    const [value, setValue] = useState(1)
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value)
    }

    return (
        <>
                <Flex
                    vertical
                    className="modal-content"
                    align="center"
                >
                    <p style={{fontSize:'1.5rem'}}>Địa chỉ giao hàng</p>
                    <br></br>
                    <Typography.Text type="secondary"> Hãy chọn địa chỉ nhận hàng để được dự báo thời gian giao
                        hàng cùng chi phí đóng gói, vận chuyển một cách chính xác nhất.</Typography.Text>
                    <br></br>
                    <Button type="primary" className="login-to-delivery">Đăng nhập để chọn địa chỉ giao hàng</Button>

                    <Divider>hoặc</Divider>
                    <Flex justify="center" style={{width: '550px'}}>
                        <Radio.Group
                            onChange={onChange}
                            value={value}
                            
                        >
                            <Space direction="vertical" style={{width: '400px'}}>
                                <Radio value={1}>Phường Hàng Trống, Quận Hoàn Kiếm, Hà Nội</Radio>
                                <Radio className="own-address" value={2}>Chọn khu vực giao hàng khác
                                </Radio>
                                {
                                        value === 2 ? (
                                            <Form labelCol={{ span: 9 }} className="choose-address">
                                                <Form.Item label='Tỉnh/ Thành phố'>
                                                    <Input placeholder="Vui lòng chọn tỉnh/ thành phố" />
                                                </Form.Item>
                                                <Form.Item label='Quận/ Huyện'>
                                                    <Input placeholder="Vui lòng chọn quận/ huyện" />
                                                </Form.Item>
                                                <Form.Item label='Phường/ Xã'>
                                                    <Input placeholder="Vui lòng chọn phường/ xã" />
                                                </Form.Item>
                                            </Form>
                                        ) : null
                                    }
                            </Space>
                        </Radio.Group>
                    </Flex>
                    <br></br>
                    <Button type="primary" className="decide-btn">GIAO ĐẾN ĐỊA CHỈ NÀY</Button>
                </Flex>
        </>
    )
}

export default DeliveryLocationModal;