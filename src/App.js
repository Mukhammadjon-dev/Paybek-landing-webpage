import { Routes, Route } from 'react-router-dom';

import "./App.css";

import Home from './components/Home';
import Header from './components/Header';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import GoToTop from './components/GoToTop';
import Remittance from './components/Remittance/Remittance';
import DownloadModal from './components/DownloadModal';


function App() {

  return (
    <div className="App">
      <Header />
      <DownloadModal />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/remittance" element={<Remittance />} />
      </Routes>
      <GoToTop />
    </div>
  );
}

export default App;
