import React, { useState } from 'react'
import "./AddUser.css"
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'

function AddUser() {

    const [UserName, setUserName] = useState("")
    const [UserLastName, setUserLastName] = useState("")
    const [UserAge, setUserAge] = useState("")
    const [UserGendar, setUserGendar] = useState("")
    const [UserEmail, setUserEmail] = useState("")
    const [UserMobile, setUserMobile] = useState("")
    const [UserPinCode, setUserPinCode] = useState("")
    const [UserState, setUserState] = useState("")
    const [UserCity, setUserCity] = useState("")
    const [UserAddress, setUserAddress] = useState("")

    function AddUserDetails() {
        const userData = {
            Name: UserName,
            LastName: UserLastName,
            Age: UserAge,
            Gendar: UserGendar,
            Email: UserEmail,
            Mobile: UserMobile,
            Address: UserAddress,
            PinCode: UserPinCode,
            State: UserState,
            City: UserCity
        }
        axios.post("http://localhost:5000/adduser", userData)
            .then((result) => {
                console.log(result.data)

            }).catch((err) => {

            });
    }

    function getcityState() {
        axios.get("https://api.postalpincode.in/pincode/".concat(UserPinCode))
            .then((result) => {
                console.log(result.data)
                var mData = result.data[0]
                var office = mData.PostOffice[0]

                setUserCity(office.Name)
                setUserState(office.State)

            }).catch((err) => {
                console.log(err)
            });
    }
    return (
        <div>
            <Container className='Add-Container'>
                <h5>Add User</h5>
                <div className='Add-div'>
                    <Form onSubmit={AddUserDetails}>
                        <Row>
                            <Col>
                                <h6>Frist Name</h6>
                                <Form.Control type="text" className="F-control" onChange={(e) => setUserName(e.target.value)} />
                                <h6>Gendar</h6>
                                <Form.Select type="text" className="F-control" onChange={(e) => setUserGendar(e.target.value)}>
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Trans</option>
                                </Form.Select>
                                <h6>Address</h6>
                                <Form.Control type="text" className="F-control" onChange={(e) => setUserAddress(e.target.value)} />
                               
                            </Col>
                            <Col>
                                <h6>Last Name</h6>
                                <Form.Control type="text" className="F-control" onChange={(e) => setUserLastName(e.target.value)} />
                                <h6>Email</h6>
                                <Form.Control type="email" className="F-control" onChange={(e) => setUserEmail(e.target.value)} />
                                <Row>
                                    <Col>
                                        <h6>PinCode</h6>
                                        <Form.Control type="text" className="F-control" onChange={(e) => setUserPinCode(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Button className='Add-Code' onClick={getcityState}>Get</Button>
                                    </Col>
                                </Row>
                                <h6>State</h6>
                                <Form.Control type="text" className="F-control" value={UserState} />
                                

                            </Col>
                            <Col>
                                <h6>Age</h6>
                                <Form.Control type="text" className="F-control" onChange={(e) => setUserAge(e.target.value)} />
                                <h6>Mobile Number</h6>
                                <Form.Control type="text" className="F-control" onChange={(e) => setUserMobile(e.target.value)} />
                                <h6>City</h6>
                                <Form.Control type="text" className="F-control" value={UserCity} />

                            </Col>
                        </Row>
                        <Button type='submit' className='Add-But'>Submit</Button>
                    </Form>

                </div>

            </Container>
        </div>
    )
}

export default AddUser