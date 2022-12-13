import Footer from "../Footer";
import TryPayBack from "../TryPayBack";
import { motion } from "framer-motion";

import "./TermsAndConditions.css";

const pictureAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1.5
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
            duration: 1.5
        }
    }
}

function TermsAndConditions() {
    return (
        <div className="terms_wrapper">
            <div>
                <motion.div className="terms_picture"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={pictureAnimate}>
                    <div className="terms_box">
                        <p className="terms-box-title">
                            Terms & Conditions
                        </p>
                        <p className="terms-box-description">
                            The Paybek inc.
                        </p>
                    </div>
                </motion.div>
                <motion.div className="terms_text"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    variants={textAnimate}>
                    <h3>
                        Terms & Conditions
                    </h3>
                    <p>
                        Before using or accessing the Services or Applications provided by Paybek team, please, read these Terms carefully. For your reference in future, you should print a copy of these Terms.
                    </p>
                    <p>
                        In case of disagreement with any of the terms and conditions of this Agreement, or any subsequent modifications to them, or if you are dissatisfied in any way with your use of the Applications or Services, you may: a) stop using the Applications and/or Services; and b) close your virtual account ("Account") by notifying us in writing by email or otherwise (see contact information below). Except for a) and b) described above, you have no other legal or non-legal options.
                    </p>
                    <h4>
                        1.Introduction
                    </h4>
                    <p>
                        Paybek's provision of services intended to facilitate the acquisition of prepaid mobile data ("Top-up") (the "Products") relating to services to be made available by mobile telephone operators and other third parties via the Paybek mobile application ("Services"), and acceptance of these terms and conditions ("Agreement" or "Terms") governs your use of any associated Paybek mobile applications, present or future (collectively, the "Applications"), as well as your access to the Services. You expressly agree to be bound by these Terms by using the Applications.
                    </p>
                    <h4>
                        2.Information About
                    </h4>
                    <p>
                        Us www.paybek.io, and any current or future Paybek mobile applications, (the “Applications”) are operated by, and services are provided by PAYBEK, INC. (“We”, “Paybek” or “us”). We are registered in the state of Delaware with registration number 4389093 and registered business office at 228 Park Ave S, PMB 61877, New York, New York 10003-1502, the USA. Our VAT number id 36-4976793.
                    </p>
                    <p>
                        Paybek can be reached at the contact information listed in Section 24.
                    </p>
                    <p>
                        All correspondence in relation to any Paybek company should be sent to 228 Park Ave S, PMB 61877, New York, New York 10003-1502.
                    </p>
                    <h3>
                        3.Registration
                    </h3>
                    <p>
                        You may choose to create an Account to use the Services. You can do so by completing the necessary information on the relevant Application's registration screen. You will be provided with an Account once you have completed the signup process. You may file personal information, such as your phone number, as well as financial information, while enrolling.
                    </p>
                    <p>
                        As a customer, any information you submit will be managed in accordance with our Privacy Policy.
                    </p>
                    <p>
                        You accept to provide genuine, accurate, and complete information during registration. You bear responsibility to report us about any changes to that information instantly. You are personally accountable for all activities in connection with your Account while using your phone number, and/or password ("Login Details"), including unauthorized use of your Account or any payment method, such as debit or credit card. You must not directly or indirectly reveal your password to any third party. It is entirely your duty to keep your password safe. If you become aware of any unauthorized use of your Login Details, you must immediately inform us using the contact information listed in Section 24 below.
                    </p>
                    <p>
                        Login details can only be used by one person at a time and is not transferable.
                    </p>
                    <p>
                        In addition, please, keep in mind that your Login Information can be used across all applications. The usage of Services on any of the Applications will be governed by these Terms.
                    </p>
                    <p>
                        Paybek may require you to provide the consent of your parent or guardian, that was reviewed and approved, if you did not reach 16 years old. In a case where you are an employee or a representator of a company, or any other entity, you must be given an authority to agree to these Terms and Conditions on behalf of your company or entity.
                    </p>
                    <h4>
                        4.Your Data
                    </h4>
                    <p>
                        With respect to relevant data in our possession belonging to you, we, Paybek team, shall comply with all of our responsibilities under applicable data protection law.
                    </p>
                    <p>
                        Paybek will comply with all of its obligations under applicable data protection law with regard to relevant data in its possession relating to you. We shall treat data acquired as part of the Services in conformity with our Privacy Policy.These documents outline how we collect, use, and safeguard the information you supply us. We strongly advise you to thoroughly read the Privacy Policy.
                    </p>
                    <h4>
                        5.Use of Services and Cost
                    </h4>
                    <p>
                        You guarantee to use the Applications and Services purely in compliance with the Terms and to obey all applicable laws and regulations set forth in these Terms.
                    </p>
                    <p>
                        Using the Apps or Services to: (1) violate any law, statute, rule, or regulation; or (ii) engage in any illegal, fraudulent, abusive, violent, immoral, or obscene activity; or (iii) encourage, promote, facilitate, or instruct others to engage in any illegal, fraudulent, abusive, hostile, immoral, or obscene activity is prohibited. Paybek will only provide the Services in relation to the cell phone carriers and other service providers listed on the Apps (which may be subject to change and available).
                    </p>
                    <p>
                        If your purchased top-up is to be received in a currency other than the currency of the payment method you selected, the amount of the payment will depend on the applicable FX rate on the date of payment and an airtime conversion fee will apply. In addition, any Product you acquire through the Applications may be subject to a secure online transaction fee. An extra message cost may apply if you want to send an optional SMS to the Top-up recipient.
                    </p>
                    <p>
                        Paybek will deliver services after you have made a valid payment. There may be rare cases of a short delay prior to the authorized third party delivers the Product to the receiver. Once your transaction has been successfully completed, we will send you a confirmation SMS including detailed information about the Services if contact information has been provided. You understand and consent that, in the case of a deposit, Paybek is operating only with your permission to transmit the deposit, and the relevant third party is personally accountable to you and the receiver, as appropriate, for providing the services relevant to the deposit. A recharge that has been sent cannot be returned or deleted because it can be used instantly. Paybek requests you to check, where appropriate, that the recipient information you submitted is correct in order to avoid delivering Products to the wrong phone number. You recognize that after Paybek has completed the Services, you will no longer be able to cancel them.
                    </p>
                    <h4>
                        6.Your instructions
                    </h4>
                    <p>
                        Paybek's instructions through the Apps must be accurate, thorough, and truthful. The cell phone number tied with the permanent account to which any deposits will be credited, in particular, must be correctly recognized. You must guarantee that any verification instructions you send are correct, accurate, and true. All instructions that have been confirmed are final and binding on you. Paybek and/or its service providers are not liable or responsible for the repercussions of you supplying false, inaccurate, or erroneous information. Any repercussions arising from your failure to submit correct, accurate, and truthful information, or from your failure to amend such inaccurate information prior to final confirmation, are completely your responsibility.
                    </p>
                    <h4>
                        7.Transactions via Chosen Payment Method
                    </h4>
                    <p>
                        You can use Visa, MasterCard, or any other payment method offered on the Applications at the time of purchase. A valid payment address and a valid issuing bank or other payment service provider are required for any credit card, debit card, or other payment method used on the Applications.
                    </p>
                    <p>
                        All correspondence in relation to any Paybek company should be sent to 228 Park Ave S, PMB 61877, New York, New York 10003-1502.
                    </p>
                    <p>
                        After receiving a proper and complete request from you for the Services, Paybek will charge you for the payment method you provide and will send an electronic request to the appropriate third-party provider (such as a cell phone carrier) to provide the Products in the amount you designate.
                    </p>
                    <p>
                        You permit Paybek to carry out any charging instructions you submit through the Apps, using the payment method you specified and transmitted using your password and/or any other authentication/identity verification process you may require for use with the Apps.
                    </p>
                    <p>
                        Paybek is not obligated to take any supplementary authentication or identity verification measures beyond those required by applicable law or that Paybek considers necessary and sufficient to safeguard against fraud and money laundering, as well as to maintain the security and appropriate use of the Applications in compliance with any internal policies. You are solely responsible for any and all charges incurred following successful authentication or identity verification.
                    </p>
                    <p>
                        Paybek assumes liability for the non-performance or improper performance of Services purchased through the Apps, provided that you comply with these Terms, properly use the Apps in accordance with Paybek's instructions, and there is no misrepresentation, fraud or negligence on your part. Such liability, if any, shall be strictly limited to the amount of the unperformed or defective Services.
                    </p>
                    <h4>
                        8.Promotions/Events
                    </h4>
                    <p>
                        Paybek or its partner service providers may run promotions/events on the Applications from time to time. Additional terms and conditions will apply to these promotions, and these terms and conditions (including the promotion's closing date) will be clearly disclosed on the Applications. Paybek is not accountable for promotions run by partner service providers, and you should contact the relevant service provider directly before taking advantage of or relying on the terms and conditions of any such promotion. You must use any offer in good faith and not abuse any promotional code that has been given to you.
                    </p>
                    <h4>
                        9.Your obligations
                    </h4>

                    <p>
                        You are solely responsible for providing and maintaining the equipment and devices required to access the Applications. If you use a mobile device to use the Applications, your mobile service provider may charge you for internet access on your device.
                    </p>
                    <p>
                        The mobile applications are available for free download from app stores. You are solely responsible for making sure that any further upgrades to the mobile applications are downloaded from the appropriate app store.
                    </p>
                    <p>
                        Paybek maintains whatever authority is needed to alter gear and programming prerequisites as is fundamental for it to proceed or work on the arrangement of Services through the Applications.
                    </p>
                    <h4>
                        10.Third party services
                    </h4>
                    <p>
                        Paybek will not warrant for the accuracy or completeness of the information, nor for the suitability or quality of third-party products or services. Before relying on third-party information or engaging into a transaction with respect to third-party items and services indicated in the Appendices, you should check directly with the respective third-party supplier. All parts of a Service Provider's Product are exclusively their responsibility.
                    </p>
                    <h4>
                        11.Withdrawal of services
                    </h4>
                    <p>
                        These Terms apply to all Products purchased via the Applications. Paybek reserves the right to suspend or terminate your Account, as well as your usage of the Applications and/or Services supplied via it:
                    </p>
                    <p>
                        (i) with reasonable notice to you;
                    </p>
                    <p>
                        (ii) immediately upon your breach of these Terms, or where Paybek reasonably believes you are in breach of these Terms;
                    </p>
                    <p>
                        These Terms have no minimum or maximum duration and will bind you for as long as you have a Paybek Account. You may shut your Account and/or stop your use of the Apps or Services at any time without cause by giving Paybek writing notice of termination, but this will not affect your liability for any unpaid amount on any Account or otherwise before to the termination date.
                    </p>
                    <h4>
                        12.Your Contribution
                    </h4>
                    <p>
                        You agree that if you send Paybek any feedback, suggestions, ideas, or other materials in connection with or via the Applications or Services provided, Paybek may use, reproduce, publish, modify, adapt, and transmit the communication to others free of charge and without restriction, subject to Paybek’s obligations as set forth in the Privacy Policy.
                    </p>
                    <h4>
                        13.Variations of the terms
                    </h4>
                    <p>
                        For business or legal reasons, Paybek maintains the right to change, amend, or vary these Terms. Any such variation will take effect and be binding on you fourteen (14) days after notice of the variation is communicated to you through email or a message on the Applications. You may cease using the Applications or Services and/or close your Account at any time for any reason by notifying Paybek in writing, but this will not affect your liability for any outstanding indebtedness on any Account or otherwise prior to the date of termination.
                    </p>
                    <h4>
                        14.Notices
                    </h4>
                    <p>
                        Save where expressly provided, any notice required to be given by you to Paybek in connection with these Terms must be given in writing and sent by email to admin@paybek.io or by post to 228 Park Ave S, PMB 61877, New York, New York 10003-1502.
                    </p>
                    <h4>
                        15.Intellectual
                    </h4>
                    <p>
                        Property Rights For the aims of this Agreement, "Intellectual Property Rights" include all copyrights, patents, registered and unregistered trademarks, registered and unregistered design rights, database and survey rights, and other intellectual property rights, as well as all rights to sue for extradition, all rights to apply for protection with respect to any of the foregoing rights, and all other forms or defenses of a similar or similar nature or effect.
                    </p>
                    <p>
                        The Applications (including the Intellectual Property Rights therein) may only be downloaded, used, viewed, and displayed for the express purpose of utilizing the Services and in accordance with the provisions of this Agreement. Paybek or its licensors own the Intellectual Property Rights in, and the contents of, the Applications, unless otherwise stated. Except for what you are authorized by Paybek to print or download for personal, non-commercial use, reproduction, copying, modification, alteration, or adaptation of part or all of the contents of the Applications (including any graphics or trademarks) in any form is prohibited without Paybek's prior consent.
                    </p>
                    <h4>
                        16.Suspension of Services
                    </h4>
                    <p>
                        If any product or system used in connection with or related to the Applications or Services is disrupted, malfunctions, becomes unavailable, fails, or malfunctions, or if a real or potential security risk exists, Paybek reserves the right to temporarily suspend the applicable Services or access to the Application or your Account for such reasonable period as may be necessary to correct, resolve, or resolve the problem, without incurring any obligation to you. Paybek may also restrict your access to the Applications, your Account, and/or Services as needed for maintenance or upgrade work (either emergency or scheduled). You also agree and acknowledge that, without limiting Paybek’s rights set forth in Section 12 above, your access to the Apps, your Account, and/or the Services may be suspended immediately if Paybek reasonably believes that you have used the Apps and/or Services (a) in violation of any law, rule, statute, or regulation; or (b) in connection with any illegal, fraudulent, abusive, violent, immoral, or obscene activity or in any manner other than encouraging, promoting, or facilitating. In case of such a suspension, Paybek may, in its sole discretion, reinstate access to your Account and continue supplying the Services to you.
                    </p>
                    <h4>
                        17.Force
                    </h4>
                    <p>
                        Majeure Paybek shall not be liable or in breach of its obligations under this Agreement if it is unable to perform its duties and obligations in whole or in part due to an act of God, fire, an act of government or state or other third party, war, civil unrest, insurrection, embargo, inability to communicate with third parties for any reason, failure of any computer, network, or billing system, failure or delay in any mobile telephone network, or the prevention or obstruction of receiving a message.
                    </p>
                    <h4>
                        18. Security, Maintenance and Availability
                    </h4>
                    <p>
                        You accept, understand, and affirm that electronic communication, the Internet, telephone lines, or SMS-based telecommunications technologies may not be secure, and that messages sent through these systems may be captured or misdelivered by unauthorized parties. As a result, Paybek cannot guarantee the privacy or confidentiality of communications sent over such channels, while it will (and will ensure that its service providers) take adequate security steps to secure these channels.
                    </p>
                    <p>
                        For security concerns, maintenance (emergency or scheduled), upgrades, or other reasons, it may be essential or desired from time to time:
                    </p>
                    <ul>
                        <li>
                            - you may be unable to access part or all of the Applications or Services; and/or
                        </li>
                        <li>
                            - any new services will be implemented later; and/or - your password should be revoked, replaced, or re-entered; and/or
                        </li>
                        <li>
                            - alter the methods or processes for gaining access to applications or services,
                        </li>
                    </ul>
                    <h4>
                        19.Agency and Assignment
                    </h4>
                    <p>
                        You acknowledge that you are entering into this Agreement for your own benefit and not for the benefit of anyone else, and that you will not subcontract or assign any of your rights or duties under it.
                    </p>
                    <h4>
                        20.Limited Liability
                    </h4>
                    <p>
                        Paybek is not liable for any unauthorized, illegal, fraudulent, offensive, violent, immoral, or indecent behavior involving the Applications and/or Services. Save as provided in Section 7 above, Paybek, its directors, employees, officers, and agents disclaim all liability and obligation for any amount or type of loss or damage that may occur to you or a third party (including, without constraint, any direct, indirect, incidental, special, consequential, exemplary, or punitive loss or damage, or any loss of income, money, data, or goodwill) arising out of or in connection with your use of the Applications, Products, or Service. This in no way eliminates our liability for death or personal harm caused by our carelessness, or for any other issue for which exclusion of liability would be prohibited.
                    </p>
                    <p>
                        Paybek will not be liable for any losses other than compensatory damages, which are expressly limited to the amount of Top-up or other value paid in relation to Services delivered through the Applications where Paybek is entirely responsible. You have no right of indemnification against Paybek.
                    </p>
                    <h4>
                        21.Governing law
                    </h4>
                    <p>
                        The laws of the USA will govern this Agreement, the Applications, and the supply of Services. You agree that the courts of the USA shall have exclusive jurisdiction over any claim or dispute arising from, out of, or in connection with this Agreement and/or your use of the Applications or the Services, without prejudice to your rights under relevant law.
                    </p>
                    <h4>
                        22.Severability
                    </h4>
                    <p>
                        In case of illegality, unenforceability or invalidity of any terms of the Agreement (or any part of a provision), the remainder of this Agreement will remain legal, valid, and enforceable (including the remainder of a provision where only part thereof is or has become illegal, invalid or unenforceable).
                    </p>
                    <h4>
                        23.Waiver
                    </h4>
                    <p>
                        Any waiver of a breach or default of any provision of this Agreement shall not be considered as a waiver of any subsequent breach or default of the same or other provisions, nor shall any postponement or omission on Paybek’s part in exercising or availing of any right, power, or privilege perform as a waiver of any breach or default by you.
                    </p>
                    <h4>
                        24.Customer Care & Contact Information
                    </h4>
                    <p>
                        We are always available to assist you if you have any questions or concerns regarding this Agreement, or if you require any assistance with the Applications or Services. You can contact us using one of the options below 24 hours a day, 365 days a year.
                    </p>
                    <p>
                        • Email: admin@paybek.io
                    </p>
                    <p>
                        Updated April 19, 2022
                    </p>
                </motion.div>
            </div>
            <TryPayBack />
            <Footer />
        </div >

    )
}
export default TermsAndConditions;