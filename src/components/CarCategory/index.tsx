import type { NextPage } from 'next';
import Head from 'next/head';

const CarCategory: NextPage = () => {
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js"></script>
            </Head>
            {/* <!---responsive-car-category--> */}
            <div class="res-car-category">
                <div class="container">
                    <div class="res-category-main">
                        {/* <!---car-category-info--> */}
                        <div class="car-category">
                            <a href="#">
                                <div class="car-category-info">
                                    <img src="/assets/car1.ec118b09.png" alt="" />
                                    <h3>New Car</h3>
                                </div>
                            </a>
                        </div>
                        {/* <!---car-category-info--> */}
                        <div class="car-category">
                            <a href="#">
                                <div class="car-category-info">
                                    <img src="/assets/car2.94f623b1.png" alt="" />
                                    <h3>Reconditioned Car</h3>
                                </div>
                            </a>
                        </div>
                        {/* <!---car-category-info-->  */}
                        <div class="car-category">
                            <a href="#">
                                <div class="car-category-info">
                                    <img src="/assets/car3.5200c8de.png" alt="" />
                                    <h3>Used Car</h3>
                                </div>
                            </a>
                        </div>
                        {/* <!---car-category-info--> */}
                        <div class="car-category">
                            <a href="#">
                                <div class="car-category-info" >
                                    <img src="/assets/bike.61f69051.png" alt="" />
                                    <h3>Bikes</h3>
                                </div>
                            </a>
                        </div>
                        {/* <!---car-category-info--> */}
                        <div class="car-category">
                            <a href="#">
                                <div class="car-category-info">
                                    <img src="/assets/auctionsheet.c9502ff1.png" alt="" />
                                    <h3>Verify Auction Sheet</h3>
                                </div>
                            </a>
                        </div>
                        {/* <!---car-category-info--> */}
                        <div class="car-category">
                            <a href="#">
                                <div class="car-category-info">
                                    <img src="/assets/car-services.0f25e837.png" alt="" />
                                    <h3>Car Services</h3>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarCategory;


