import "./TryPayBack.css";
import { motion } from "framer-motion";

import { openModal } from "../../redux/actions/paybekActions";

const mainTitleAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1
        }
    }
}

function TryPayBack() {
    return (
        <div>
            <div className="payback__wrapper">
                <motion.div className="payback__innerwrapper"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}>
                    <motion.p className="payback__description"
                        variants={mainTitleAnimate}>
                        Top-up anytime, anywhere
                    </motion.p>
                    <motion.button onClick={openModal} className="payback__button"
                        variants={mainTitleAnimate}>
                        Try Paybek now
                    </motion.button>
                </motion.div>
            </div>
        </div >
    )
}
export default TryPayBack;