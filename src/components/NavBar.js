import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img
                    width="30"
                    height="30"
                    className="d-inline-block align-bottom rounded-circle"
                    alt=""
                    src="https://s3-sa-east-1.amazonaws.com/icsmp/images/icsmp.PNG"
                />
                LTC-RX
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* Add your navigation links here */}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
