import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg shadow-sm"
                style={{
                    backgroundColor: "#0d6efd",
                    padding: "14px 24px"
                }}
            >
                <div className="container-fluid">

                    <Link
                        className="navbar-brand fw-bold"
                        to="/"
                        style={{
                            color: "white",
                            fontSize: "28px",
                            letterSpacing: "1px"
                        }}
                    >
                        🎓 Student Portal
                    </Link>

                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">

                            <Link
                                className="nav-link mx-2"
                                to="/"
                                style={{
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    backgroundColor: "rgba(255,255,255,0.15)"
                                }}
                            >
                                ➕ Add Student
                            </Link>

                            <Link
                                className="nav-link mx-2"
                                to="/search"
                                style={{
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 16px"
                                }}
                            >
                                🔍 Search Student
                            </Link>

                            <Link
                                className="nav-link mx-2"
                                to="/delete"
                                style={{
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 16px"
                                }}
                            >
                                🗑 Delete Student
                            </Link>

                            <Link
                                className="nav-link mx-2"
                                to="/view"
                                style={{
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 16px"
                                }}
                            >
                                👨‍🎓 View Students
                            </Link>

                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavigationBar