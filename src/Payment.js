import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">

                <h1>
                    Checkout (<Link to='./checkout'>{basket?.length}items</Link>)
                </h1>

                {/* Payment section - delivery adddress */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery adddress</h3>
                    </div>
                    <div className="payment address">
                        <p>{user?.email}</p>
                        <p>133 Cali mogirato</p>
                        <p>India, caciona</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>

                </div>

                {/* Payment section - payment method */}
                <div className="payment__section">
                    <div className='payment__title'>
                        <h3>Payment method</h3>
                    </div>
                    <div className='payment__details'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment
