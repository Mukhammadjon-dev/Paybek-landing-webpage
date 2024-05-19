import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import "./MoneyTransfer.css";

const leftSideAnimate = {
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


function MoneyTransfer() {

    const BrowserDetect = useSelector(state => state.paybek.BrowserDetect);

    return (
        <div className="moneytransfer_wrapper">
                    <div className="moneytransfer_innerwrapper">
            <motion.div className="moneytransfer_leftside"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                variants={leftSideAnimate}>
                <p className="leftside_title">
                    Money Transfers,
                    Which You Can
                    Trust
                </p>
                <p className="leftside_defination">
                    Low Fees For Money Transfers
                </p>
                <div className="leftside_marketwrapper">
                    <a className={BrowserDetect ? "leftside_appStore_notsupported" :"leftside_appStore"}
                        href="https://apps.apple.com/uz/app/paybek/id1605546414"
                        target="_blank">
                    </a>
                    <a className={BrowserDetect ? "leftside_googlePlay_notsupported" : "leftside_googlePlay"}
                        href="https://apps.apple.com/uz/app/paybek/id1605546414"
                        target="_blank">
                    </a>
                </div>
            </motion.div>
            {/* <motion.div className="moneytransfer_rightside"
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: true, amount: 0.5 }}
                variants={rightSideAnimate}>
                <CurrencyInput />
            </motion.div> */}
        </div>
        </div>
    )
}

export default MoneyTransfer;