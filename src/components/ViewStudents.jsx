import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewStudents = () => {

    const [data, changeData] = useState([
        { name: "Aarav Sharma", admn: "ADM1001", class: 10, avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        { name: "Diya Nair", admn: "ADM1002", class: 11, avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Arjun Menon", admn: "ADM1003", class: 9, avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
        { name: "Ananya Joseph", admn: "ADM1004", class: 12, avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
        { name: "Rohan Patel", admn: "ADM1005", class: 7, avatar: "https://randomuser.me/api/portraits/men/5.jpg" }
    ]);

    return (
        <div>
            <NavigationBar />

            <div className="container mt-4">
                <div className="row g-3">

                    {data.map((value, index) => (
                        <div
                            key={value.admn}
                            className="col-12 col-sm-6 col-md-6 col-lg-4"
                        >
                            <div className="card h-100 shadow">

                                <img
                                    src={value.avatar}
                                    height="300px"
                                    className="card-img-top"
                                    alt={value.name}
                                />

                                <div className="card-body">
                                    <h6 className="card-title">
                                        Admission No: {value.admn}
                                    </h6>

                                    <h6 className="card-title">
                                        Name: {value.name}
                                    </h6>

                                    <h6 className="card-title">
                                        Class: {value.class}
                                    </h6>

                                    <a href="#" className="btn btn-success">
                                        Select
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ViewStudents