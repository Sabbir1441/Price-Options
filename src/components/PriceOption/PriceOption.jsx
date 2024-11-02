import PropTypes from "prop-types";
import Feature from "../feature/Feature";

const PriceOption = ({ option }) => {

    const { id, name, features, price } = option;

    return (
        <div className="bg-sky-300 p-4 rounded-xl flex flex-col">
            <h2 className="text-center">
                <span className="text-3xl font-bold">{price}</span>
                <span>/mon</span>
            </h2>
            <h4 className="text-2xl text-center my-3">{name}</h4>
            <div className="pl-3 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="font-bold text-white w-full my-4 bg-emerald-600 py-3 rounded-lg hover:bg-green-800">
                Buy Now
            </button>
        </div>
    );
};

PriceOption.PropTypes = {

    option: PropTypes.object
}

export default PriceOption;