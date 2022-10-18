import React, { useEffect, useState } from 'react'
import './EditUser.css'
import { Container, Table, Button, Modal, Form, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function EditUser() {

    const [UserData, setUserData] = useState([])
    const navi = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:5000/alluser")
            .then((result) => {
                console.log(result.data)
                setUserData(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])

    function deleteU(id) {
        axios.delete("http://localhost:5000/deleteuser/".concat(id))
            .then((result) => {
                console.log("UserDelete")
                window.location.reload()

            }).catch((err) => {
                console.log(err)

            });

    }

    return (
        <div>
            <Container className='edit-container'>
                <h5>Edit User Details</h5>
                <div className='edit-div'>
                    <Table bordered  >
                        <thead>
                            <tr>
                                <th>User_Id</th>
                                <th>Name</th>
                                <th>SurName</th>
                                <th>Age</th>
                                <th>Gendar</th>
                                <th>Email</th>
                                <th>Mobile No</th>
                                <th>PinCode</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                UserData.map((User) => {
                                    return (
                                        <tr>
                                            <td>{User._id} </td>
                                            <td>{User.Name}</td>
                                            <td>{User.LastName}</td>
                                            <td>{User.Age}</td>
                                            <td>{User.Gendar}</td>
                                            <td>{User.Email}</td>
                                            <td>{User.Mobile}</td>
                                            <td>{User.PinCode}</td>
                                            <td>{User.Address}</td>
                                            <td>
                                                <Button className='Edit-but' onClick={() => navi("/updateuser/".concat(User._id))}>Edit</Button>
                                                <Button variant="danger" onClick={() => { deleteU(User._id) }}>Delete</Button>
                                            </td>
                                        </tr>

                                    )

                                })
                            }
                        </tbody>
                    </Table>

                </div>
            </Container>


        </div>
    )
}

export default EditUser