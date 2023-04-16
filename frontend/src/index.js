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
// import { loadProgressBar } from 'axios-progress-bar';
// import 'axios-progress-bar/dist/nprogress.css';


// loadProgressBar();

export const model_damage_price = {
  iphones: { 
      'Broken Screen': {
          '12 Pro Max': 85000,
          '12 Pro': 75000,
          '11 Pro Max': 55000,
          '11 Pro': 45000,
          '11': 40000,
          'XS Max': 45000,
          'XS': 35000,
          'XR': 30000,
          'X': 30000,
          'SE 2020': 15000,
          '8': 15000,
          '7': 15000,
          '8+': 20000,
          '7+': 20000,
          '6s+': 20000,
          '6s': 15000, 
          '6+': 15000,
          '6': 13000, 
          '5': 13000
      },
      
      'Back Glass': {
          'SE 2020': 10000,
          '8': 10000,
          '8+': 10000,
          '7+': 10000,
          'X': 10000,
          'XS': 10000,
          'XR': 15000,
          'XS Max': 15000,
          '11': 15000,
          '11 Pro': 20000,
          '11 Pro Max': 20000,
          '12 Pro': 25000,
          '12 Pro Max': 30000,
          '13': 30000,
          '13 Pro': 30000,
          '13 Pro Max': 35000,
      },

      'Battery': {
          '6': 6000,    
          '6s': 6000, 
          '6+': 8000,
          '6s+': 8000,
          '7': 8000,
          'SE 2020': 8000,
          '8': 8000,
          '8+': 10000,
          '7+': 10000,
          'X': 15000,
          'XS': 15000,
          'XR': 15000,
          'XS Max': 15000,
          '11': 15000,
          '11 Pro': 20000,
          '11 Pro Max': 20000,
          '12 Pro': 30000,
          '12 Pro Max': 35000,
      }
  }
}


export const BASE_CRM_VOIPSWITCH = "https://apps.nativetalk.com.ng:445/kriffy/api"

export const ENDPOINTS = { 
  login: '/customer/login',
  addCustomer: '/customer/addCustomer',
  getCustomerList: '/customer/getCustomerList',
  addContact: '/customer/addContact',
  getCustomerProfile: '/customer/getCustomerProfile',
  createTicket: '/customer/createTicket'
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div >
          <Header />
          <Routes>
            <Route path='/' element={<CyberfixLanding />} />
            <Route path='/device-model' element={<SelectDeviceModel />} />
            <Route path='/damage-option' element={<SelectDamage />} />
            <Route path='/repair-form' element={<RepairForm />} />
            <Route path='/make-payment' element={<MakePayment />} />

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
