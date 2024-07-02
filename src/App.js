import React from 'react';
import { Layout, Flex, Typography } from 'antd';
import { Routes, Route, Link } from "react-router-dom";

import './App.scss';
import CustomHeader from './components/header/CustomHeader';
import ContentContainer from './components/ContentContainer';
import BookStore from './components/siderCategoryDetail/bookStore/BookStore';
import HomeLife from './components/siderCategoryDetail/homeLife/HomeLife';

function App() {
  return (
    <div className="App">
      <Layout>
      {/* <div style={{
            position:"sticky",
            top:"0px"
        }}> 
            ssssđ
        </div> */}
        <Flex
          justify='center'
          className='header-container'
        >
          <CustomHeader />
        </Flex>
        <Flex align='center' justify='center' gap='small' className="return-policy">
          <img src="https://salt.tikicdn.com/ts/upload/12/1f/53/67396e2dcdf5d503349d4628501c4831.png"></img>
          <Typography.Text>đổi ý & miễn phí trả hàng</Typography.Text>
        </Flex>       
    
        <Routes>
          <Route path='/' element={<ContentContainer />}></Route>
          <Route path='/bookstore' element={<BookStore />}></Route>
          <Route path='/homelife' element={<HomeLife />}></Route>
        </Routes>

      </Layout>
    </div>
  );
}

export default App;
