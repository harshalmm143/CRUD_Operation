import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Card } from 'react-bootstrap'
import "./AllUser.css"
import axios from 'axios'


function AllUser() {
    const [UserData, setUserData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/alluser")
            .then((result) => {
                console.log(result.data)
                setUserData(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])



    return (
        <div>
            <Container className='All-user-Container'>
                <h5>All User Cards </h5>
                <Row>
                    {
                        UserData.map((User) => {
                            return (
                                <Col sm={12} md={6} lg={4}>
                                    <Card className='User-cards'>
                                        <Card.Body>
                                            <Card.Text>
                                                <h6>Name: {User.Name} {User.LastName}</h6>
                                                <h6>Age: {User.Age}</h6>
                                                <h6>Gendar: {User.Gendar}</h6>
                                                <h6>Email: {User.Email}</h6>
                                                <h6>Mobile: {User.Mobile}</h6>
                                                <h6>Address: {User.Address}</h6>
                                                <h6>PinCode: {User.PinCode}, {User.City}, {User.State}</h6>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>

                            )
                        })
                    }
                </Row>
            </Container>

        </div>
    )
}

export default AllUser