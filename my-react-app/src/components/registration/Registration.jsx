import { useState } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    Form, 
    Card, 
    Button 
}  from 'react-bootstrap';

const Registration = () => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        userType: "",
        termsOfService: false
    })

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        setUserData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
        console.log(userData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userData);
    }

    return (
        <Container>
            <Row>
                <Col md={8} lg={6}>
                    <Card border="primary" className="shadow-sm">
                        <Card.Body>
                            <Card.Title>Register</Card.Title>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter username" 
                                        name="username"
                                        onChange={handleChange}
                                        value={userData.username}
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Enter password" 
                                        name="password"
                                        onChange={handleChange}
                                        value={userData.password}
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check 
                                        inline
                                        type="radio"
                                        id="userTypeStudent"
                                        label="Student"
                                        name="userType"
                                        value="student"
                                        checked={userData.userType === "student"}
                                        onChange={handleChange}
                                    /> 
                                    <Form.Check 
                                        inline
                                        type="radio"
                                        id="userTypeTeacher"
                                        label="Teacher"
                                        name="userType"
                                        value="teacher"
                                        checked={userData.userType === "teacher"}
                                        onChange={handleChange}
                                    /> 
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check 
                                        inline
                                        type="checkbox"
                                        label="I agree to the Terms of Servic"
                                        name="termsOfService"
                                        checked={userData.termsOfService}
                                        onChange={handleChange}
                                    /> 
                                </Form.Group>

                                <div className="d-grid">
                                    <Button type='submit'>Register</Button>
                                </div>

                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Registration;