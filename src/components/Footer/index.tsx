import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Footer: NextPage = () => {
    const slideMenuActive = () => {
        console.log('active');

    }
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js"></script>
            </Head>
            <div class="footer-section1">
                <div class="container">
                    {/* <!--footer-section1-main--> */}
                    <div class="footer-section1-main">
                        {/* <!---section1-info--> */}
                        <div class="section1-info">
                            {/* <!---section1-img--> */}
                            <div class="section1-img">
                                <img src="/assets/download (3).png" alt="" />
                            </div>
                            {/* <!--section1-text--> */}
                            <div class="section1-text">
                                <h3>Auto Portal</h3>
                                <p>in Bangladesh</p>
                            </div>
                        </div>
                        {/* <!---section1-info--> */}
                        <div class="section1-info">
                            {/* <!---section1-img--> */}
                            <div class="section1-img">
                                <img src="/assets/download (1).png" alt="" />
                            </div>
                            {/* <!--section1-text--> */}
                            <div class="section1-text">
                                <h3>Car Sold</h3>
                                <p>in every 30 minutes</p>
                            </div>
                        </div>
                        {/* <!---section1-info--> */}
                        <div class="section1-info">
                            {/* <!---section1-img--> */}
                            <div class="section1-img">
                                <img src="/assets/Offers.90eb12aa (1).png" alt="" />
                            </div>
                            {/* <!--section1-text--> */}
                            <div class="section1-text">
                                <h3>Offers</h3>
                                <p>Stay Updated, Pay Less</p>
                            </div>
                        </div>
                        {/* <!---section1-info--> */}
                        <div class="section1-info">
                            {/* <!---section1-img--> */}
                            <div class="section1-img">
                                <img src="/assets/download (2).png" alt="" />
                            </div>
                            {/* <!--section1-text--> */}
                            <div class="section1-text">
                                <h3>Compare</h3>
                                <p>Choose the right car for you</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!---footer-email-area--> */}
            <div class="footer-email-area">
                <div class="container">
                    <div class="footer-email-main">
                        {/* <!---footer-email-left--> */}
                        <div class="footer-email-left">
                            <h3>Get Latest Updates & Offers from Bhalogari</h3>
                        </div>
                        {/* <!--footer-email-right--> */}
                        <div class="footer-email-right">
                            {/* <!--email-box--> */}
                            <div class="email-box">
                                <input type="text" value="" placeholder="Please enter your email..." />
                                <button> <i class="fa-solid fa-message"></i> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!---footer-area--> */}
            <div class="footer-area">
                {/* <!--container--> */}
                <div class="container">
                    <div class="payment">
                        <img src="/assets/SSLCommerz-Pay-With-logo-All-Size-03.png" alt="" />
                    </div>
                    {/* <!---footer-main--> */}
                    <div class="footer-main">
                        {/* <!---footer-info--> */}
                        <div class="footer-info">
                            {/* <!---footer-logo--> */}
                            <div class="footer-logo">
                                <img src="/assets/bhalogariLogo.715587ae.png" alt="" />
                            </div>
                            <div class="footer-description">
                                <p>Bhalogari.com is the leading search car venture in Bangladesh, that helps users buy cars that are right for them.</p>
                            </div>
                            <div class="social">
                                <ul>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>

                        </div>
                        {/* <!---footer-link--> */}
                        <div class="footer-links">
                            {/* <!--footer-title--> */}
                            <div class="footer-title">
                                <h3>SERVICES</h3>
                            </div>
                            <ul>
                                <li><a href="#">Buy Car</a></li>
                                <li><a href="#">Sell Car</a></li>
                                <li><a href="#">Buy Bike</a></li>
                                <li><a href="#">Verify Auction Sheet</a></li>
                                <li><a href="#">Car Servicing at your doorstep</a></li>
                            </ul>
                        </div>
                        {/* <!---footer-link--> */}
                        <div class="footer-links">
                            {/* <!--footer-title--> */}
                            <div class="footer-title">
                                <h3>ABOUT BHALOGARI</h3>
                            </div>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Terms and Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Refund Policy</a></li>
                            </ul>
                        </div>
                        {/* <!---footer-link--> */}
                        <div class="footer-links">
                            {/* <!--footer-title--> */}
                            <div class="footer-title">
                                <h3>MORE</h3>
                            </div>
                            <ul>
                                <li><a href="#">Compare Car</a></li>
                                <li><a href="#">FAQ and Supportr</a></li>
                                <li><a href="#">Research Articles</a></li>
                                <li><a href="#">Warranties & Bhalogari®</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div class="ntt">
                <p>Copyright © | Bhalogari.com</p>
            </div>
            {/* <!---add-photo--> */}
            <div class="add-photo">
                <div class="add-photo-main">
                    <div>
                        <h3>Sell Now</h3>
                        <span><i class="fa fa-camera"></i></span>
                    </div>
                </div>
            </div>

            {/* <!---footer-fixed--> */}
            <div class="footer-fixed">
                <div class="footer-fixed-main">
                    <ul>
                        <li><a href="#"><i class="fa fa-home"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-circle-play"></i></a></li>
                        <li class="sell">
                            <div class="sell-data">
                                <a href="#">
                                    <small><i class="fa-solid fa-circle-plus"></i></small>
                                    <h3>Sell Now</h3>
                                </a>
                            </div>
                        </li>
                        <li><a href="#"><i class="fa-solid fa-file-invoice"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-bars"></i></a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Footer;


