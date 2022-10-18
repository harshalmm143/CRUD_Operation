import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import "./AddUser"
import axios from 'axios'
import { useParams } from 'react-router-dom'



function UpdateUser() {

    const { userId } = useParams()


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


    useEffect(() => {
        axios.get("http://localhost:5000/getuserbyid/".concat(userId))
            .then((result) => {
                const user = result.data
                console.log(user)

                setUserName(user.Name)
                setUserLastName(user.LastName)
                setUserAge(user.Age)
                setUserGendar(user.Gendar)
                setUserEmail(user.Email)
                setUserMobile(user.Mobile)
                setUserPinCode(user.PinCode)
                setUserState(user.State)
                setUserCity(user.City)
                setUserAddress(user.Address)
            }).catch((err) => {
                console.log(err)
            });

    }, [])

    function updateuserdata() {

        axios.put("http://localhost:5000/updateuser/".concat(userId), {
            Name: UserName,
            LastName: UserLastName,
            Age: UserAge,
            Gendar: UserGendar,
            Email: UserEmail,
            Mobile: UserMobile,
            PinCode: UserPinCode,
            State: UserState,
            City: UserCity,
            Address: UserAddress
        })
            .then((result) => {
                console.log(result.data)
                console.log("User Updateted")
            }).catch((err) => {
                console.log(err)

            });
    }
    return (
        <div>
            <Container className='Add-Container'>
                <h5>Update Details</h5>
                <div className='Add-div'>
                    <Form >
                        <Row>
                            <Col>
                                <h6>Frist Name</h6>
                                <Form.Control type="text" className="F-control" value={UserName} onChange={(e) => setUserName(e.target.value)} />
                                <h6>Age</h6>
                                <Form.Control type="text" className="F-control" value={UserAge} onChange={(e) => setUserAge(e.target.value)} />
                                <h6>Email</h6>
                                <Form.Control type="email" className="F-control" value={UserEmail} onChange={(e) => setUserEmail(e.target.value)} />
                                <Row>
                                    <Col>
                                        <h6>PinCode</h6>
                                        <Form.Control type="text" className="F-control" value={UserPinCode} onChange={(e) => setUserPinCode(e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Button className='Add-Code'>Get</Button>
                                    </Col>
                                </Row>
                                <h6>City</h6>
                                <Form.Control type="text" className="F-control" value={UserCity} onChange={(e) => setUserCity(e.target.value)} />
                            </Col>
                            <Col>
                                <h6>Last Name</h6>
                                <Form.Control type="text" className="F-control" value={UserLastName} onChange={(e) => setUserLastName(e.target.value)} />
                                <h6>Gendar</h6>
                                <Form.Select type="text" className="F-control" value={UserGendar} onChange={(e) => setUserGendar(e.target.value)} >
                                    <option>Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Trans</option>
                                </Form.Select>
                                <h6>Mobile Number</h6>
                                <Form.Control type="text" className="F-control" value={UserMobile} onChange={(e) => setUserMobile(e.target.value)} />
                                <h6>Address</h6>
                                <Form.Control type="text" className="F-control" value={UserAddress} onChange={(e) => setUserAddress(e.target.value)} />
                                <h6>State</h6>
                                <Form.Control type="text" className="F-control" value={UserState} onChange={(e) => setUserState(e.target.value)} />

                            </Col>
                        </Row>
                        <Button type='submit' className='Add-But' onClick={updateuserdata}>Update</Button>
                    </Form>
                </div>
            </Container>

        </div>
    )
}

export default UpdateUser