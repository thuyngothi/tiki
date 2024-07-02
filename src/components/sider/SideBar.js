import { Flex, Menu } from "antd";
import { Routes, Route, Link } from "react-router-dom";

import './SideBar.scss'

import siderData from "../../siderData";
import { specialData } from "../../siderData";

const SideBar = () => {
    return (
        <>
            <Flex vertical className="sidebar-menu">
                <Flex vertical className="menu main-menu">
                    <p className="title">Danh mục</p>
                    {siderData.map((item) => (
                        <Link to={item.path}>
                            <Flex key={item.id} align="center" className="menu-item">
                                <img className="menu-image" src={item.picture}></img>
                                <p style={{ textAlign: 'left' }}>{item.title}</p>
                            </Flex>
                        </Link>
                    ))}
                </Flex>
                <br></br>
                <Flex vertical className="menu special-menu">
                    <p className="title">Nổi bật</p>
                    {specialData.map((item) => (
                        <Link to="/">
                            <Flex key={item.id} align="center" className="menu-item">
                                <img className="menu-image" src={item.picture}></img>
                                <p>{item.title}</p>
                            </Flex>
                        </Link>
                    ))}
                </Flex>
            </Flex>
        </>
    )
}

export default SideBar;