import { useState, useMemo } from "react";
import { Button, Container, Row, Col, Card, Form, ListGroup } from 'react-bootstrap';

const EmailList = () => {
    const [filterText, setFilterText] = useState('');
    const [filterTld, setFilterTld] = useState('');

    const emailList = [
        "alyx-is-free@example.org",
        "shayne@example.org",
        "gordon.freeman@example.com",
        "barney.combine@example.com",
        "combine@example.net",
        "combine-harvester-parts@example.org",
    ];

    const clearFilters = () => {
        setFilterText('');
        setFilterTld('');
    }

    const filteredEmails = useMemo(() => {
        const text = filterText.trim().toLowerCase();
        const tld = filterTld.trim().toLowerCase();

        return emailList.filter((email) => {
            const emailLc = email.toLowerCase();
            if(text && !emailLc.includes(text)) return false; // execution of function is ended 

            if(!tld) return true;
            
            const domain = emailLc.split("@")[1] || "";
            const parts = domain.split(".");
            const last = parts[parts.length - 1];
            return last === tld
        })


    }, [filterText, filterTld])

    return (
        <>
            <Container className="py-4">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Card border="primary" className="shadow-sm">
                            <Card.Body>
                                <Form>
                                    <Form.Control
                                        type='text'
                                        value={filterText}
                                        onChange={(e) => setFilterText(e.target.value)}
                                    />

                                    <Form.Select 
                                        value={filterTld}
                                        onChange={(e) => setFilterTld(e.target.value)}
                                    >
                                        <option value="">All TLDs</option>
                                        <option value="org">.org</option>
                                        <option value="com">.com</option>
                                        <option value="net">.net</option>
                                        <option value="de">.de</option>
                                    </Form.Select>

                                    <Button 
                                        variant="secondary"
                                        onClick={clearFilters}
                                    >
                                        Clear
                                    </Button>
                                </Form>

                                {
                                    filteredEmails.legth === 0 
                                    ? (
                                        <p>No emails found</p>
                                    ) 
                                    : (
                                        <ListGroup>
                                            { 
                                                filteredEmails.map((email) => (
                                                    <ListGroup.Item key={email}>{email}</ListGroup.Item>
                                                ))
                                            }
                                        </ListGroup>
                                    )
                                }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EmailList;