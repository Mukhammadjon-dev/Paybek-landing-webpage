import "./SecondComponent.css";
import { motion } from "framer-motion"

const mainTitleAnimate = {
    offscreen: { y: -60, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1
        }
    }
}

const centerPictureAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1
        }
    }
}

const leftCardAnimate = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "linear",
            duration: 1
        }
    }
}

const rightCardAnimate = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
        x: 0,
        opacity: 1,
        transition: {
            type: "linear",
            duration: 1
        }
    }
}

function SecondComponent() {
    return (
        <div className="secondcomponent_wrapper">
            <div className="secondcomponent_innerwrapper">
                <motion.div
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.2 }}>
                    <motion.p className="secondcomponent_everyday"
                        variants={mainTitleAnimate}>
                        Everyday essentials
                    </motion.p>
                    <motion.p className="secondcomponent_heading"
                        variants={mainTitleAnimate}>
                        Send less get more
                    </motion.p>
                    <motion.p className="secondcomponent_description"
                        variants={mainTitleAnimate}>
                        We provide the best rates
                    </motion.p>
                </motion.div>
                <div>
                    <motion.div className="secondcomponent_picturewrapper"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.2 }}
                        variants={centerPictureAnimate}>
                        <div className="secondcomponent_familypicture"></div>
                        <div className="secondcomponent_picturetext_wrapper">
                            <p className="secondcomponent_picturetext_headline">
                            Top Up Your Family
                            </p>
                        </div>
                    </motion.div>
                </div>
                <div className="secondcomponent_doublecard_wrapper">
                    <motion.div className="secondcomponent_firstcard"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.2 }}
                        variants={leftCardAnimate}>
                        <motion.p className="secondcomponent_doublecard_text"
                        whileHover={{
                            scale: (1.1, 1.1),
                        }}
                        transition={{type: "tween", stiffnes:100, duration: 1}}
                        >
                            Pay with multiple cards
                        </motion.p>
                        <motion.div className="secondcomponent_cardsrow"
                           whileHover={{
                            scale: (1.05, 1.05),
                            }}
                            transition={{type: "spring", duration: 1}}>
                            <div className="cardrows_card">
                                <div className="cardrows_card_picture1"></div>
                            </div>
                            <div className="cardrows_card">
                                <div className="cardrows_card_picture2"></div>
                            </div>
                            <div className="cardrows_card">
                                <div className="cardrows_card_picture3"></div>
                            </div>
                            <div></div>
                        </motion.div>
                        <motion.div className="secondcomponent_cardsrow"
                        whileHover={{
                            scale: (1.05, 1.05),
                        }}
                        transition={{type: "spring", duration: 1}}>
                            <div></div>
                            <div className="cardrows_card">
                                <div className="cardrows_card_picture4"></div>
                            </div>
                            <div className="cardrows_card">
                                <div className="cardrows_card_picture5"></div>
                            </div>
                            <div className="cardrows_card">
                                <div className="cardrows_card_picture6"></div>
                            </div>
                        </motion.div>
                        <motion.div
                        whileHover={{
                            scale: (1.1, 1.1),
                        }}
                        transition={{type: "spring", duration: 1}}>
                        <div className="secondcomponent_mastercard">
                        </div>
                        </motion.div>
                    </motion.div>
                    <motion.div className="secondcomponent_secondcard"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.2 }}
                        variants={rightCardAnimate}>
                        <motion.p className="secondcomponent_doublecard_text"
                        whileHover={{
                            scale: (1.1, 1.1),
                        }}
                        transition={{type: "tween", stiffnes:100, duration: 1}}
                        >
                            Get bonuses for inviting your friends
                        </motion.p>
                        <motion.div className="secondcomponent_userwrapper"
                        whileHover={{
                            scale: (1.1, 1.1),
                        }}
                        transition={{type: "spring", duration: 1}}>
                            <div className="secondcomponent_userlogo">
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default SecondComponent;