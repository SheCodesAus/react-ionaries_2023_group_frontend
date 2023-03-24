import React from "react";
import { Link } from "react-router-dom";
import './footer.css';

function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="left-col">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                </div>
                <div className="socials-icons right-col">
                    <Link to={"#"}>
                        <svg width="40" height="40">
                            <use href="../../assets/social-media-icons.svg#icon-instagram"></use>
                        </svg>
                    </Link><Link to={"#"}>
                    </Link>
                    <Link to={"#"}><i className="fab fa-instagram"></i></Link>
                    <Link to={"#"}><i className="fab fa-linkedin"></i></Link>
                    <Link to={"#"}><i className="fab fa-youtube"></i></Link>
                </div>
            </div>
            <div className="bottom-row">
                <div className="column">
                <h4>About</h4>
                <ul>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                </ul>
                </div>
                <div className="column">
                <h4>Link 2</h4>
                <ul>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                </ul>
                </div>
                <div className="column">
                <h4>Link 3</h4>
                <ul>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                </ul>
                </div>
                <div className="column">
                <h4>Link 4</h4>
                <ul>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                </ul>
                </div>
                <div className="column">
                <h4>Get Help</h4>
                </div>
            </div>
        </footer>
    )
};

export default Footer;