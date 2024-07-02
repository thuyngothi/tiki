
import slider1_main1 from '../../../assets/Slider/bookSlider/slider1/main1.webp'
import slider1_main2 from '../../../assets/Slider/bookSlider/slider1/main2.webp'
import slider1_book1_1 from '../../../assets/Slider/bookSlider/slider1/book1_1.webp'
import slider1_book1_2 from '../../../assets/Slider/bookSlider/slider1/book1_2.webp'
import slider1_book2_1 from '../../../assets/Slider/bookSlider/slider1/book2_1.webp'
import slider1_book2_2 from '../../../assets/Slider/bookSlider/slider1/book2_2.webp'
import slider1_book2_3 from '../../../assets/Slider/bookSlider/slider1/book2_3.webp'

import slider2_main1 from '../../../assets/Slider/bookSlider/slider2/main1.webp'
import slider2_main2 from '../../../assets/Slider/bookSlider/slider2/main2.webp'
import slider2_book1_1 from '../../../assets/Slider/bookSlider/slider2/book1_1.webp'
import slider2_book1_2 from '../../../assets/Slider/bookSlider/slider2/book1_2.webp'
import slider2_book1_3 from '../../../assets/Slider/bookSlider/slider2/book1_3.webp'
import slider2_book2_1 from '../../../assets/Slider/bookSlider/slider2/book2_1.webp'
import slider2_book2_2 from '../../../assets/Slider/bookSlider/slider2/book2_2.webp'
import slider2_book2_3 from '../../../assets/Slider/bookSlider/slider2/book2_3.webp'

import eng_book from '../../../assets/Category/book-category/eng_book.png'
import vn_book from '../../../assets/Category/book-category/vn_book.png'
import calculator from '../../../assets/Category/book-category/calculator.png'
import present from '../../../assets/Category/book-category/present.png'

export const bookSliders = [
    {
        id: 'slider1',
        items: [
            {
                id: 1,
                picture: slider1_main1,
                title: 'Bùng Nổ Black Friday',
                donor: '1980 Books Tại Tiki Trading',
                detail: [
                    {
                        id: 'sub1',
                        picture: slider1_book1_1,
                        discount: '-31%'
                    },
                    {
                        id: 'sub2',
                        picture: slider1_book1_2,
                        discount: '',
                    },
                    {
                        id: 'sub3',
                        picture: slider1_book2_3,
                        discount: '',
                    },
                ]
            },
            {
                id: 2,
                picture: slider1_main2,
                title: 'Top sách bán chạy',
                donor: 'GIVER Books',
                detail: [
                    {
                        id: 'sub1',
                        picture: slider1_book2_1,
                        discount: '-38%'
                    },
                    {
                        id: 'sub2',
                        picture: slider1_book2_2,
                        discount: '-24%',
                    },
                    {
                        id: 'sub3',
                        picture: slider1_book2_3,
                        discount: '-43%',
                    },
                ]
            },
        ]
    },
    {
        id: 'slider2',
        items: [
            {
                id: 1,
                picture: slider2_main1,
                title: 'Bộ sưu tập sách mới',
                donor: 'Nhà Sách Văn Lang',
                detail: [
                    {
                        id: 'sub1',
                        picture: slider2_book1_1,
                        discount: ''
                    },
                    {
                        id: 'sub2',
                        picture: slider2_book1_2,
                        discount: '-24%',
                    },
                    {
                        id: 'sub2',
                        picture: slider2_book1_3,
                        discount: '-22%',
                    },
                ]
            },
            {
                id: 2,
                picture: slider2_main2,
                title: 'Top 10 sách Kinh Doanh',
                donor: 'GIẢM 50% - GIAO NHANH 2H',
                detail: [
                    {
                        id: 'sub1',
                        picture: slider2_book2_1,
                        discount: '-31%'
                    },
                    {
                        id: 'sub2',
                        picture: slider2_book2_2,
                        discount: '-47%',
                    },
                    {
                        id: 'sub3',
                        picture: slider2_book2_3,
                        discount: '-36%',
                    },
                ]
            },
        ]
    },
    // {
    //     id: 'slider3',
    //     items: [
    //         {
    //             id: 1,
    //             picture: slider1_main1,
    //             title: 'Giảm 80% - Đón năm học mới',
    //             donor: '1980 Books Tại Tiki Trading',
    //             detail: [
    //                 {
    //                     id: 'sub1',
    //                     picture: slider1_book1_1,
    //                     discount: '-31%'
    //                 },
    //                 {
    //                     id: 'sub2',
    //                     picture: slider1_book1_2,
    //                     discount: '',
    //                 },
    //                 {
    //                     id: 'sub3',
    //                     picture: slider1_book2_3,
    //                     discount: '',
    //                 },
    //             ]
    //         },
    //         {
    //             id: 2,
    //             picture: slider1_main2,
    //             title: 'Giảm đến 50% - Bùng Nổ Black Friday',
    //             donor: 'GIVER Books',
    //             detail: [
    //                 {
    //                     id: 'sub1',
    //                     picture: slider1_book2_1,
    //                     discount: '-38%'
    //                 },
    //                 {
    //                     id: 'sub2',
    //                     picture: slider1_book2_2,
    //                     discount: '-24%',
    //                 },
    //                 {
    //                     id: 'sub3',
    //                     picture: slider1_book2_3,
    //                     discount: '-43%',
    //                 },
    //             ]
    //         },
    //     ]
    // },
    {
        id: 'slider3',
        items: [
            {
                id: 1,
                picture: slider1_main1,
                title: 'Bùng Nổ Black Friday',
                donor: '1980 Books Tại Tiki Trading',
                detail: [
                    {
                        id: 'sub1',
                        picture: slider1_book1_1,
                        discount: '-31%'
                    },
                    {
                        id: 'sub2',
                        picture: slider1_book1_2,
                        discount: '',
                    },
                    {
                        id: 'sub3',
                        picture: slider1_book2_3,
                        discount: '',
                    },
                ]
            },
            {
                id: 2,
                picture: slider1_main2,
                title: 'Top sách bán chạy',
                donor: 'GIVER Books',
                detail: [
                    {
                        id: 'sub1',
                        picture: slider1_book2_1,
                        discount: '-38%'
                    },
                    {
                        id: 'sub2',
                        picture: slider1_book2_2,
                        discount: '-24%',
                    },
                    {
                        id: 'sub3',
                        picture: slider1_book2_3,
                        discount: '-43%',
                    },
                ]
            },
        ]
    },
    {
        id: 'slider4',
        items: [
            {
                id: 1,
                picture: slider2_main1,
                title: 'Bộ sưu tập sách mới',
                donor: 'Nhà Sách Văn Lang',
                detail: [
                    {
                        id: 'sub1',
                        picture: slider2_book1_1,
                        discount: ''
                    },
                    {
                        id: 'sub2',
                        picture: slider2_book1_2,
                        discount: '-24%',
                    },
                    {
                        id: 'sub2',
                        picture: slider2_book1_3,
                        discount: '-22%',
                    },
                ]
            },
            {
                id: 2,
                picture: slider2_main2,
                title: 'Top 10 sách Kinh Doanh',
                donor: 'GIẢM 50% - GIAO NHANH 2H',
                detail: [
                    {
                        id: 'sub1',
                        picture: slider2_book2_1,
                        discount: '-31%'
                    },
                    {
                        id: 'sub2',
                        picture: slider2_book2_2,
                        discount: '-47%',
                    },
                    {
                        id: 'sub3',
                        picture: slider2_book2_3,
                        discount: '-36%',
                    },
                ]
            },
        ]
    },

]

export const book_categories = [
    {
        id: 1,
        name: 'English Books',
        picture: eng_book,
    },
    {
        id: 2,
        name: 'Sách Tiếng Việt',
        picture: vn_book,
    },
    {
        id: 3,
        name: 'Văn phòng phẩm',
        picture: calculator,
    },
    {
        id: 4,
        name: 'Quà lưu niệm',
        picture: present,
    },
]