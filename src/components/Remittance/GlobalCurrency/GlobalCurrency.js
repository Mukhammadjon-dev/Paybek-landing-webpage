import Slider from "react-slick";
import "./GlobalCurrency.css";
import { motion } from "framer-motion";

const mainTitleAnimate = {
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

function GlobalCurrency() {

    const firstCarousel = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 5000,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        // variableHeight: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 850,
                settings: {
                    speed: 3000,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    speed: 2500,
                    autoplay: true,
                    autoplaySpeed: 2500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
        ]
    };

    const secondCarousel = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rtl: true,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
        ]

    }

    return (
        <div className="globalcurrency_wrapper">
            <div className="globalcurrency_innerwrapper">
                <motion.div className="globalcurrency_leftside"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.4 }}
                    variants={mainTitleAnimate}>
                    <p className="leftside-title">
                        Transfer money • Paybek
                    </p>
                    <p className="leftside-description">
                        We are jumping into a "global currency finance platform" that provides money transfer and settlement services
                    </p>
                </motion.div>
                <div className="globalcurrency_rightside">
                    <Slider {...firstCarousel} className="rightside_firstslider">
                        <div className="carousel_item_wrapper"><div className="carousel_item carousel_picture1"> </div></div>
                        <div className="carousel_item_wrapper"><div className="carousel_item carousel_picture2"> </div></div>
                        <div className="carousel_item_wrapper"><div className="carousel_item carousel_picture3"> </div></div>
                        <div className="carousel_item_wrapper"><div className="carousel_item carousel_picture4"> </div></div>
                        <div className="carousel_item_wrapper"><div className="carousel_item carousel_picture1"> </div></div>
                        <div className="carousel_item_wrapper"><div className="carousel_item carousel_picture2"> </div></div>
                        <div className="carousel_item_wrapper"><div className="carousel_item carousel_picture3"> </div></div>
                        <div className="carousel_item_wrapper"><div className="carousel_item carousel_picture4"> </div></div>

                    </Slider>
                    <Slider {...secondCarousel} className="rightside_secondslider">
                        <div className="carousel_item carousel_picture4"> </div>
                        <div className="carousel_item carousel_picture5"> </div>
                        <div className="carousel_item carousel_picture6"> </div>
                        <div className="carousel_item carousel_picture4"> </div>
                        <div className="carousel_item carousel_picture5"> </div>
                        <div className="carousel_item carousel_picture6"> </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default GlobalCurrency;