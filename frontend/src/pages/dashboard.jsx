import React from 'react'
import Doughnutchart from '../component/Doughnut'
import LineChart from '../component/LineChart'
import { Card, Button, Row, Col, Table } from 'react-bootstrap'
import PieChart from '../component/PieChart'

const Dashboard = ({ chartURL, recycleData, recycleChart }) => {

    console.log(recycleData)

    const recycleDoughnut = () => {
        console.log("rer")
        const fomatData = () => {

        }

        return (<Card
            variant="outlined"
            className='m-2'
        >
            <Card.Body>
                <Card.Title>Participation Graph</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    {/* <Doughnutchart /> */}
                    {recycleData.map((ele, ind) => <>
                        <h3>Total waste in year  {ele.Date}</h3>
                        <Doughnutchart
                            labels={[
                                'Ireland', 'France', 'Denmark', 'Sweden', 'Netherlands'
                            ]}
                            datasets={[ele.Ireland, ele.France, ele.Denmark, ele.Sweden, ele.Netherlands]}
                        />
                    </>)}
                </Card.Text>
            </Card.Body>
        </Card>)
    }

    return (
        <div>
            <Card>
                <Card.Header>
                    <h3>Overview</h3>
                </Card.Header>
                <Card.Body>
                    <div
                        className={`d-flex align-items-center  w-100 +`}
                    >
                        <div
                            className={`py-2 px-1 rounded-3`}
                        >
                            {/* <Logo style={{ fill: countColor }} className={styles.images} /> */}
                        </div>
                        <div>
                            <p> Overview</p>
                            <p
                            // className={styles.textStyle}
                            >
                                {/* {text} */}
                            </p>
                        </div>
                    </div>


                    {recycleData && <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Ireland</th>
                                <th>Denmark</th>
                                <th>Sweden</th>
                                <th>France</th>
                                <th>Netherlands</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recycleData.map((ele, index) => {
                                return <tr key={index}>
                                    <td>{ele.Date}</td>
                                    <td>{ele.Ireland}</td>
                                    <td>{ele.Denmark}</td>
                                    <td>{ele.Sweden}</td>
                                    <td>{ele.France}</td>
                                    <td>{ele.Netherlands}</td>
                                </tr>
                            })}
                        </tbody>
                    </Table>}
                    {recycleData && <h3>*All Data are in Tonnes</h3>}
                    {/* <Row>
                        <Col>
                            <Card className='w-30%'>
                                <Card.Header>
                                    All
                                </Card.Header>
                                <Card.Body>
                                    22221
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>
                                    All
                                </Card.Header>
                                <Card.Body>
                                    22221
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>
                                    All
                                </Card.Header>
                                <Card.Body>
                                    22221
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> */}
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>

            {recycleData && recycleDoughnut()}

            {/* <Card
                variant="outlined"
                className='m-2'
            >
                <Card.Body>
                    <Card.Title>Participation Graph</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        <Doughnutchart />
                    </Card.Text>
                </Card.Body>
            </Card> */}

            { 
                chartURL && <Card
                    variant="outlined"
                    className='m-2'
                >
                    <Card.Body>
                        <Card.Title>Total Waste Graph</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Total Waste Graph</Card.Subtitle> */}
                        <Card.Text>
                            {/* <LineChart /> */}
                            <img
                                className="img-fluid"
                                src={chartURL}
                                alt="Chart"
                            />
                        </Card.Text>
                    </Card.Body>
                </Card>
            }
            {
                recycleChart && <Card
                    variant="outlined"
                    className='m-2'
                >
                    <Card.Body>
                        <Card.Title>Recycle Graph</Card.Title>
                        {/* <Card.Subtitle className="mb-2 text-muted">Recycle Graph</Card.Subtitle> */}
                        <Card.Text>
                            {/* <LineChart /> */}
                            <img
                                className="img-fluid"
                                src={recycleChart}
                                alt="Chart"
                            />
                        </Card.Text>
                    </Card.Body>
                </Card>
            }

            {/* <Card
                variant="outlined"
                className='m-2'
            >
                <Card.Body>
                    <Card.Title>Monthly Graph</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        <PieChart />
                    </Card.Text>
                </Card.Body>
            </Card> */}


        </div >
    )
}

export default Dashboard