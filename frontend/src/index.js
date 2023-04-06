import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import CyberfixLanding from './cyberfix/pages/landing';
import SelectDeviceModel from './cyberfix/pages/selectDeviceModel';
import SelectDamage from './cyberfix/pages/selectDamage';
import RepairForm from './cyberfix/pages/repairForm';

import NotFound from './notFound';
import { MakePayment } from './cyberfix/pages/payment';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div >
          <Header />
          <Routes>
            <Route path='/cyberfix' element={<CyberfixLanding />} />
            <Route path='/cyberfix/device-model' element={<SelectDeviceModel />} />
            <Route path='/cyberfix/damage-option' element={<SelectDamage />} />
            <Route path='/cyberfix/repair-form' element={<RepairForm />} />
            <Route path='/cyberfix/make-payment' element={<MakePayment />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
