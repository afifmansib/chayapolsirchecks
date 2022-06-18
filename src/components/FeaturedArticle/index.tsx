import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const FeaturedArticle: NextPage = () => {
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js"></script>
            </Head>
            {/* <!---section11--> */}
            <div class="section11">
                <div class="container">
                    {/* <!---title--> */}
                    <div class="title">
                        <h3>Featured <span> Articles</span></h3>
                    </div>
                    {/* <!---section11-main--> */}
                    <div class="section11-main">
                        {/* <!--articles--> */}
                        <div class="articles" >
                            {/* <!---articles-img--> */}
                            <div class="articles-img">
                                <img src="/assets/2020-honda-cr-v-buy-it.jpg" alt="" />
                                {/* <!--articles-tag--> */}
                                <div class="articles-tag">
                                    <span>Reviews</span>
                                </div>
                            </div>
                            {/* <!--artilces-body--> */}
                            <div class="articles-body">
                                <h3>Honda CR-V 2020: Are you planning to buy?</h3>
                                <p>The Honda CR-V is one of the best-selling vehicles for the Japanese automobile manufacturer Honda. It is a small SUV. The model was first introduced in 1997, and it has now entered its fifth generation. Because...</p>
                                <div>
                                    <a href="#"  >Read More <i class="fa fa-angle-right"></i></a>
                                </div>
                            </div>

                        </div>
                        {/* <!--articles-end-->  */}
                        {/* <!--articles--> */}
                        <div class="articles" >
                            {/* <!---articles-img--> */}
                            <div class="articles-img">
                                <img src="/assets/advantages-of-engine-oil-change-1160x653.jpg" alt="" />
                                {/* <!--articles-tag--> */}
                                <div class="articles-tag">
                                    <span>Reviews</span>
                                </div>
                            </div>
                            {/* <!--artilces-body--> */}
                            <div class="articles-body">
                                <h3>Honda CR-V 2020: Are you planning to buy?</h3>
                                <p>The Honda CR-V is one of the best-selling vehicles for the Japanese automobile manufacturer Honda. It is a small SUV. The model was first introduced in 1997, and it has now entered its fifth generation. Because...</p>
                                <div>
                                    <a href="#"  >Read More <i class="fa fa-angle-right"></i></a>
                                </div>
                            </div>

                        </div>
                        {/* <!--articles-end-->  */}
                        {/* <!--articles--> */}
                        <div class="articles" >
                            {/* <!---articles-img--> */}
                            <div class="articles-img">
                                <img src="/assets/Toyota-will-reduce-global-manufacturing-by-40-due-to-chip-shortages-ca59ef5f-1160x653.jpg" alt="" />
                                {/* <!--articles-tag--> */}
                                <div class="articles-tag">
                                    <span>Reviews</span>
                                </div>
                            </div>
                            {/* <!--artilces-body--> */}
                            <div class="articles-body">
                                <h3>Honda CR-V 2020: Are you planning to buy?</h3>
                                <p>The Honda CR-V is one of the best-selling vehicles for the Japanese automobile manufacturer Honda. It is a small SUV. The model was first introduced in 1997, and it has now entered its fifth generation. Because...</p>
                                <div>
                                    <a href="#"  >Read More <i class="fa fa-angle-right"></i></a>
                                </div>
                            </div>

                        </div>
                        {/* <!--articles-end-->  */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeaturedArticle;


