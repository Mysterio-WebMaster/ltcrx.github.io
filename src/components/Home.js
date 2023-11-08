import React from 'react';

function Home() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                NavBar
            </nav>

            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-9">
                       Body
                    </div>
                </div>
            </div>

            <footer className="fixed-bottom main-footer mt-1 pt-1 text-light">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            2023 LTC - RX
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
