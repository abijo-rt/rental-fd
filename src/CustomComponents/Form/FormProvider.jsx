import BuyHouse from "./BuyHouse";
import BuyLand from "./BuyLand";
import BuyVehicle from "./BuyVehicle";
import PropTypes from "prop-types";

const FormProvider = ({cate,type}) => {
    switch (cate) {
        case 'buy':
            // nested swtich buy
            switch (type) {
                case 'house':
                    return <BuyHouse/>
                case 'vehicle':
                    return <BuyVehicle/>
                case 'land':
                    return <BuyLand/>
            }
            break;

        case 'rent':
            // nested swtich buy
            switch (type) {
                case 'house':
                    return <h1>rent house</h1>
                case 'vehicle':
                    return <h1>rent vehicle</h1>
                case 'land':
                    return <h1>rent land</h1>
            }
            break;

        case 'bid':
            // nested swtich buy
            switch (type) {
                case 'house':
                    return <h1>bid house</h1>
                case 'vehicle':
                    return <h1>bid vechile</h1>
                case 'land':
                    return <h1>bid land</h1>
                      }

            break;
    }
}

FormProvider.propTypes = {
    cate: PropTypes.string.isRequired,  // Ensures cate is a required string
    type: PropTypes.string.isRequired   // Ensures type is a required string
};

export default FormProvider;