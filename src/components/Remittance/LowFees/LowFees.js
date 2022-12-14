import "./LowFees.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const leftSideAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1
        }
    }
}

const rightSideAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1
        }
    }
}

function LowFees() {
    const BrowserDetect = useSelector(state => state.paybek.BrowserDetect);

    return (
        <div className="lowfees_wrapper">
            <div className="lowfees_innerwrapper">
            <motion.div className="lowfees_leftside"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.2 }}>
                <motion.p className="lowfees_leftside__title"
                    variants={leftSideAnimate}>Transfer money • Paybek</motion.p>
                <motion.p className="lowfees_leftside__headline"
                    variants={leftSideAnimate}>
                    low fees, and
                    no hidden fees
                </motion.p>
                <motion.p className="lowfees_leftside__description"
                    variants={leftSideAnimate}>
                    The amount you see is the total −
                    the cost of sending does not change during the transfer process.
                </motion.p>
            </motion.div>
            <motion.div className="lowfees_rightside"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                variants={rightSideAnimate}>
                    <div className={BrowserDetect ? "lowfees_rightside_picture_notsupported" : "lowfees_rightside__picture"}></div>
            </motion.div>
        </div>
        </div>
    )
}
export default LowFees;