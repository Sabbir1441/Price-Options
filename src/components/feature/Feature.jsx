import PropTypes from "prop-types";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div className="">
            <p className="flex gap-2 items-center">
                <IoMdCheckmarkCircle className=""></IoMdCheckmarkCircle>
                {feature}
            </p>
        </div>
    );
};

Feature.protoTypes = {
    feature: PropTypes.string
}

export default Feature;