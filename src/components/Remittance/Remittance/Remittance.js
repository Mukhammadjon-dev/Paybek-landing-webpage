import Footer from "../../Footer";
import DownloadApp from "../DownloadApp";
import GlobalCurrency from "../GlobalCurrency";
import LowFees from "../LowFees";
import MobileApp from "../MobileApp";
import MoneyTransfer from "../MoneyTransfer";

function Remittance() {
    return (
        <div>
            <MoneyTransfer />
            <MobileApp />
            <LowFees />
            <GlobalCurrency />
            <DownloadApp />
            <Footer />
        </div>
    )
}

export default Remittance; 