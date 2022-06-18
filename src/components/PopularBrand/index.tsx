import type { NextPage } from 'next';
import Head from 'next/head';

const PopularBrands: NextPage = () => {
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js"></script>
            </Head>
            <div class="section1">
                <div class="container">
                    <div class="title">
                        <h3>Popular <span>Brands</span></h3>
                    </div>
                    {/* <!---popular-tab--> */}
                    <div class="popular-tab">
                        <ul>
                            <li><button class="popular-tab-active">Toyota</button></li>
                            <li><button>Honda</button></li>
                            <li><button>Mitsubishi</button></li>
                            <li><button>Nissan</button></li>
                            <li><button>Hyundai</button></li>
                        </ul>
                    </div>
                    {/* <!---popular-main--> */}
                    <div class="popular-main">
                        {/* <!----card-start--> */}
                        <div class="card">
                            {/* <!--card-img--> */}
                            <div class="card-img">
                                <img src="/assets/Premio_1636805239_4033148.JPG" alt="" />
                                <div class="tag">
                                    <span>Sedan</span>
                                </div>
                            </div>
                            {/* <!--card-body--> */}
                            <div class="card-body">
                                <h3>Toyota Noah 4.5 X PKG</h3>
                                <h4> <img src="/assets/taka.fb378b29.svg" alt="" />27.40 Lacs</h4>
                                <a href="#">View More</a>
                            </div>
                        </div>
                        {/* <!----card-start--> */}
                        <div class="card">
                            {/* <!--card-img--> */}
                            <div class="card-img">
                                <img src="/assets/Noah_1636543367_3057208.jpg" alt="" />
                                <div class="tag">
                                    <span>Sedan</span>
                                </div>
                            </div>
                            {/* <!--card-body--> */}
                            <div class="card-body">
                                <h3>Toyota Noah 4.5 X PKG</h3>
                                <h4> <img src="/assets/taka.fb378b29.svg" alt="" />27.40 Lacs</h4>
                                <a href="#">View More</a>
                            </div>
                        </div>
                        {/* <!----card-start--> */}
                        <div class="card">
                            {/* <!--card-img--> */}
                            <div class="card-img">
                                <img src="/assets/Harrier_1640000030_6811304.webp" alt="" />
                                <div class="tag">
                                    <span>Sedan</span>
                                </div>
                            </div>
                            {/* <!--card-body--> */}
                            <div class="card-body">
                                <h3>Toyota Noah 4.5 X PKG</h3>
                                <h4> <img src="/assets/taka.fb378b29.svg" alt="" />27.40 Lacs</h4>
                                <a href="#">View More</a>
                            </div>
                        </div>
                        {/* <!----card-start--> */}
                        <div class="card">
                            {/* <!--card-img--> */}
                            <div class="card-img">
                                <img src="/assets/Land_Cruiser_Prado_1635070229_5144079.jpg" alt="" />
                                <div class="tag">
                                    <span>Sedan</span>
                                </div>
                            </div>
                            {/* <!--card-body--> */}
                            <div class="card-body">
                                <h3>Toyota Noah 4.5 X PKG</h3>
                                <h4> <img src="/assets/taka.fb378b29.svg" alt="" />27.40 Lacs</h4>
                                <a href="#">View More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PopularBrands;


