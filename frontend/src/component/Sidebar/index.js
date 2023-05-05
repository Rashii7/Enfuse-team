import React from 'react'
import { Accordion, Row, Form, Button } from 'react-bootstrap'

const Sidebar = ({ data, setData, submit }) => {
    const modeOfTransport = [
        "All Transport",
        'MetroBus',
        "Bus Excluding dublin Metro Bus",
        'Rail',
        "Recycle"
    ];



    const generateWeeks = () => {
        let weeks = [];
        for (let i = 1; i <= 52; i++) {
            weeks.push(i)
        }
        return weeks
    }

    const handleSelect = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        if (name === "filters") {
            if (value === "Recycle") {
                setData({ filters: "Recycle", weeks: "all" })
            } else {
                setData({ ...data, [name]: value })
            }
        } else {
            setData({ ...data, [name]: value })
        }

    }

    return (
        <aside>
            <Accordion className='border rounded'>
                <Accordion.Header>
                    Filters
                </Accordion.Header>
                <Accordion.Body>
                    <select
                        className="form-select form-select-m mb-3"
                        aria-label=".form-select-sm example"
                        onChange={handleSelect}
                        name="filters"
                        value={data.filters}
                    >
                        <option selected value="">Select Mode </option>
                        {
                            modeOfTransport.map((ele, index) => <option value={ele} key={index}>{ele}</option>)
                        }
                    </select>
                    {/* <select className="form-select form-select-m" aria-label=".form-select-sm example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> */}
                </Accordion.Body>
            </Accordion>
            {data.filters !== "Recycle" &&
                <Accordion className='border rounded'>
                    <Accordion.Header>
                        Date 2024
                    </Accordion.Header>
                    <Accordion.Body>
                        <select
                            className="form-select form-select-m mb-3"
                            aria-label=".form-select-sm example"
                            onChange={handleSelect}
                            name="weeks"
                            value={data.weeks}
                        >
                            <option selected value="" >Select week</option>
                            <option value="All">All</option>
                            {generateWeeks().map((ele, index) => <option value={ele}>week-{ele}</option>)}
                        </select>
                        {/* <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Select</Form.Label>
                            <Form.Control type="week" min="2024-W1" max="2024-W52" />
                        </Form.Group> */}
                    </Accordion.Body>
                </Accordion>
            }
            {/* <Accordion className='border rounded'>
                <Accordion.Header>
                    Category
                </Accordion.Header>
                <Accordion.Body>
                    <select className="form-select form-select-m mb-3" aria-label=".form-select-lg example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Accordion.Body>
            </Accordion> */}
            <Button className='m-4' onClick={() => submit()}>Apply</Button>
        </aside>
    )
}

export default Sidebar