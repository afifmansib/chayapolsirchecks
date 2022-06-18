import type { NextPage } from 'next';
import Head from 'next/head';
import CarCategory from 'src/components/CarCategory';
import ChooseByBodyType from 'src/components/ChooseByBodyType';
import ChooseByMaker from 'src/components/ChooseByMaker';
import CustomerFeedback from 'src/components/CustomerFeedback';
import FeaturedArticle from 'src/components/FeaturedArticle';
import FeaturedCar from 'src/components/FeaturedCar';
import HomeBanner from 'src/components/HomeBanner';
import PopularBrands from 'src/components/PopularBrand';
import WhyTrustValogari from 'src/components/WhyTrustValogari';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css" />
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <main>
                <HomeBanner />
                <CarCategory />
                <PopularBrands />
                <WhyTrustValogari />
                <ChooseByMaker />
                <ChooseByBodyType />
                <FeaturedCar />
                <CustomerFeedback />
                <FeaturedArticle />
            </main>
        </>
    );
};

export default Home;


