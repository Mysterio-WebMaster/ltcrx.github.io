import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="fixed-bottom main-footer mt-1 pt-1">
            {currentYear} LTC - RX
        </footer>
    );
}

export default Footer;
