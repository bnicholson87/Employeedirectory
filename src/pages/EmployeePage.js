import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Table from "react-bootstrap/Table";
import TableRow from "../components/TableRow.js";
import Button from "react-bootstrap/Button"

class EmployeePage extends Component {
    state = {
        search: "",
        employees: [],
        completeList: [],
    };
    componentDidMount() {
        API.getRandomEmployee()
            .then(res => {
                console.log(res.data.results)
                this.setState({ employees: res.data.results, completeList: res.data.results })
            })
            .catch(err => console.log(err));
    }
     handlesort = () => {
        console.log(this)
        let array = this.state.employees.sort(function(a, b) {
          if (a.name.last < b.name.last) {
            return -1;
          }
          if (a.name.last > b.name.last) {
            return 1;
          }
        
          return 0;
        });
        this.setState({ employees: array })
    }
    femalelist = () => {
        console.log(this)
        let array2 = this.state.employees.filter(user => user.gender === "female");
        console.log(array2)
        this.setState({ employees: array2 })
    }
    malelist = () => {
        console.log(this)
        let array3 = this.state.employees.filter(user => user.gender === "male");
        console.log(array3)
        this.setState({ employees: array3 })
    }
    fullList = () => {
        console.log(this)
        this.setState({ employees: this.state.completeList })
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <Container>
                                <h1>Employee List</h1>
                                <p>Here are the people who work for our company</p>
                            </Container>
                        </Jumbotron></Col>
                </Row>
                <Row>
                    <Col>
                    <Button onClick= {this.handlesort} variant="primary">Sort by Last Name</Button>
                    </Col>
                    <Col>
                    <Button onClick= {this.femalelist} variant="primary">Female Employees</Button>
                    </Col>
                    <Col>
                    <Button onClick= {this.malelist} variant="primary">Male Employees</Button>
                    </Col>
                    <Col>
                    <Button onClick= {this.fullList} variant="primary">Complete List</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Map through employees using TableRow */}
                                {this.state.employees.map(employee => (
                                    <TableRow
                                        image={employee.picture.thumbnail}
                                        firstname={employee.name.first}
                                        lastname={employee.name.last}
                                        email={employee.email}
                                        phonenumber={employee.phone}
                                    />
                                ))}
                            </tbody>
                        </Table></Col>
                </Row>
            </Container>
        )
    }
}

export default EmployeePage;