import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import "./ThirdComponent.css";

const mainTitleAnimate = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1,
        }
    }
}

const leftTitleAnimate = {
    offscreen: { x: -50, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1,
        }
    }
}

const rightTitleAnimate = {
    offscreen: { x: 50, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1,
        }
    }
}

function ThirdComponent() {

    const BrowserDetect = useSelector(state => state.paybek.BrowserDetect);

    return (
        <div className="thirdcomponent_wrapper">
            <div className="thirdcomponent_innerwrapper">
                <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.15 }}
                >
                    <motion.p className="thirdcomponent_everyday"
                        variants={mainTitleAnimate}
                    >
                        Everyday essentials
                    </motion.p>
                    <motion.p className="thirdcomponent_heading"
                        variants={mainTitleAnimate}>
                        Make your family happy
                    </motion.p>
                    <motion.p className="thirdcomponent_description"
                        variants={mainTitleAnimate}>
                        Top-up anyone, instantly
                    </motion.p>
                </motion.div>
                <div className="thirdcomponent_columnwrapper">
                    <div className="thirdcomponent_firstcolumn">
                        <motion.div
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.2 }}
                            variants={leftTitleAnimate}>
                            <p className="thirdcomponent_bluetext"> Home • Top Up </p>
                            <p className="thirdcomponent_blacktext">
                                Top-up mobiles
                                at your fingertip
                            </p>
                        </motion.div>
                        <motion.div className={ BrowserDetect ? "thirdcomponent_firstcolumn_picture_notsupported" : "thirdcomponent_firstcolumn_picture"}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.2 }}
                            variants={mainTitleAnimate}></motion.div>
                    </div>
                    <div className="thirdcomponent_secondcolumn">
                        <motion.div className={BrowserDetect ? "thirdcomponent_secondcolumn_picture_notsupported" : "thirdcomponent_secondcolumn_picture"}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.2 }}
                            variants={mainTitleAnimate}></motion.div>
                        <motion.div initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.2 }}
                            variants={rightTitleAnimate}>
                            <p className="thirdcomponent_bluetext"> Home • Contacts </p>
                            <p className="thirdcomponent_blacktext">
                                Use your phonebook
                                to recharge your contacts
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ThirdComponent;