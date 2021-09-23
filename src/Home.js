import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://m.media-amazon.com/images/I/61y6dI6cxCL._SX3000_.jpg"
                />

                <div className="home__row">
                    <Product
                        id="123456"
                        title='The Making of Hero: Four Brothers, Two Wheels and a Revolution that Shaped India
                        The Making of Hero: Four Brothers, Two Wheels and a Revolution that Shaped India'
                        price={69.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/91jFbbawmdL.jpg"
                        rating={5} />
                    <Product
                        id="123451"
                        title='Amazon Basics Charging Station Dock for 4 Nintendo Switch Joy-con Controllers - 2.6 Foot Cable, Black'
                        price={81.99}
                        image="https://m.media-amazon.com/images/I/71SQSraI7rL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product
                        id="123452"
                        title='Mellanni Split King Sheet Set for Adjustable Bed - Hotel Luxury 1800 Bedding Sheets & Pillowcases - Extra Soft Cooling Bed Sheets - Deep...'
                        price={20.99}
                        image="https://m.media-amazon.com/images/I/61YuSrsuf4L._AC_UL480_FMwebp_QL65_.jpg"
                        rating={3} />

                    <Product
                        id="123453"
                        title='Marshall Stanmore II Wireless Bluetooth Speaker, Black - NEW'
                        price={80.99}
                        image="https://m.media-amazon.com/images/I/71VfR7Xhk8L._AC_UL480_FMwebp_QL65_.jpg"
                        rating={3} />

                    <Product
                        id="123454"
                        title='2019 Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz Intel Core i9) - Space Gray'
                        price={20.99}
                        image="https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={5} />
                </div>

                <div className="home__row">
                    <Product
                        id="123457"
                        title='SAMSUNG 50-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN50AU8000FXZA, 2021 Model)'
                        price={2050}
                        image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4} />

                </div>
            </div>


        </div>
    )
}

export default Home
