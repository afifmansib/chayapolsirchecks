import type { NextPage } from 'next';
import Head from 'next/head';

const HomeBanner: NextPage = () => {
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js"></script>
            </Head>
            <main>
                {/* <!---banner-area--> */}
                <div class="banner-area">
                    <div class="banner-slide-area">
                        {/* <!--slide-img--> */}
                        <div class="slide-img">
                            <a href="#"  >
                                <img src="/assets/MicrosoftTeams_image_90_.webp" alt="aaa" />
                            </a>
                        </div>
                    </div>
                    {/* <!---banner-bottom--> */}
                    <div class="banner-bottom">
                        <div class="container">
                            <div class="banner-bottom-main">
                                {/* <!---banner-bottom-top-tab--> */}
                                <div class="banner-bottom-top-tab">
                                    <ul>
                                        <li class="user-tab select-tab"><button>Used</button></li>
                                        <li class="re-tab"><button>Recondition</button></li>
                                        <li class="new-tab"><button>New</button></li>
                                    </ul>
                                </div>
                                {/* <!---banner-bottom-brand-tab--> */}
                                <div class="banner-bottom-brand-tab">
                                    <ul>
                                        <li class="brand-tab">
                                            <div class="brand-tab-info">
                                                <div>
                                                    <span>Select</span>
                                                </div>
                                                <div>
                                                    <h3>Brand <i class="fa fa-angle-right"></i></h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="brand-tab">
                                            <div class="brand-tab-info">
                                                <div>
                                                    <span>Select</span>
                                                </div>
                                                <div>
                                                    <h3>Modal <i class="fa fa-angle-right"></i></h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="brand-tab">
                                            <div class="brand-tab-info">
                                                <div>
                                                    <span>Select</span>
                                                </div>
                                                <div>
                                                    <h3>Price <i class="fa fa-angle-right"></i></h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="brand-tab brand-btn">
                                            <div class="brand-tab-info">
                                                <button>Find Cars <i class="fa fa-search"></i></button>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomeBanner;


