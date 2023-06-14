import React from "react";
import './footer.css';

const Footer = () =>{
    return(
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links-div">
                        <img src="alba-logo.svg" alt="" className="footer_img"></img>
                            <h4 className="footer_caption">Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote work.</h4>
                    </div>
                    <div className="sb__footer-links_div">
                        <h3>Website</h3>
                        <a href="#">
                            <p>About</p>
                        </a>
                        <a href="#">
                            <p>Service</p>
                        </a>
                        <a href="#">
                            <p>Portfolio</p>
                        </a>
                        <a href="#">
                            <p>Blog</p>
                        </a>
                        <a href="#">
                            <p>Career</p>
                        </a>
                    </div>

                    <div className="sb__footer-links_div">
                        <h3>Contact</h3>
                        <a>
                            <p>The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera, Kota Tangerang, Banten 15143</p>
                        </a>
                        <a>
                            <p>P: +62 81 1889 3383</p>
                        </a>
                        <a>
                            <p>E: info@albatech.id</p>
                        </a>
                    </div>
                </div>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            ©PT. Alba Digital Teknologi {new Date().getFullYear()} | All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
            </div>
    )

}

export default Footer