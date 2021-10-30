import React, {useState, useEffect} from 'react';
import './ManageOrder.css'

const ManageOrder = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = `http://localhost:4000/usersorder`
        fetch(url)
            .then(res => res.json())
            .then(date => {
                setUsers(date)
            })
    }, [])

    // delete user from manage all user 
    const handleDelete = id => {
        // console.log(id)
        const url = `http://localhost:4000/usersorder/${id}`
        fetch(url, {
            method:'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    alert("delete succesful")
                }
                
            })
    }
    return (
        <div className="container">
            <h1>Manage order section</h1>
            <div className="my-5">
                <div className="manage-title">
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Order</h3>
                    <h3>Date</h3>
                    <h3>Delete Option</h3>
                </div>
                <div>
                    {users.map(user => <div key={user._id} className="manage-order">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.orderItem}</p>
                        <p>{user.date}</p>
                        <p><button onClick={() => handleDelete(user._id)}>Delte</button></p>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;