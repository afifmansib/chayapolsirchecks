import { NextPage } from 'next';
import { AiOutlineCaretDown, AiOutlinePlus } from 'react-icons/ai';

interface IProps {
    setIsModalOpen: (bool: boolean) => void;
}

const SelectPlaceholder: NextPage<IProps> = ({ setIsModalOpen }) => {
    return (
        <>
            <div class="compare-placeholder-add">
                <AiOutlinePlus
                    className="compare-placeholder-add-icon"
                    onClick={() => setIsModalOpen(true)}
                />
                <span>Add Car</span>
            </div>
            <div
                class="compare-placeholder-select"
                onClick={() => setIsModalOpen(true)}
            >
                <div class="compare-placeholder-select-item">
                    <input type="text" placeholder="Select Brand/Model" />
                    <AiOutlineCaretDown className="down" />
                </div>
                <div class="compare-placeholder-select-item disabled">
                    <input
                        type="text"
                        placeholder="Select Select Variant"
                        disabled
                    />
                    <AiOutlineCaretDown className="down" />
                </div>
            </div>
        </>
    );
};

export default SelectPlaceholder;
