import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import "./FourthComponent.css";


const mainTitleAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            delay: 0.5,
            duration: 1
        }
    }
}

const phonePictureAnimate = {
    offscreen: { scale: 0.8, opacity: 0 },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1
        }
    }
}

const FourthComponent = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        centerMode: false,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        easing: '',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const BrowserDetect = useSelector(state => state.paybek.BrowserDetect);

    return (
        <div className="fourthcomponent_wrapper">
            <div className="fourthcomponent_columnwrapper">
                <div className="fourthcomponent_column">
                    <motion.div
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.2 }}
                        variants={mainTitleAnimate}>
                        <p className="fourthcomponent_bluetext"> Home • Top Up </p>
                        <p className="fourthcomponent_blacktext">
                        Top-up mobiles in
                        30+ countries
                        </p>
                    </motion.div>
                    <motion.div className="fourthcomponent_columnpictureposition"
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        viewport={{ once: true, amount: 0.2 }}
                        variants={phonePictureAnimate}>
                        <div className={BrowserDetect ? "fourthcomponent_column_picture_notsupported" : "fourthcomponent_column_picture"}></div>
                        <p className="fourthcomponent_picture_text">
                        Top-up 30+ countries
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className="carousel_wrapper">
                <Slider {...settings}>
                    <div className="mainitem"><div className="item picture_1"></div></div>
                    <div className="mainitem"><div className="item picture_2"></div></div>
                    <div className="mainitem"><div className="item picture_3"></div></div>
                    <div className="mainitem"><div className="item picture_4"></div></div>
                    <div className="mainitem"><div className="item picture_5"></div></div>
                    <div className="mainitem"><div className="item picture_6"></div></div>
                    <div className="mainitem"><div className="item picture_7"></div></div>
                </Slider>
            </div>
        </div >
    )
}

export default FourthComponent