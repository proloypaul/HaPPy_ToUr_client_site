import React, { useRef } from 'react';
import './OrderForm.css';

const OrderForm = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const dateRef = useRef()
    const orderItemRef = useRef()

    const handleOrder = event => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const orderItem = orderItemRef.current.value;
        const date = dateRef.current.value;

        const userOrder = {
            name,
            email,
            phone,
            address,
            orderItem,
            date
        };
        // console.log(userOrder)

        const url = `http://localhost:4000/usersorder`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(userOrder)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                    alert("Submit successful")
                    event.target.reset()
                }else{
                    alert("Submit isn't successful")
                    
                }
            })
    }

    return (
        <div className="orderForm-container">
            <div className="order-form">
                <form onSubmit={handleOrder}>
                    <div>
                        <input ref={nameRef} type="text" placeholder="Give your name"/>
                    </div>
                    <div>
                        <input ref={emailRef} type="email" placeholder="Email: abc@gmail.com"/>
                    </div>
                    <div>
                        <input ref={phoneRef} type="number" placeholder="phone"/>
                    </div>
                    <div>
                        <input ref={addressRef} type="text" placeholder="present address"/>
                    </div>
                    <div>
                        <input ref={orderItemRef} type="text" placeholder="order Item : place, country"/>
                    </div>
                    <div>
                        <input ref={dateRef} type="date"/>
                    </div>
                    <div>
                        <input className="inputBtn" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OrderForm;