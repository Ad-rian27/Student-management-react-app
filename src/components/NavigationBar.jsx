import React from 'react'

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

                    <a
                        className="navbar-brand fw-bold"
                        href="/"
                        style={{
                            color: "white",
                            fontSize: "28px",
                            letterSpacing: "1px"
                        }}
                    >
                        🎓 Student Portal
                    </a>

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

                            <a
                                className="nav-link mx-2"
                                href="/"
                                style={{
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    backgroundColor: "rgba(255,255,255,0.15)"
                                }}
                            >
                                ➕ Add Student
                            </a>

                            <a
                                className="nav-link mx-2"
                                href="/search"
                                style={{
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 16px"
                                }}
                            >
                                🔍 Search Student
                            </a>

                            <a
                                className="nav-link mx-2"
                                href="/delete"
                                style={{
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 16px"
                                }}
                            >
                                🗑 Delete Student
                            </a>

                            <a
                                className="nav-link mx-2"
                                href="/view"
                                style={{
                                    color: "white",
                                    fontWeight: "600",
                                    padding: "8px 16px"
                                }}
                            >
                                👨‍🎓 View Students
                            </a>

                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default NavigationBar