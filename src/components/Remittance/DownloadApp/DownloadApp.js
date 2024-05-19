import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import './DownloadApp.css';

const downloadTitleAnimate = {
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

const downloadIconsAnimate = {
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

function DownloadApp() {

    const BrowserDetect = useSelector(state => state.paybek.BrowserDetect);

    return (
        <div className='downloadapp_wrapper'>
            <div className='downloadapp_innerwrapper'>
                <motion.p className='downloadapp_title'
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={downloadTitleAnimate}>
                    Download the app now
                </motion.p>
                <motion.div className='downloadapp_marketwrapper'
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.1 }}
                    variants={downloadIconsAnimate}>
                    <a className={BrowserDetect ? "downloadapp_appStore_notsupported" : "downloadapp_appStore"}
                        href="https://apps.apple.com/uz/app/paybek/id1605546414"
                        target="_blank"
                        rel="noreferrer">
                    </a>
                    <a className={BrowserDetect ? "downloadapp_googlePlay_notsupported": "downloadapp_googlePlay"}
                        href="https://play.google.com/store/apps/details?id=com.mobile.paybek"
                        target="_blank"
                        rel="noreferrer">
                    </a>
                </motion.div>
            </div>
        </div>
    )
} export default DownloadApp;