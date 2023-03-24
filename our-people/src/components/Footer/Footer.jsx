import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import instaIcon from '../../assets/instagram.svg';
import fbIcon from '../../assets/facebook.svg';
import linkedinIcon from '../../assets/linkedin.svg';
import twitterIcon from '../../assets/twitter.svg';
import youtubeIcon from '../../assets/youtube.svg';


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
                        <img src={fbIcon} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={instaIcon} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={linkedinIcon} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={twitterIcon} alt="" />
                    </Link>
                    <Link to={"#"}>
                        <img src={youtubeIcon} alt="" />
                    </Link>
                </div>
            </div>
            <div className="bottom-row">
                <div className="column">
                <Link to={"#"}><h4>About</h4></Link>
                <ul>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                </ul>
                </div>
                <div className="column">
                <Link to={"#"}><h4>Link 2</h4></Link>
                <ul>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                </ul>
                </div>
                <div className="column">
                <Link to={"#"}><h4>Link 3</h4></Link>
                <ul>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                    <li><Link to={"#"}>Loreum ipsum</Link></li>
                </ul>
                </div>
                <div className="column">
                <Link to={"#"}><h4>Link 4</h4></Link>
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