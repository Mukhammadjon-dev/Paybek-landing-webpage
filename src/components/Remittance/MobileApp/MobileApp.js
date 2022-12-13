import "./MobileApp.css"
import { motion } from "framer-motion"

import { openModal } from "../../../redux/actions/paybekActions";

const mainTitleAnimate = {
    offscreen: { y: 80, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1
        }
    }
}

function MobileApp() {
    return (
        <div className="mobileapp_wrapper">
            <div className="mobileapp_innerwrapper">
            <motion.p className="mobileapp_title"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.4 }}
                variants={mainTitleAnimate}>
                Paybek mobile app
            </motion.p>
            <motion.div className="mobileapp_firstrow"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                variants={mainTitleAnimate}>
                <div className="firstrow__leftside">
                    <p className="firstrow_leftside-title">
                        Fast way to transfer money
                    </p>
                    <p className="firstrow_leftside-description">
                        Send money in just 10 minutes
                    </p>

                    <button onClick={openModal} className="firstrow_leftside-button">
                        Download
                    </button>
                </div>
                <div className="firstrow_rightside">
                    <div className="firstrow_rightside-row">
                        <div className="firstrow_rightside-row-left">
                            <div>
                                <p className="firstrow_rightside-row-left-name">
                                    Azamat
                                </p>
                                <p className="firstrow_rightside-row-left-city">
                                    Moscow
                                </p>
                            </div>
                            <div>
                                <p className="firstrow_rightside-row-right-price">
                                    - 1000 RUB
                                </p>
                                <p className="firstrow_rightside-row-right-date">
                                    13 October
                                </p>
                            </div>
                        </div>
                        <div className="firstrow_rightside-row-picture1">
                        </div>
                    </div>
                    <div className="firstrow_rightside-row">
                        <div className="firstrow_rightside-row-picture2">
                        </div>
                        <div className="firstrow_rightside-row-left">
                            <div>
                                <p className="firstrow_rightside-row-left-name">
                                    Nigora
                                </p>
                                <p className="firstrow_rightside-row-left-city">
                                    Tashkent
                                </p>
                            </div>
                            <div>
                                <p className="firstrow_rightside-row-right-price">
                                    + 1000 USD
                                </p>
                                <p className="firstrow_rightside-row-right-date">
                                    13 October
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
            <motion.div className="mobileapp_secondrow"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.3 }}
                variants={mainTitleAnimate}>
                <div className="secondrow_part picture_position">
                    <p className="secondrow_part-title">
                        Send money and
                        <br /> get cashback
                    </p>
                    <p className="secondrow_part-defitination">
                        Send money in just 10 minutes
                    </p>
                    <div className="secondrow_part-speaker"></div>
                </div>
                <div className="secondrow_part picture_position">
                    <p className="secondrow_part-title">
                        Send money and
                        <br /> get cashback
                    </p>
                    <p className="secondrow_part-defitination">
                        Send money
                    </p>
                    <div className="secondrow_part-userprofile"></div>
                </div>
            </motion.div>
            <motion.div className="mobileapp_thirdrow"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                variants={mainTitleAnimate}>
                <div className="thirdrow_part">
                    <div className="part_minicard picture_position">
                        <p className="part_minicard-title">
                            Wide network
                            <br /> service
                        </p>
                        <p className="part_minicard-description">
                            50,000 points in 50 countries. Participants and partners of the service are banks, postal operators and large retail chains.
                        </p>
                        <div className="minicard_picture1"></div>
                    </div>
                    <div className="part_minicard picture_position">
                        <p className="part_minicard-title">
                            Multicurrency <br /> translations
                        </p>
                        <p className="part_minicard-description">
                            You choose the transfer currency that is convenient for you
                        </p>
                        <div className="minicard_picture2"></div>
                    </div>

                </div>
                <div className="thirdrow_part">
                    <div className="part_minicard picture_position">
                        <p className="part_minicard-title">
                            Convenient <br /> receiving
                        </p>
                        <p className="part_minicard-description">
                            The recipient chooses where to receive the money. When sending, you specify only the country, locality and mobile phone number.</p>
                        <div className="minicard_picture3"></div>
                    </div>
                    <div className="part_minicard picture_position">
                        <p className="part_minicard-title">
                            More in the<br /> application
                        </p>
                        <p className="part_minicard-description">
                            Subscription with a discount on transfers, KoronaCard payment card, the possibility of obtaining a loan
                        </p>
                        <div className="minicard_picture4"></div>
                    </div>

                </div>
            </motion.div>
            </div>
        </div>
    )
}
export default MobileApp;
