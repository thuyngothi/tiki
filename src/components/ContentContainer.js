import React from 'react';
import { Layout, Flex } from 'antd';

import SideBar from './sider/SideBar';
import MainContent from './content/MainContent';

const { Content, Sider } = Layout;

const ContentContainer = () => {
    return (
        <>
          
            <Flex justify='center'>
                <Layout
                    style={{ padding: '16px 24px', backgroundColor: '#f5f5fa',overflow:"scroll" }}
                    className='container-max'
                >
                    <Sider
                        width='230px'
                        theme='light'
                        className='sider'
                    >
                        <SideBar />
                    </Sider>

                    <Content>
                        <MainContent />
                    </Content>
                </Layout>
            </Flex>
        </>
    )
}

export default ContentContainer;