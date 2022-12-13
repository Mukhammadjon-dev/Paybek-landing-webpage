import Footer from "../Footer";
import TryPayBack from "../TryPayBack";
import { motion } from "framer-motion";

import "./PrivacyPolicy.css";

const pictureAnimate = {
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

const textAnimate = {
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

function PrivacyPolicy() {
    return (
        <div className="privacypolicy_wrapper">
            <div>
                <motion.div className="privacypolicy_picture"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={pictureAnimate}>
                    <div className="policy_box">
                        <p className="policy-box-title">
                            Privacy Policy
                        </p>
                        <p className="policy-box-description">
                            The Paybek inc.
                        </p>
                    </div>
                </motion.div>
                <div className="privacypolicy_innerwrapper">
                <motion.div className="privacypolicy_text"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={textAnimate}>
                    <h3>Privacy Policy</h3>
                    <p>
                        We, Paybek team, understand that you have an interest in how we gather, assemble and use your personal data, and protection of such information is vital for you. Privacy matters are important for us, as well, and we do care about it. Gaining and keeping the trust of our customers is our main priority, thus we duly obey data protection laws and do our best to fulfill our obligations.
                    </p>
                    <p>
                        The following paragraphs of this notice outline the way we control usage of your information. You can make sure that your data will be used only in the manner and for the purposes mentioned in this notice, that’s why reading them is highly recommended.
                    </p>
                    <p>
                        Please note: you may object the processing of your personal information if it is done for our legitimate interests or for the sake of direct marketing.
                    </p>

                    <h4>
                        1.About us
                    </h4>
                    <p>
                        www.paybek.io , and any current or future Paybek mobile applications, (the “Applications”) are operated by, and services are provided by PAYBEK, INC. (“We”, “Paybek” or “us”). We are registered in the state of Delaware with registration number 4389093 and registered business office at 228 Park Ave S, PMB 61877, New York, New York 10003-1502, the USA. Our VAT number id 36-4976793.
                    </p>
                    <p>
                        All correspondence in relation to any Paybek company should be sent to 228 Park Ave S, PMB 61877, New York, New York 10003-1502.
                    </p>
                    <h4>
                        2.Contacting Paybek
                    </h4>
                    <p>
                        Our customer service is ready to help you with your questions and complaints regarding this note. Feel free contacting us through any of the following options:
                    </p>
                    <ul>
                        <li>
                            Email: admin@paybek.io
                        </li>
                    </ul>
                    <h4>
                        3.Scope of this notice
                    </h4>
                    <p>
                        We collect several types of Personal Data for various purposes related to providing you or receiving the Services and improving their quality:
                    </p>
                    <ul>
                        <li>
                            Contact Details: telephone number;
                        </li>
                        <li>
                            Payment Details: cardholder name; credit or debit card details (however, we only retain certain parts); chargeback information; billing address;
                        </li>
                        <li>
                            Transaction Details:transaction amount and currency;
                        </li>
                        <li>
                            Electronic Identifying Details:IP address; SMS content; cookies; pixels; activity logs (e.g. user session recordings); online identifiers; device identifiers (e.g. the mobile device and/or the internet browser that you use) and geolocation data;
                        </li>
                        <li>
                            Correspondence and Complaints: any correspondence that you choose to send to Paybek (including complaints); any information you provide to our customer care team; any information you publish about Paybek (including on the app stores);
                        </li>
                        <li>
                            Transaction History: details of the transactions (including date and time and relevant service provider) you carry out on, and your visits to, the Applications.
                        </li>
                    </ul>
                    <p>
                        We may collect information such as names, phone numbers, email addresses, and social media identifiers if you choose to provide the mobile applications access to contact information through your device. We gather your information to assist us provide the most quality Services to your family and friends, as well as for the other purposes indicated below.
                    </p>

                    <h4>
                        5.How your personal data is collected?
                    </h4>
                    <p>
                        Once you register for or use our Services, you submit your personal information. We may also obtain information about you from third parties, from your usage of our applications, your communications with our customer service staff, and the transactions you conduct on our apps. Your device and/or browser may automatically reveal particular information (like type of device, operating system, browser type, browser settings, IP address, language settings, dates and times of connection to an Application, or other technical communications information) when you visit our Applications, some of which may be personal data.
                    </p>
                    <h4>
                        6.Automated processing of your personal data
                    </h4>
                    <p>
                        In order to comply with our legal requirements to detect and prevent fraud, dishonesty, and other crimes, we employ automated statistical analysis of the personal data we gather about you. We may employ automated processing to detect transactions that may be subject to international sanctions or to screen for suspicious transactions.
                    </p>
                    <p>
                        You have the right to express your opinion and have those judgments reviewed by a member of our staff when we make solely automated decisions that affect you in a legal or significant way.
                    </p>
                    <h4>
                        7.Refusal of sharing personal data
                    </h4>
                    <p>
                        We may not be able to deliver the Services to you if you do not provide us with your personal data or if you disagree to the use of certain personal data. When we ask for information that is a contractual necessity or obligated to conform with our legal duties, we will notify you.
                    </p>
                    <h4>
                        8.Disclose your personal data
                    </h4>
                    <ul>
                        <li>you and, if you want it, any third party you request we share it with;</li>
                        <li>mobile operators and other service providers (directly or through third parties);</li>
                        <li>providers of anti-fraud services;</li>
                        <li>
                            on request or as needed, legal, regulatory, or similar authorities, including for the purpose of reporting any actual or suspected violation of any law or regulation;
                        </li>
                        <li>
                            law enforcement officials in response to legitimate requests for assistance in the prevention, detection, investigation, or prosecution of a criminal offense;
                        </li>
                        <li>
                            third party payment processors;
                        </li>
                        <li>
                            direct marketing service providers;
                        </li>
                        <li>
                            data analytics service providers (e.g. Google Analytics);
                        </li>
                        <li>
                            third party service providers used for the delivery of some aspects of the Services (e.g. SMS delivery, email delivery, web notifications, app notifications and phone number lookup);
                        </li>
                        <li>
                            hosting infrastructure companies based in the EEA;
                        </li>
                        <li>
                            legal and financial advisors, and auditors;
                        </li>
                        <li>
                            potential purchasers or bidders.
                        </li>
                    </ul>
                    <p>
                        Furthermore, if recipients of the Services seek additional services from you, they may be able to see your pseudonymized contact information. If you choose to opt-out of receiving such Service requests, you may do so at the time the request is made.
                    </p>
                    <p>
                        Our Applications may include connections to third-party material or interface with third-party services with which you have already interacted (e.g., Facebook and Google) (e.g service provider content). Please be aware that Paybek is not responsible for such services or content, nor for the privacy policies associated with them. Before using any third-party services or content, we urge that you read their privacy policies.
                    </p>
                    <h4>
                        9.What if Paybek is bought by another company?
                    </h4>
                    <p>
                        In the case of a sale, merger, liquidation, receivership, or transfer of all or substantially all of our company's assets, we retain the right to transfer information (including your personal data) to a third party. The third party may only use your personal data for the purposes for which you originally submitted it to us, as well as, as described in this privacy notice. In the event of a transfer, you will be notified.
                    </p>
                    <h4>
                        10.Data Security
                    </h4>
                    <p>
                        In accordance with data protection laws, we have implemented appropriate technical and organizational security measures to protect your personal data from accidental or unlawful destruction, loss, alteration, unauthorized disclosure, unauthorized access, and other unlawful or unauthorized forms of Processing.
                    </p>
                    <p>
                        You are accountable for maintaining the security of any personal data you send to us.
                    </p>
                    <h4>
                        11.How long do we keep your personal data?
                    </h4>
                    <p>
                        We will only store your personal data for as long as it is required to fulfill the above-mentioned purposes and to comply with any legal responsibilities.
                    </p>
                    <ul>
                        <li>
                            to maintain an ongoing relationship with you (e.g., to provide our Services to you or where you are lawfully included in our direct marketing lists and have not unsubscribed);
                        </li>
                        <li>
                            in connection with the lawful purposes set out in this policy, or where we have a valid legal basis; or
                        </li>
                        <li>
                            to adhere to any applicable legal limitation period, as well as a fair amount of time after that.
                        </li>
                    </ul>
                    <p>
                        When the periods mentioned above will come to an end, we will either:
                    </p>
                    <ul>
                        <li>
                            permanently delete or destroy the relevant personal data;
                        </li>
                        <li>
                            archive your personal data so that it is no longer usable; or
                        </li>
                        <li>
                            anonymize the relevant personal data once the above periods have ended.
                        </li>
                    </ul>
                    <h4>12.Where does Paybek hold your personal data?</h4>
                    <p>
                        We store your personal data on secure servers hosted by Amazon Web Services.
                    </p>
                    <h4>
                        13.Will Paybek use your personal data for direct marketing purposes?
                    </h4>
                    <p>
                        We will use your personal data to send you information by SMS, email, or app alerts about our products and services that may be of interest to you or similar products and services to those you have previously purchased from Paybek with your consent.
                    </p>
                    <h4>
                        14.Can you opt-out/unsubscribe from direct marketing?
                    </h4>
                    <p>
                        At the time of registration, you will be given the option of opting in. You can also opt-out at any time, for free, by: I using the unsubscribe function in the SMS or email that Paybek sends you; (ii) following the procedures in the guide accessible at admin@paybek.io; or (iii) sending an email to admin@paybek.io for push notifications.
                    </p>
                    <p>
                        Paybek does not sell or share your personal information with subsidiaries or third parties for the purpose of marketing or profit.
                    </p>
                    <h4>
                        15.Your Rights
                    </h4>
                    <p>
                        By submitting a written request to us, you have the right to acquire a copy of the personal data we hold about you, as well as the right to have any mistakes corrected. You also have the right to request the erasure, limitation, portability, or objection to the processing of your personal data, as well as the right not to be subjected to a decision based on automated processing, such as profiling. Any changes to your personal data should be reported to us. Any requests made under this section should be sent to the address shown below. We shall respond to your request as quickly as possible, and no later than one month after receipt of your request, in writing or orally if asked.
                    </p>
                    <p>
                        If we rely on your consent to handle your data, you have the right to withdraw your consent at any time. We would no longer be able to carry out the processing we were doing with your consent after that moment. Any processing we did before you revoked your consent would continue to be legitimate. For the most part, we do not rely on consent to process personal data.
                    </p>
                    <p>
                        Please contact us at admin@paybek.io or at Paybek, 228 Park Ave S, PMB 61877, New York, New York 10003-1502 to exercise any of your rights under this section.
                    </p>
                    <h4>
                        16.Changes to this privacy notice
                    </h4>
                    <p>
                        This privacy notice may be updated from time to time. If we make any significant changes, we will notify you by posting a notice on our Applications and/or emailing you a notification, as appropriate.
                    </p>
                    <p>
                        Updated: November 6, 2021
                    </p>
                </motion.div>
                </div>

            </div>
            <TryPayBack />
            <Footer />
        </div >
    )
}
export default PrivacyPolicy;