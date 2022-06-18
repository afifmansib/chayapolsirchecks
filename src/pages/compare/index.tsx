import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IBrandItem, ICar } from 'server/interface';
import CompareItem from 'src/components/CompareItem';

interface IBrands {
    success: boolean;
    data: IBrandItem[];
    message: string;
}
interface IProps {
    brands: IBrandItem[];
}

const ComparePage: NextPage<IProps> = ({ brands }) => {
    const router = useRouter();
    const [selectedAllData, setSelectedAllData] = useState<ICar[]>([]);

    const [selectedData1, setSelectedData1] = useState<ICar>({} as ICar);
    const [selectedData2, setSelectedData2] = useState<ICar>({} as ICar);
    const [selectedData3, setSelectedData3] = useState<ICar>({} as ICar);
    const [selectedData4, setSelectedData4] = useState<ICar>({} as ICar);

    useEffect(() => {
        const data: ICar[] = [selectedData1, selectedData2, selectedData3, selectedData4];
        setSelectedAllData(data);
        return () => {
            setSelectedAllData([]);
        };
    }, [selectedData1, selectedData2, selectedData3, selectedData4]);

    const compareHandler = () => {
        const isHasDataArray = selectedAllData.filter((item) => item._id);
        const minimumSelected = isHasDataArray.length > 1 ? true : false;
        if (!minimumSelected) {
            alert('At least two cars need to compare');
        } else {
            const variant1 = selectedData1.variant?.variantName;
            const variant2 = selectedData2.variant?.variantName;
            const variant3 = selectedData3.variant?.variantName;
            const variant4 = selectedData4.variant?.variantName;

            console.log({ variant1, variant2, variant3, variant4 });
            router.push(
                `/compare/details?variant=${variant1}&variant=${variant2}${variant3 ? `&variant=${variant3}` : ''
                }${variant4 ? `&variant=${variant4}` : ''}`
            );
        }
    };

    return (
        <>
            {/* <!-- compare page design --> */}

            {/* <section class="section"> */}
            {/* <!-- banner design start --> */}
            <div class="section-one">
                <div class="section-one-child">
                    <div class="compare-page-banner">
                        <div class="compare-page">
                            <h2>
                                Confused? Easy way to compare cars
                            </h2>
                        </div>
                        <span class="banner-circel"></span>
                    </div>
                </div>
            </div>

            {/* <!-- pagination design start --> */}
            <div class="section-one-child">
                <div class="pagination">
                    <span class="privious_page"><a href="#">Home</a></span>
                    <span class="icon">
                        <i class="fas fa-angle-right"></i>
                    </span>
                    <span class="current_page">Compare cars</span>
                </div>
            </div>
            {/* <!-- pagination design end --> */}
            <div class="section-one-childd">
                <div class="compare-cards">
                    <div class="container bg-white py-5">
                        <div class="row justify-content-center pb-5">
                            <CompareItem
                                brands={brands}
                                selectedData={selectedAllData}
                                setSelectedData={setSelectedData1}
                            />
                            <CompareItem
                                brands={brands}
                                selectedData={selectedAllData}
                                setSelectedData={setSelectedData2}
                            />
                            <CompareItem
                                brands={brands}
                                selectedData={selectedAllData}
                                setSelectedData={setSelectedData3}
                            />
                            <CompareItem
                                brands={brands}
                                selectedData={selectedAllData}
                                setSelectedData={setSelectedData4}
                            />
                        </div>
                        <div class="text-center">
                            <button class="button" onClick={compareHandler}>
                                Compare
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
    try {
        const { data } = await axios.get<IBrands>(`/api/cars/model/all`);
        return {
            props: {
                brands: data.data,
            },
        };
    } catch (error: any) {
        const data = error?.response?.data;
        return {
            props: {
                ...data,
            },
        };
    }
};

export default ComparePage;
