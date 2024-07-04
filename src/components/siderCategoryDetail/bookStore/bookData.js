
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

import default_book_1 from '../../../assets/Products/list_books/default_1.webp'
import default_book_2 from '../../../assets/Products/list_books/default_2.webp'
import default_book_3 from '../../../assets/Products/list_books/default_3.webp'
import default_book_4 from '../../../assets/Products/list_books/default_4.webp'
import default_book_5 from '../../../assets/Products/list_books/default_5.webp'
import default_book_6 from '../../../assets/Products/list_books/default_6.webp'
import default_book_7 from '../../../assets/Products/list_books/default_7.webp'
import default_book_8 from '../../../assets/Products/list_books/default_8.webp'

import deli_1 from '../../../assets/Products/list_books/deli_1.webp'
import deli_2 from '../../../assets/Products/list_books/deli_2.webp'
import deli_3 from '../../../assets/Products/list_books/deli_3.webp'
import deli_4 from '../../../assets/Products/list_books/deli_4.webp'
import deli_5 from '../../../assets/Products/list_books/deli_5.webp'
import deli_6 from '../../../assets/Products/list_books/deli_6.webp'
import deli_7 from '../../../assets/Products/list_books/deli_7.webp'
import deli_8 from '../../../assets/Products/list_books/deli_8.webp'

import thienlong_1 from '../../../assets/Products/list_books/thienlong_1.webp'
import thienlong_2 from '../../../assets/Products/list_books/thienlong_2.webp'
import thienlong_3 from '../../../assets/Products/list_books/thienlong_3.webp'
import thienlong_4 from '../../../assets/Products/list_books/thienlong_4.webp'
import thienlong_5 from '../../../assets/Products/list_books/thienlong_5.webp'
import thienlong_6 from '../../../assets/Products/list_books/thienlong_6.webp'
import thienlong_7 from '../../../assets/Products/list_books/thienlong_7.webp'
import thienlong_8 from '../../../assets/Products/list_books/thienlong_8.webp'

import hongha_1 from '../../../assets/Products/list_books/hongha_1.webp'
import hongha_2 from '../../../assets/Products/list_books/hongha_2.webp'
import hongha_3 from '../../../assets/Products/list_books/hongha_3.webp'
import hongha_4 from '../../../assets/Products/list_books/hongha_4.webp'
import hongha_5 from '../../../assets/Products/list_books/hongha_5.webp'
import hongha_6 from '../../../assets/Products/list_books/hongha_6.webp'
import hongha_7 from '../../../assets/Products/list_books/hongha_7.webp'
import hongha_8 from '../../../assets/Products/list_books/hongha_8.webp'

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

export const list_books = [
    {
        id: 1,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: default_book_1,
        list_pics: [default_book_1],
        category: 'default_book',
    },
    {
        id: 2,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: default_book_2,
        list_pics: [default_book_2],
        category: 'default_book',
    },
    {
        id: 3,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: default_book_3,
        list_pics: [default_book_3],
        category: 'default_book',
    },
    {
        id: 4,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: default_book_4,
        list_pics: [default_book_4],
        category: 'default_book',
    },
    {
        id: 5,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: default_book_5,
        list_pics: [default_book_5],
        category: 'default_book',
    },
    {
        id: 6,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: default_book_6,
        list_pics: [default_book_6],
        category: 'default_book',
    },
    {
        id: 7,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: default_book_7,
        list_pics: [default_book_7],
        category: 'default_book',
    },
    {
        id: 8,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: default_book_8,
        list_pics: [default_book_8],
        category: 'default_book',
    },

    {
        id: 9,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: deli_1,
        list_pics: [deli_1],
        category: 'deli',
    },
    {
        id: 10,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: deli_2,
        list_pics: [deli_2],
        category: 'deli',
    },
    {
        id: 11,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: deli_3,
        list_pics: [deli_3],
        category: 'deli',
    },
    {
        id: 12,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: deli_4,
        list_pics: [deli_4],
        category: 'deli',
    },
    {
        id: 13,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: deli_5,
        list_pics: [deli_5],
        category: 'deli',
    },
    {
        id: 14,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: deli_6,
        list_pics: [deli_6],
        category: 'deli',
    },
    {
        id: 15,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: deli_7,
        list_pics: [deli_7],
        category: 'deli',
    },
    {
        id: 16,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: deli_8,
        list_pics: [deli_8],
        category: 'deli',
    },

    {
        id: 17,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: thienlong_1,
        list_pics: [thienlong_1],
        category: 'thienlong',
    },
    {
        id: 18,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: thienlong_2,
        list_pics: [thienlong_2],
        category: 'thienlong',
    },
    {
        id: 19,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: thienlong_3,
        list_pics: [thienlong_3],
        category: 'thienlong',
    },
    {
        id: 20,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: thienlong_4,
        list_pics: [thienlong_4],
        category: 'thienlong',
    },
    {
        id: 21,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: thienlong_5,
        list_pics: [thienlong_5],
        category: 'thienlong_5',
    },
    {
        id: 22,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: thienlong_6,
        list_pics: [thienlong_6],
        category: 'thienlong',
    },
    {
        id: 23,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: thienlong_7,
        list_pics: [thienlong_7],
        category: 'thienlong',
    },
    {
        id: 24,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: thienlong_8,
        list_pics: [thienlong_8],
        category: 'thienlong',
    },

    {
        id: 25,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: hongha_1,
        list_pics: [hongha_1],
        category: 'hongha',
    },
    {
        id: 26,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: hongha_2,
        list_pics: [hongha_2],
        category: 'hongha',
    },
    {
        id: 27,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: hongha_3,
        list_pics: [hongha_3],
        category: 'hongha',
    },
    {
        id: 28,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: hongha_4,
        list_pics: [hongha_4],
        category: 'hongha',
    },
    {
        id: 29,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: hongha_5,
        list_pics: [hongha_5],
        category: 'hongha',
    },
    {
        id: 30,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: hongha_6,
        list_pics: [hongha_6],
        category: 'hongha',
    },
    {
        id: 31,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: hongha_7,
        list_pics: [hongha_7],
        category: 'hongha',
    },
    {
        id: 32,
        name: 'Bộ Đôi Kem Dưỡng Chống Lão Hóa Da Ngày Và Đêm Ponds Age Miracle',
        price: '585.000',
        discount: '-23%',
        origin_price: '710.100',
        picture: hongha_8,
        list_pics: [hongha_8],
        category: 'hongha',
    },
]