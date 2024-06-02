import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {

    const [error, setError] = useState('');

    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if(card == null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log("Payment Error", error);
            setError(error.message);
        }
        else{
            console.log('Payment method', paymentMethod);
            setError('');
        }

    }

    return (
        <div className="w-11/12 mx-auto">
            <form onSubmit={handleSubmit}>
                <CardElement 
                options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                // backgroundColor: 'red',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                ></CardElement>
                <button type="submit" className="btn btn-primary text-white px-10" disabled={!stripe}>
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;