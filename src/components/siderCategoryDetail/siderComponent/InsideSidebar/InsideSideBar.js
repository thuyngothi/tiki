import { Flex, Menu } from 'antd';

import './InsideSideBar.scss'

const InsideSideBar = ({data}) => {
    return (
        <>
            <Flex
                justify="left"
                vertical
                className="inside-menu"
            >
                <p className="title">Khám phá theo danh mục</p>
                <Menu
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={data}
                />

            </Flex>
        </>
    )
}

export default InsideSideBar;