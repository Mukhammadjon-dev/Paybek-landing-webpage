import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer_innerwrapper">
                <div className="footer_bottom_menu">
                    <div className="footer_bottom_menupart">
                        <div className="footer_bottom_elements">
                            <div className="footer_bottom_paybeklogo">
                            </div>
                            <div className="footer_bottom_largetext">
                            Paybek - Send mobile recharge and top-up to any mobile phone number in over 30+ countries with just a few taps with the Paybek app.
                            </div>
                        </div>
                        <div className="footer_bottom_elements">
                            <div className="footer_bottom_title">
                                Legal
                            </div>
                            <div className="footer_bottom_text">
                                <NavLink to="/privacy" className="footer_routerbutton"><p>Privacy Policy</p></NavLink>
                                <NavLink to="/terms" className="footer_routerbutton">Terms & Conditions</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom_menupart">
                        <div className="footer_bottom_elements">
                            <div className="footer_bottom_title">
                                Address
                            </div>
                            <div className="footer_bottom_largetext address">
                                Location: 228 Park Ave S, PMB
                                61877, New York, New York 10003-1502
                                Email: admin@paybek.io
                            </div>
                        </div>
                        <div className="footer_bottom_elements">
                            <div className="footer_bottom_title">
                                Follow
                            </div>
                            <div className="footer_bottom_text">
                                <div className="footer_socialmedia-wrapper">
                                    <div className="instagram"></div>
                                    <a className="footer_socialmedia_text" href="https://www.instagram.com/paybekapp/" target={"_blank"} rel="noreferrer"> Instagram </a>
                                </div>
                                {/* <div className="footer_socialmedia-wrapper">
                                    <div className="facebook"></div>
                                    <p> Facebook </p>
                                </div>
                                <div className="footer_socialmedia-wrapper">
                                    <div className="telegram"></div>
                                    <p>Telegram . </p>
                                </div>
                                <div className="footer_socialmedia-wrapper">
                                    <div className="whatsapp"></div>
                                    <p> WhatsApp </p>
                                </div> */}
                            </div>
                        </div>

                    </div>
                </div>
                <p className="footer_bottom_copyright">
                    Copyright @2022 Paybek Inc. All rights reserved
                </p>
            </div>
        </div>
    )
}

export default Footer