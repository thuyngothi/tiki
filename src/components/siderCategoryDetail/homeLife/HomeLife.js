import { Breadcrumb, Flex, Layout, Button, Typography } from "antd";
import { Link } from "react-router-dom";

import InsideSideBar from "../siderComponent/InsideSidebar/InsideSideBar";
import MainContent from "../../content/MainContent";

const items = [
    {
        key: 'sub1',
        label: 'Dụng cụ nhà bếp',
        children: [
            {
                key: '1',
                label: 'Ấm nước các loại',
            },
            {
                key: '2',
                label: 'Dụng cụ chứa thực phẩm',
            },
            {
                key: '3',
                label: 'Dao, kéo và phụ kiện',
            },
            {
                key: '4',
                label: 'Dụng cụ lầm bánh',
            },
            {
                key: '5',
                label: "Kệ nhà bếp",
            },
            {
                key: '6',
                label: 'Bếp nướng, vỉ nướng',
            },
            {
                key: '7',
                label: 'Phụ kiện nhà bếp',
            },
            {
                key: '8',
                label: 'Nồi và chảo',
            },
            {
                key: '9',
                label: 'Thùng đựng gạo',
            },
        ],
    },
    {
        key: 'sub2',
        label: 'Đồ dùng phòng ăn',
        children: [
            {
                key: '10',
                label: 'Bình nước, bình giữ nhiệt & Phụ kiện',
            },
            {
                key: '11',
                label: 'Bình lọc, lõi lọc, thiết bị lọc nước',
            },
            {
                key: '12',
                label: 'Bình, ly uống trà và phụ kiện',
            },
            {
                key: '13',
                label: 'Bình, ly uống cà phê và phụ kiện',
            },
            {
                key: '14',
                label: "Ly, cốc & phụ kiện ly",
            },
            {
                key: '15',
                label: 'Đĩa, muỗng, nĩa',
            },
            {
                key: '16',
                label: 'Dụng cụ pha chế',
            },
            {
                key: '17',
                label: 'Phụ kiện phòng ăn',
            },
            {
                key: '18',
                label: 'Tô, chén, đĩa',
            },
            {
                key: '19',
                label: 'Bình đựng nước',
            },
            {
                key: '20',
                label: 'Bình/ Ly giữ nhiệt',
            },
        ],
    },
    {
        key: 'sub3',
        label: 'Nội thất',
        children: [
            {
                key: '21',
                label: 'Nội thất phòng khách',
            },
            {
                key: '22',
                label: 'Nội thất phòng ngủ',
            },
            {
                key: '23',
                label: 'Nội thất phòng ăn',
            },
            {
                key: '24',
                label: 'Nội thất phòng học, làm việc',
            },
            {
                key: '25',
                label: 'Nội thất trẻ em',
            },
            {
                key: '26',
                label: 'Nội thất khác',
            },
        ],
    },
    {
        key: 'sub4',
        label: 'Đồ dùng phòng ngủ',
        children: [
            {
                key: '27',
                label: 'Bộ ga, ra, drap',
            },
            {
                key: '28',
                label: 'Chăn, mền và phụ kiện',
            },
            {
                key: '29',
                label: 'Gối, ruột gối, vỏ gối',
            },
            {
                key: '30',
                label: 'Nệm và Phụ kiện',
            },
            {
                key: '31',
                label: 'Phụ kiện phòng ngủ',
            },
        ],
    },
    {
        key: 'sub5',
        label: 'Trang trí nhà cửa',
        children: [
            {
                key: '32',
                label: "Decal & giấy dán tường",
            },
            {
                key: '33',
                label: 'Decal & giấy dán kính',
            },
            {
                key: '34',
                label: 'Đồng hồ',
            },
            {
                key: '35',
                label: 'Tranh trang trí',
            },
            {
                key: '36',
                label: 'Trang trí nhà cửa khác',
            },
        ],
    },
]

const { Content } = Layout;
const { Title, Text } = Typography;
const HomeLife = () => {
    return (
        <>
            <Flex
                justify='center'
                className="home-life"
            >
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
                                title: "Nhà Cửa - Đời Sống",
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
                                <Title style={{ margin: '0px', padding: '8px' }}>Nhà cửa & Đời sống</Title>
                            </Flex>
                            <MainContent />
                        </Content>
                    </Flex>

                </Flex>
            </Flex>

        </>

    )
}

export default HomeLife;