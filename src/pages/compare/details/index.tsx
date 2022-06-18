import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { ICar } from 'server/interface';
import ComparePage from '..';

interface ICars {
    success: boolean;
    data: ICar[];
    message: string;
}

interface IProps {
    status: boolean;
    data: ICar[];
    message: string;
}

const CompareDetailsPage: NextPage<IProps> = ({ data }) => {
    const router = useRouter();
    console.log({ query: router.query });
    console.log({ data });
    return (
        <>
            <Head>
                <script src="https://kit.fontawesome.com/20d6bc66e0.js"></script>
            </Head>
            {/* <!-- compare details table one --> */}
            <div class="page">
                <div class="section-one-child">
                    <div class="pagination">
                        <span class="privious_page"><a href="#">Home</a></span>
                        <span class="icon">
                            <i class="fas fa-angle-right"></i>
                        </span>
                        <span class="privious_page"><a href="#">New car</a></span>
                        <span class="icon">
                            <i class="fas fa-angle-right"></i>
                        </span>
                        <span class="privious_page"><a href="#">Compare car</a></span>
                        <span class="icon">
                            <i class="fas fa-angle-right"></i>
                        </span>
                        <span class="current_page">{data[0].brand.brandName + ' ' + data[0].model.modelName + ' ' + data[0].variant.variantName} vs {data[1].brand.brandName + ' ' + data[1].model.modelName + ' ' + data[1].variant.variantName}</span>
                    </div>
                </div>
            </div>
            {/* <!-- compare card design start --> */}
            <div class="difference">
                <div class="section-one-child">
                    <div class="compare-cards">
                        <h1>{data[0].brand.brandName + ' ' + data[0].model.modelName + ' ' + data[0].variant.variantName} vs {data[1].brand.brandName + ' ' + data[1].model.modelName + ' ' + data[1].variant.variantName} Comparison</h1>

                    </div>
                </div>
            </div>
            {/* <!-- compare card design end --> */}
            {/* <!-- hide common feature start --> */}
            <div class=" common-hide-feature">
                <div class="section-one-child">
                    <div class="hide-feature">
                        {/* <mat-checkbox class="example-margin">Hide Common Features</mat-checkbox> */}
                    </div>
                </div>
            </div>
            {/* <!-- hide common feature end --> */}

            {/* <!-- compare-details start --> */}
            <div class="section-one-child">
                <div class="compare-details">
                    <div class="compare-info">
                        <h1>{data[0].brand.brandName + ' ' + data[0].model.modelName + ' ' + data[0].variant.variantName} vs {data[1].brand.brandName + ' ' + data[1].model.modelName + ' ' + data[1].variant.variantName}</h1>
                        <p>
                            Should you buy Maruti Alto 800 or Honda City Hybrid? Find out which car is best for you -
                            compare
                            the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage,
                            Features, Colours and other specs. Maruti Alto 800 price starts at Rs 3.39 Lakh ex-showroom for
                            STD
                            Opt (Petrol) and Honda City Hybrid price starts Rs 19.50 Lakh ex-showroom for ZX Sensing eHEV
                            (Petrol). Alto 800 has 796 cc (CNG top model) engine, while City Hybrid has 1498 cc (Petrol top
                            model) engine. As far as mileage is concerned, the

                            <span><a href="#">Read More...</a></span>
                        </p>
                    </div>
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="car-detail">
                                        <i class="fab fa-delicious"></i>
                                        Basic Information
                                    </th>
                                    {
                                        data.map(item => <th>{item.variant.variantName}</th>)
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="car-detail">Brand name</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    <a title="Maruti" href="#">{item.model.modelName}</a>
                                                </td>
                                            )
                                        })
                                    }

                                </tr>
                                <tr>
                                    <td class="car-detail">On Road Price </td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    {/* <i class="las la-rupee-sign"></i> */}
                                                    ৳ {item.price}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="car-detail">Offers & Discount</td>
                                    {
                                        data.map(item => <td>-</td>)
                                    }

                                </tr>
                                <tr>
                                    <td class="car-detail">User Rating</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    {/* <div class="car-rating">
                                                        <span>4.2</span>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star-half-alt"></i>
                                                    </div>
                                                    <span class="base-review">Based on <a title="Alto 800 Reviews" href="#"> 427
                                                        Reviews</a></span> */}
                                                    N/A
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="car-detail">Finance Available (EMI)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    <span>
                                                        N/A
                                                    </span>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="car-detail">Insurance</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    <span>
                                                        N/A
                                                    </span>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>

                                    <td class="car-detail">Service Cost (Avg. of 5 years)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    {item.serviceCost.price}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- compare details table two --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name block-dipsly">
                                        <i class="fas fa-tractor"></i>
                                        Engine and Transmission
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine block-dipsly">Engine Type</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    {item.engineType}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine block-dipsly">Displacement (cc)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    {item.displacement}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine block-dipsly">No Of Cylinder</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    {item.numberOfCylinder}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine block-dipsly">Motor Type</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- compare details table three --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-gas-pump"></i>
                                        Fuel & Performance
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">Fuel Type</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    {item.fuelType}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Displacement (cc)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    {item.displacement}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Mileage (City)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Mileage (ARAI)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Fuel Tank Capacity</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- car grid div start --> */}
                    <div class="new-comparison-cards">
                        <h1>
                            Add another car to comparison
                        </h1>
                        <div class="new-cards">
                            {/* <!-- new card one --> */}
                            <div class="new-compare-card">
                                <div class="new-card-detial">
                                    <img src="/assets/car1.jpg" alt="" />
                                    <div class="new-card-info">
                                        <h5>Bajaj Qute (RE60)</h5>
                                        <p>
                                            <i class="las la-rupee-sign"></i>
                                            2.64 Lakh *
                                        </p>
                                    </div>
                                </div>
                                <div class="new-card-add-btn">
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                            {/* <!-- new card two --> */}
                            <div class="new-compare-card">
                                <div class="new-card-detial">
                                    <img src="/assets/car2.jpg" alt="" />
                                    <div class="new-card-info">
                                        <h5>Volkswagen Taigun</h5>
                                        <p>
                                            <i class="las la-rupee-sign"></i>
                                            11.40 - 18.60 Lakh *
                                        </p>
                                    </div>
                                </div>
                                <div class="new-card-add-btn">
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                            {/* <!-- new card three --> */}
                            <div class="new-compare-card">
                                <div class="new-card-detial">
                                    <img src="/assets/car3.jpg" alt="" />
                                    <div class="new-card-info">
                                        <h5>Maruti Eeco</h5>
                                        <p>
                                            <i class="las la-rupee-sign"></i>
                                            4.63 - 5.94 Lakh *
                                        </p>
                                    </div>
                                </div>
                                <div class="new-card-add-btn">
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                            {/* <!-- new card four --> */}
                            <div class="new-compare-card">
                                <div class="new-card-detial">
                                    <img src="/assets/car4.jpg" alt="" />
                                    <div class="new-card-info">
                                        <h5>Ahindra Scorpio</h5>
                                        <p>
                                            <i class="las la-rupee-sign"></i>
                                            13.54 - 18.62 Lakh *
                                        </p>
                                    </div>
                                </div>
                                <div class="new-card-add-btn">
                                    <a href="#">Add To Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- car grid div end --> */}

                    {/* <!-- compare details table four --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-cogs"></i>
                                        Suspension, Steering & Brakes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">Front Suspension</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Rear Suspension</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Shock Absorbers Type</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Steering Type</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Steering Column</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* <!-- compare details table five --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-cubes"></i>
                                        Dimensions & Capacity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">Length (mm)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Width (mm)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Height (mm)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Wheel Base (mm)</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">No. of Doors</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* <!-- compare details table six --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-wheelchair"></i>
                                        Comfort & Convenience
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">Power Steering</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Power Windows Front </td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Power Windows Rear</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Power Boot</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Remote Engine Start/Stop</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>


                    {/* <!-- compare details table seven --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-circle-notch"></i>
                                        Interior
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">Tachometer</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Electronic Multi Tripmeter</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Leather Seats</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- compare details table eight --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-car"></i>
                                        Exterior
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">Available Colors</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    <span>
                                                        <div class="color-2">
                                                            <span class="six"><i class="fas fa-circle"></i></span>
                                                            <span class="seven"><i class="fas fa-circle"></i></span>
                                                            <span class="eight"><i class="fas fa-circle"></i></span>
                                                            <span class="nine"><i class="fas fa-circle"></i></span>
                                                            <span class="ten"><i class="fas fa-circle"></i></span>
                                                            <span class="eleventh"><i class="fas fa-circle"></i></span>
                                                        </div>
                                                        <span>
                                                            <a title="Alto 800 Colors" href="#">6 colors</a>
                                                        </span>
                                                    </span>
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Body Type</td>

                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Adjustable Headlights</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Fog Lights Front</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Tyre Size</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- compare details table nine --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-user-lock"></i>
                                        Safety
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">Anti Lock Braking System</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Brake Assist</td>

                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Central Locking</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Power Door Locks</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">No Of Airbags</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Hill Assist</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- compare details table ten --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-music"></i>
                                        Entertainment & Communication
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">
                                        Radio
                                    </td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">
                                        Speakers Front
                                    </td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">
                                        Speakers Rear
                                    </td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Integrated2DINAudio</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Bluetooth Connectivity</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Touch Screen</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Touch Screen Size</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">Number Of Speaker</td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* <!-- compare details table eleven --> */}
                    <div class="compare_details_table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="engine-name">
                                        <i class="fas fa-sticky-note"></i>
                                        Warranty
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="engine">
                                        Introduction Date
                                    </td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">
                                        Warranty Time
                                    </td>

                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                                <tr>
                                    <td class="engine">
                                        Warranty Distance
                                    </td>
                                    {
                                        data.map(item => {
                                            return (
                                                <td>
                                                    -
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export const getServerSideProps: GetServerSideProps<IProps> = async (ctx) => {
    const { query } = ctx;

    try {
        const { data } = await axios.post<ICars>('/api/cars/select-car', {
            variant: query.variant,
        });
        return {
            props: { ...data },
        };
    } catch (error: any) {
        const data = error?.response?.data;
        return {
            props: { ...data },
        };
    }
};
export default CompareDetailsPage;
