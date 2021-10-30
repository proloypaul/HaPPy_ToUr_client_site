import React, {useState, useEffect} from 'react';
import './ManageOrder.css'

const ManageOrder = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const url = `https://gentle-river-15524.herokuapp.com/usersorder`
        fetch(url)
            .then(res => res.json())
            .then(date => {
                setUsers(date)
            })
    }, [])

    // delete user from manage all user 
    const handleDelete = id => {
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
                        const withOutDeleteUsers = users.filter(user => user._id !== id)
                        setUsers(withOutDeleteUsers)
                        alert("delete succesful")
                    }
                    
                })
        }else{
            alert("Okay user don't delete")
        }
    }
    return (
        <div className="container">
            <h1>Manage All order </h1>
            <div className="my-5">
                <div className="manage-title">
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Order</h3>
                    <h3>Date</h3>
                    <h3>Delete</h3>
                </div>
                <div>
                    {users.map(user => <div key={user._id} className="manage-order">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.orderItem}</p>
                        <p>{user.date}</p>
                        <p><button className="dltBtn" onClick={() => handleDelete(user._id)}><i className="far fa-trash-alt"></i></button></p>
                    </div>)}
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;