import React, { useEffect, useState } from 'react';
import useAuth from '../Context/useAuth';

const MyOrder = () => {
    const {user} = useAuth()
    const [userOrder, setUserOrder] = useState([])
    
    useEffect(() => {
        const url = `https://gentle-river-15524.herokuapp.com/usersorder`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setUserOrder(data)
            })
    }, [])
    // console.log(userOrder)
    const onlyHisOrder = userOrder.filter(loger => user.email === loger.email)
    // console.log(onlyHisOrder)

    const handleRemove = id => {
        // console.log(id)
        const isDelete = window.confirm("are you would like to delete this user?")

        if(isDelete){
            const url = `https://gentle-river-15524.herokuapp.com/usersorder/${id}`
            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        const withOutDeleteUsers = userOrder.filter(user => user._id !== id)
                        setUserOrder(withOutDeleteUsers)
                        alert("Your Order Remove Succesfully")
                    }
                    
                })
        }else{
            alert("Your Order Tour Don't Remove")
        }
    }
    return (
        <div className="container">
            <h1>Your Orders</h1>
            <div className="my-5">
                <div className="manage-title">
                    <h3>Name</h3>
                    <h3>Present Address</h3>
                    <h3>Date</h3>
                    <h3>Order place</h3>
                    <h3>Delete</h3>
                </div>
                <div>
                    {onlyHisOrder.map(onlyUser => <div key={onlyUser._id} className="manage-order">
                        <p>{onlyUser.name}</p>
                        <p>{onlyUser.address}</p>
                        <p>{onlyUser.date}</p>
                        <p>{onlyUser.orderItem}</p>
                        <p><button className="dltBtn" onClick={() => handleRemove(onlyUser._id)}>Remove Order</button></p>
                    </div>)}
                </div>
            </div>
            
            
        </div>
    );
};

export default MyOrder;