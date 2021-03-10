import React from 'react';

function Footer(props) {

    return (
        <footer className="footer-component">
            <p>All information on this page is obtained from&nbsp;
                <a 
                    href={props.link}
                    target="_blank"
                    rel="noreferrer"><b>bchydro.com</b></a>.
            </p>
        </footer>
    )
}

export default Footer;