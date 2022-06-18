/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { useState } from 'react';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';
import { ICar } from 'server/interface';
import VariantBox from '../VariantBox';

interface Props {
    car: ICar;
    variants: ICar[];
    variantItemHandler: (variantCar: ICar) => void;
    showCardHandler: (bool: boolean) => void;
}

const Card: NextPage<Props> = ({
    variants,
    variantItemHandler,
    car,
    showCardHandler,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div class="card-item">
            <div class="card-item-img">
                <img
                    src={car.photoUrl}
                    alt="card"
                    height="180px"
                    width="100%"
                />
            </div>
            <div class="card-item-content p-2 ">
                <div class="d-flex gap-3 align-items-center mb-2 ">
                    <span>
                        {car.brand.brandName} {car.model.modelName}
                    </span>
                    <MdEdit
                        onClick={() => showCardHandler(false)}
                        className="cursor-pointer"
                    />
                </div>
                <div class="compare-item-search position-relative mb-2">
                    <div class="compare-placeholder-select-item">
                        <input
                            type="text"
                            placeholder="Select Variant"
                            onFocus={() => setIsDropdownOpen(true)}
                            value={car.variant.variantName}
                        />
                        <AiOutlineCaretDown className="down" />
                    </div>
                    {isDropdownOpen && (
                        <div
                            class="shadow-sm position-absolute bg-white w-100 "
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <VariantBox
                                variants={variants}
                                variantItemHandler={variantItemHandler}
                            />
                        </div>
                    )}
                </div>

                <div class="fs-5 mb-0">Rs: {car.price} ₹</div>
                <small class="text-secondary">*Ex-showroom Price</small>
            </div>
        </div>
    );
};

export default Card;
