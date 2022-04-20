import React from 'react';
import './footer.css';


function Footer () {

    return (
        <div className="footer">
            <div className="footerContainer">
                <a href="https://github.com/bthalpin">
                    <img className="githubLogo" src="/images/github-logo.png" alt="GitHub Logo"></img> 
                </a>
                <a href="https://www.linkedin.com/in/brian-halpin/">
                    <img className="linkedInLogo" src="/images/linkedin-logo.png" alt="LinkedIn Logo"></img> 
                </a>
                <a href="https://stackoverflow.com/users/18813719/bthalpin">
                    <img className="stackOverflowLogo" src="/images/stackoverflow-logo.png" alt="Stack Overflow Logo"></img> 
                </a>
            </div>
        </div>
    )
}

export default Footer;