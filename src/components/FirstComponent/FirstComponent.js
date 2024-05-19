import { useSelector } from "react-redux";
import { motion } from "framer-motion";


import "./FirstComponent.css";
import { openModal } from "../../redux/actions/paybekActions";

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

const subTitleAnimate = {
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

const rightSideAnimate = {
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

function FirstComponent() {

    const BrowserDetect = useSelector(state => state.paybek.BrowserDetect);

    return (
        <div className="firstcomponent_wrapper">
           
            <div className="title_box">
                <motion.p className="title_box_headline"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={mainTitleAnimate}>
                    The Fastest Way To Send
                    Top-Up Worldwide
                </motion.p>
                <motion.p className="title_box_description"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={subTitleAnimate}>
                    We deliver mobile Top-Up to millions
                    worldwide.
                </motion.p>
                <motion.button onClick={openModal} className="title_box_ctabutton"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.2 }}
                    variants={subTitleAnimate}>
                    Download Now
                </motion.button>
            </div>
            <motion.div className="firstcomponent_picturewrapper"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.2 }}
                variants={rightSideAnimate}>
               {/* <div className={safari === 'ios' && versionDetect ? "firstcomponent_IPhone_1 header-background-iphone_not_support" : "firstcomponent_IPhone_1  header-background-iphone_support "}></div> */}
                
               <div className={BrowserDetect ? "firstcomponent_IPhone_1_notsupported" : "firstcomponent_IPhone_1" }></div>
                
                <div className={BrowserDetect ? "firstcomponent_IPhone_2_notsupported" : "firstcomponent_IPhone_2"}></div>
            </motion.div>
        </div >
    )
}
export default FirstComponent;