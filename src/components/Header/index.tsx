import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Header: NextPage = () => {
    const slideMenuActive = () => {
        console.log('active');

    }
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js"></script>
            </Head>
            <div class="header-area">
                {/* <!---header-top--area--> */}
                <div class="header-top-area">
                    <div class="container">
                        <div class="header-top-main">
                            {/* <!---logo-area--> */}
                            <div class="logo">
                                <Link href={`/`}>
                                    <a>
                                        <img src="/assets/bhalogariLogo.715587ae.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            {/* <!----search-box--> */}
                            <div class="search-box">
                                <div class="search">
                                    {/* <!--search-input--> */}
                                    <div class="search-input">
                                        <input type="text" name="" placeholder="Search by Make, Model, or Keyword" />
                                    </div>
                                    <div class="search-btn">
                                        <button><i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            {/* <!---header-icon-menu--> */}
                            <div class="header-icon-menu">
                                <ul>
                                    <li class="map"><button><i class="fa fa-map-marker-alt"></i></button></li>
                                    <li class="cart"><button><i class="fa-solid fa-cart-shopping"></i></button></li>
                                    <li class="user"><button><i class="fa-solid fa-user"></i></button></li>
                                    <li class="bar"><button onClick={slideMenuActive}><i class="fa fa-bars"></i></button></li>
                                    <li class="lang">
                                        <div class="lang-btn">
                                            <div class="en">
                                                <span>BN</span>
                                            </div>
                                            <div class="bn">
                                                <span>বাং</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="buy-now">
                                        <button>Buy Now</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <!---header-bottom--> */}
                <div class="header-bottom">
                    <div class="container">
                        <div class="menu">
                            <ul>
                                <li><a href="#">USED CAR</a></li>
                                <li><a href="#">RECONDITIONED CAR</a></li>
                                <li><a href="#">NEW CAR</a></li>
                                <li><a href="#">SELL CAR</a></li>
                                <li>
                                    <Link href={`/compare`}>
                                        <a>
                                            CAR COMPARE
                                        </a>
                                    </Link>
                                </li>
                                {/* <li><a>CAR COMPARE</a></li> */}
                                <li><a href="#">BIKES</a></li>
                                <li><a href="#">CAR SERVICING</a></li>
                                <li><a href="#">NEWS AND REVIEWS</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* < !--- responsive - slide - menu-- > */}
                    < div class="overlay" ></div >
                    <div class="slide">
                        {/* <!---slid-logo--> */}
                        <div class="slide-logo">
                            <a href="#">
                                <img src="/assets/bhalogariLogo.715587ae.png" alt="" />
                            </a>
                        </div>
                        {/* <!--slide-menu--> */}
                        <div class="slide-menu">
                            <ul>
                                <li id="log"><a href="#"><img src="/assets/profile.4a06b9aa.svg" alt="" /> <span>Login / Registration</span></a></li>
                                <li><a href="#"><img src="/assets/used.e9422639.svg" alt="" /> <span>Used Car</span></a></li>
                                <li><a href="#"><img src="/assets/recondition.91def679.svg" alt="" /> <span>Reconditioned Car</span></a></li>
                                <li><a href="#"><img src="/assets/new.6f2df867.svg" alt="" /> <span>New Car</span></a></li>
                                <li><a href="#"><img src="/assets/image/sell-car.8c6363dd.svg" alt="" /> <span>Sell Now</span></a></li>
                                <li><a href="#"><img src="/assets/image/used.e9422639.svg" alt="" /> <span>Compare Car</span></a></li>
                                <li><a href="#"><img src="/assets/image/recondition.91def679.svg" alt="" /> <span>Bikes</span></a></li>
                                <li><a href="#"><img src="/assets/image/new.6f2df867.svg" alt="" /> <span>Car Servicing</span></a></li>
                            </ul>
                        </div>

                        <div class="cross">
                            <span ><i class="fa-solid fa-xmark"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;


