import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ChooseByBodyType: NextPage = () => {
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js"></script>
            </Head>
            {/* <!---section4--> */}
            <div class="section4">
                <div class="container">
                    {/* <!---title--> */}
                    <div class="title">
                        <h3>Choose by <span>Body Type</span></h3>
                    </div>
                    {/* <!--section4-main--> */}
                    <div class="section4-main">
                        {/* <!---body-info--> */}
                        <div class="body-info">
                            <div class="body-info-img">
                                <img src="/assets/Sedan1.svg" alt="" />
                            </div>
                            {/* <!---body-name--> */}
                            <div class="body-name">
                                <h3>Sedan</h3>
                            </div>
                        </div>
                        {/* <!---body-info--> */}
                        <div class="body-info">
                            <div class="body-info-img">
                                <img src="/assets/SUV1.svg" alt="" />
                            </div>
                            {/* <!---body-name--> */}
                            <div class="body-name">
                                <h3>SUV</h3>
                            </div>
                        </div>

                        {/* <!---body-info--> */}
                        <div class="body-info">
                            <div class="body-info-img">
                                <img src="/assets/Hatchback1.svg" alt="" />
                            </div>
                            {/* <!---body-name--> */}
                            <div class="body-name">
                                <h3>Hatchback</h3>
                            </div>
                        </div>

                        {/* <!---body-info--> */}
                        <div class="body-info">
                            <div class="body-info-img">
                                <img src="/assets/MiniVan1.svg" alt="" />
                            </div>
                            {/* <!---body-name--> */}
                            <div class="body-name">
                                <h3>Minivan</h3>
                            </div>
                        </div>
                        {/* <!---body-info--> */}
                        <div class="body-info">
                            <div class="body-info-img">
                                <img src="/assets/Wagon1.svg" alt="" />
                            </div>
                            {/* <!---body-name--> */}
                            <div class="body-name">
                                <h3>Wagon</h3>
                            </div>
                        </div>
                        {/* <!---body-info--> */}
                        <div class="body-info">
                            <div class="body-info-img">
                                <img src="/assets/OffRoaderGray.svg" alt="" />
                            </div>
                            {/* <!---body-name--> */}
                            <div class="body-name">
                                <h3>Off Roader</h3>
                            </div>
                        </div>

                        {/* <!---body-info--> */}
                        <div class="body-info">
                            <div class="body-info-img">
                                <img src="/assets/Compact1.svg" alt="" />
                            </div>
                            {/* <!---body-name--> */}
                            <div class="body-name">
                                <h3>Compact</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!---section5--> */}
            <div class="section5">
                <div class="container">
                    {/* <!---title--> */}
                    <div class="title">
                        <h3>Search by <span>Specifications</span></h3>
                    </div>
                    {/* <!---section5-main--> */}
                    <div class="section5-main">
                        {/* <!---specification-info--> */}
                        <div class="specification-info">
                            {/* <!--specification-title--> */}
                            <div class="specification-title">
                                <span>Search by</span>
                                <h3>Price</h3>
                            </div>
                            {/* <!---specification-data--> */}
                            <div class="specification-data">
                                <ul>

                                    <li><input type="checkbox" value="" /> 1 - 10 Lacs</li>
                                    <li><input type="checkbox" />10 - 20 Lacs</li>
                                    <li><input type="checkbox" /> 20 - 30 Lacs</li>
                                    <li><input type="checkbox" /> 30 - 40 Lacs</li>
                                    <li><input type="checkbox" /> 40 - 50 Lacs</li>
                                    <li><input type="checkbox" /> 50 Lacs or above</li>

                                </ul>
                            </div>
                        </div>
                        {/* <!---specification-info-end--> */}

                        {/* <!---specification-info--> */}
                        <div class="specification-info">
                            {/* <!--specification-title--> */}
                            <div class="specification-title">
                                <span>Search by</span>
                                <h3>Mileage</h3>
                            </div>
                            {/* <!---specification-data--> */}
                            <div class="specification-data">
                                <ul>
                                    <li><input type="checkbox" value="" /> 10,000 km or below</li>
                                    <li><input type="checkbox" />10,000 to 30,000 km</li>
                                    <li><input type="checkbox" /> 30,000 to 50,000 km</li>
                                    <li><input type="checkbox" /> 50,000 to 1,00,000 km</li>
                                    <li><input type="checkbox" /> 1,00,000 to 1,50,000 km</li>
                                    <li><input type="checkbox" /> Over 1,50,000 km</li>
                                </ul>
                            </div>
                        </div>
                        {/* <!---specification-info-end--> */}

                        {/* <!---specification-info--> */}
                        <div class="specification-info">
                            {/* <!--specification-title--> */}
                            <div class="specification-title">
                                <span>Search by</span>
                                <h3>Seating Capacity</h3>
                            </div>
                            {/* <!---specification-data--> */}
                            <div class="specification-data">
                                <ul>
                                    <li><input type="checkbox" value="" /> 2 Seats</li>
                                    <li><input type="checkbox" />4 Seats</li>
                                    <li><input type="checkbox" /> 5 Seats</li>
                                    <li><input type="checkbox" /> 7 Seats</li>
                                    <li><input type="checkbox" />8 Seats</li>
                                    <li><input type="checkbox" />10 Seats or above</li>
                                </ul>
                            </div>
                        </div>
                        {/* <!---specification-info-end--> */}

                        {/* <!---specification-info--> */}
                        <div class="specification-info">
                            {/* <!--specification-title--> */}
                            <div class="specification-title">
                                <span>Search by</span>
                                <h3>Engine Capacity</h3>
                            </div>
                            {/* <!---specification-data--> */}
                            <div class="specification-data">
                                <ul>
                                    <li><input type="checkbox" value="" />800 cc or less</li>
                                    <li><input type="checkbox" />1,000 to 1,499 cc</li>
                                    <li><input type="checkbox" />1,500 to 1,999 cc</li>
                                    <li><input type="checkbox" /> 2,000 to 2,499 cc</li>
                                    <li><input type="checkbox" />2,500 to 2,999 cc</li>
                                    <li><input type="checkbox" />3,000 cc or above</li>
                                </ul>
                            </div>
                            {/* <!---btn--> */}
                            <div class="spec-btn">
                                <button>Search <i class="fa fa-search"></i></button>
                            </div>
                        </div>
                        {/* <!---specification-info-end--> */}

                    </div>

                </div>
            </div>
        </>
    );
};

export default ChooseByBodyType;


