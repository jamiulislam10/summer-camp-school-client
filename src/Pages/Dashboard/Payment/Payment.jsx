import useCart from "../../../Hooks/useCart";
import CheckOut from "./CheckOut/CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51NElHWJkNPJU6xcYi2XHWPEnTxfvZP1eW2dwZJADJRG9JN7FcUerGOnzD6GPvCUSvkJQLdeBFz4YB0TnlEeA57Wn004fJ8h85N');

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseInt(total)
    console.log(price);
    return (
        <div className="w-full">
            <h1 className="ml-10">Please payment</h1>
            <Elements stripe={stripePromise}>
                <CheckOut cart={cart} price={price}></CheckOut>
            </Elements>
        </div>
    );
};

export default Payment;