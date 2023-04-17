import { Typography, Box, Stack, Grid } from "@mui/material";
import React, { useState } from "react";

import iphone from '../assets/iphone-4790162-3988748.png';
import pro_13 from '../assets/13pro.png';
import _13 from '../assets/13.png';
import pro_12 from '../assets/12pro.png';
import pro_11 from '../assets/11pro.png';
import _11 from '../assets/11.png';
import xsmax from '../assets/xsmax.png';
import xs from '../assets/xs.png';
import xr from '../assets/xr.png';
import x from '../assets/x.png';

import ScrollToTopOnMount from "../components/scrolltoview";

const iphonePrices = {
    '13 Pro Max': '300000', '13 Pro': '300000', '13': '300000', '12 Pro Max': '300000', 
    '12 Pro': '300000', '12': '300000', '11 Pro Max': '300000','11 Pro': '300000', 
    '11': '300000', 'XS Max': '300000', 'XS': '300000', 'XR': '300000', 
    'X': '300000', 'SE 2020': '300000', 
    '8+': '300000', '8': '300000', '7+': '300000', '7': '300000',
    '6s+': '300000', '6s': '300000', '6+': '300000', '6': '300000', '5': '300000'
}

const iphoneImages = {
    '13 Pro Max': '', '13 Pro': pro_13, '13': _13, '12 Pro Max': '', 
    '12 Pro': pro_12, '12': '', '11 Pro Max': '','11 Pro': pro_11, 
    '11': _11, 'XS Max': xsmax, 'XS': xs, 'XR': xr, 
    'X': x, 'SE 2020': '', 
    '8+': '', '8': '', '7+': '', '7': '',
    '6s+': '', '6s': '', '6+': '', '6': '', '5': ''
}

export default function Landing() {

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [altPhone, setAltPhone] = useState()
    const [pickup, setPickup] = useState()
    const [date, setDate] = useState()

    const [currentPhoneImage, setCurrentPhoneImage] = useState(iphone)
    const [wantedPhoneImage, setWantedPhoneImage] = useState(iphone)

    const [currentPhonePrice, setCurrentPhonePrice] = useState('...')
    const [wantedPhonePrice, setWantedPhonePrice] = useState('...')    

    const [currentPhoneName, setCurrentPhoneName] = useState('iphone')
    const [wantedPhoneName, setWantedPhoneName] = useState('iphone')        

    // const [getPersonalDetails, showGetPersonalDetails] = useState()

    const handleForm1 = (e) => {
        e.preventDefault()

        console.log('handle form 1')
        document.getElementById('form2').style.display = 'block'
        document.getElementById('proceed').style.display = 'none'
    }
    const handleForm2 = (e) => {
        e.preventDefault()
    }   

    const showCurrentPhone = (e) => {
        let model = e.target.value

        if (iphoneImages[model] !== '') {
            setCurrentPhoneImage(iphoneImages[model])
        } else {
            setCurrentPhoneImage(iphone)
        }
        setCurrentPhonePrice(iphonePrices[model])
        setCurrentPhoneName('Iphone ' + model)
    }

    const showWantedPhone = (e) => {
        let model = e.target.value

        if (iphoneImages[model] !== '') {
            setWantedPhoneImage(iphoneImages[model])
        } else {
            setWantedPhoneImage(iphone)
        }

        setWantedPhonePrice(iphonePrices[model])   
        setWantedPhoneName('Iphone ' + model)
    }

    return (
        <React.Fragment>
            <ScrollToTopOnMount />    

<Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
        <Typography variant="h4"> CyberSwap /Trade in </Typography>    
        <Typography variant="body1">Kindly give details about your device below</Typography>
        
        <Typography variant="h6" mt={5} mb={3} >Enter Detais </Typography>            
        <form  onSubmit={handleForm1}>
            <select onChange={showCurrentPhone} required class="form-select py-2" aria-label="Default select example">
                <option disabled selected>Select Your Current Device</option>
                {Object.keys(iphonePrices).map((model) => {
                    return (
                        <option value={model}>Iphone {model}</option>
                    )
                })}
            </select>

            <select onChange={showWantedPhone} required class="form-select py-2 mt-4" aria-label="Default select example">
                <option disabled  selected>Select Device You Want</option>
                {Object.keys(iphonePrices).map((model) => {
                    return (
                        <option value={model}>Iphone {model}</option>
                    )
                })}
            </select>            
            <button id="proceed" value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                Proceed
            </button>
        </form>

        <Box mt={8} sx={{ display: 'flex', flexDirection: {xs:'column', md: 'row'}}} >
            <Box >
                <Box display='flex' justifyContent='center' p={5} sx={{borderRadius: '15px', border: 'solid 1px grey'}}>
                    <Box width={200} component='img' src={currentPhoneImage} />
                </Box>
                <Typography py={2}>{currentPhoneName}</Typography>
                <Typography sx={{fontWeight: 'bold'}}>
                    ₦ {currentPhonePrice}
                </Typography>
            </Box>
            <Box sx={{ mt: {xs: 5, md: 0}, ml: {xs: 0, md: 5}}}>
                <Box display='flex' justifyContent='center' p={5} sx={{borderRadius: '15px', border: 'solid 1px grey'}}>
                    <Box width={200} component='img' src={wantedPhoneImage} />
                </Box>
                <Typography py={2}>{wantedPhoneName}</Typography>
                <Typography sx={{fontWeight: 'bold'}}>
                    ₦ {wantedPhonePrice}
                </Typography>
            </Box>
        </Box>
        
        <form onSubmit={handleForm2} id="form2" style={{display: 'none'}}>
            <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>        
            <div className="form-group mb-3">
                <input required onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
            </div>
            <div className="form-group mb-3">
                <input required onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
            </div>
            <div className="form-group mb-3">
                <input required onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
            </div>
            <div className="form-group mb-3">
                <input required onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
            </div>
            <div className="form-group mb-3">
                <input placeholder="Alt. Phone Number" onChange={(e) => setAltPhone(e.target.value)} type="tel" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
            </div>
    
            <div className="form-group mb-5">
                <label for="date" class="mb-1"> Select date for Phone diagnosis </label>
                <input required onChange={(e) => setDate(e.target.value)} type="date" id="date" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
            </div>
            
            
            <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                Submit
            </button>
            
            
        </form>        
    </Grid>    
    
</Grid>               
        </React.Fragment>        
    )
}