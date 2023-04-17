import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Modal, LinearProgress, Typography, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { BASE_CRM_VOIPSWITCH, ENDPOINTS, model_damage_price } from "../..";
import ScrollToTopOnMount from "../../components/scrolltoview";
import successImg from '../../assets/success.svg';
import axios from 'axios';

import PropTypes from 'prop-types';


const progressStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 400,
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
    bgcolor: 'black',
    borderRadius: '10px',
    boxShadow: '0 0 0 9999px #000000b0',
    display: 'flex', alignItems: 'center'
}

function LinearProgressWithLabel(props) {
    return (
      <Box sx={progressStyle}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress color="secondary" variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="white">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

export default function RepairForm() {
    const location = useLocation();
    const props = location.state;
    const navigate = useNavigate()
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [altPhone, setAltPhone] = useState('')
    const [pickup, setPickup] = useState('')
    const [city, setCity] = useState('')
    const [state, setUserState] = useState('')
    const [date, setDate] = useState('')
    const [device, setDevice] = useState()
    const [deviceModel, setDeviceModel] = useState('')
    const [deviceDamage, setDeviceDamage] = useState('')

    const [progress, setProgress] = useState(10)
    const [showProgress, setShowProgress] = useState(false)

    const [openSuccess, setOpenSuccess] = React.useState(true);
    const handleOpenSuccess = () => setOpenSuccess(true);
    const handleCloseSuccess = () => setOpenSuccess(false);    
    
    const [openFailed, setOpenFailed] = React.useState(true);
    const handleOpenFailed = () => setOpenFailed(true);
    const handleCloseFailed = () => setOpenFailed(false);

    let damage;    
    if (props) {
        damage = props.damage
        sessionStorage.setItem('damage', damage)
    }

    const brand = sessionStorage.getItem('brand')
    const model = sessionStorage.getItem('model')

    if (!sessionStorage.getItem('brand') || !sessionStorage.getItem('damage')) 
        return <Navigate to="/" /> 
            
    let price
    try {
        price = model_damage_price[brand][damage][model]
        // console.log('price is ', price)
    } catch (e) {
        // alert('no data')
        price = ""
        // console.log(e)
    }        

    const tearDown = () => {
        setShowProgress(false);
        setProgress(10);
        handleOpenFailed();
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()   

        window.scrollTo(0, 0);
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';

        setShowProgress(true)

        let staffId; let apiKey; let customerId; let contactId;
        console.log(firstName)
        // Prepare form data to be passed to API calls
        const form1 = new FormData()

        form1.append('email', 'sales@cybervilla.io');
        form1.append('password', "CybervillaCRM");

        const form2 = new FormData()
        form2.append('name', firstName + " " + lastName);
        form2.append('phonenumber', phone);
        form2.append('city', city);
        form2.append('state', state);
        form2.append('country', 'Nigeria');
        form2.append('address', pickup);

        const form3 = new FormData()
        const form4 = new FormData()
        const form5 = new FormData()    
        const form6 = new FormData()

        console.log(state)        
        // Make API calls to store user's information and request in the CRM
        axios.post(`${BASE_CRM_VOIPSWITCH}${ENDPOINTS['login']}`, form1, {headers: {'Content-Type': `multipart/form-data`}})
        .then((res) => {
            if (res['data']['status'] === 1) {
                staffId = res['data']['companyData']['staffid']
                apiKey = res['data']['companyData']['apiKey']
            }

            form2.append('staffId', staffId);
            axios.post(`${BASE_CRM_VOIPSWITCH}${ENDPOINTS['addCustomer']}`, form2, {headers: {'Authorization': apiKey,  'Content-Type': `multipart/form-data`}})
            .then((res) => {
                if (res['data']['status'] === 1) {
                    setProgress(30)    
                    form3.append('staffId', staffId);
                    axios.post(`${BASE_CRM_VOIPSWITCH}${ENDPOINTS['getCustomerList']}`, form3, {headers: {'Authorization': apiKey,  'Content-Type': `multipart/form-data`}})
                    .then((res) => {
                        if (res['data']['status'] === 1) {
                            customerId = res['data']['customerData'].slice(-1)[0]['userId']
                            form4.append('userId', customerId)
                            form4.append('staffId', staffId)
                            form4.append('firstname', firstName)
                            form4.append('lastname', lastName)
                            form4.append('email', email)
                            form4.append('phone', phone)
                            form4.append('position', 'cyberfix_user')
                            form4.append('password', firstName + '_' + lastName)
                            form4.append('isPrimary', 0)

                            axios.post(`${BASE_CRM_VOIPSWITCH}${ENDPOINTS['addContact']}`, form4, {headers: {'Authorization': apiKey,  'Content-Type': `multipart/form-data`}})
                            .then((res) => {
                                // throw new Error('my error');
                                if (res['data']['status'] === 1) {
                                    setProgress(50)    
                                    form5.append('userId', customerId)
                                    form5.append('staffId', staffId)

                                    axios.post(`${BASE_CRM_VOIPSWITCH}${ENDPOINTS['getCustomerProfile']}`, form5, {headers: {'Authorization': apiKey,  'Content-Type': `multipart/form-data`}})
                                    .then((res) => {
                                        setProgress(80)    
                                        contactId = res['data']['customerData']['contacts'][0]['contactId']
                                        // console.log(contactId)

                                        form6.append('userId', customerId)
                                        form6.append('staffId', staffId)
                                        form6.append('contactId', contactId)
                                        form6.append('deptId', 15)
                                        form6.append('priorityId', 16)

                                        if (device)
                                            form6.append('subject', `cyberfix for ${device + ' ' + deviceModel}`)
                                        else 
                                            form6.append('subject', `cyberfix for ${sessionStorage.getItem('brand') + ' ' + sessionStorage.getItem('model')}`)

                                        form6.append('message', `damage: ${damage}, ${deviceDamage}`)
                                        
                                        axios.post(`${BASE_CRM_VOIPSWITCH}${ENDPOINTS['createTicket']}`, form6, {headers: {'Authorization': apiKey,  'Content-Type': `multipart/form-data`}})
                                        .then((res) => {
                                            if (res['data']['status'] === 1) {
                                                setProgress(99)
                                                // alert('repair order successful, we will contact you very soon')
                                                setSuccess(true)
                                                handleOpenSuccess()
                                                tearDown()
                                            }
                                            else {
                                                setFailed(true)
                                                tearDown()
                                                console.log(res)
                                            }
                                        }).catch((err) => {console.log(err); setFailed(true); tearDown()})
                                    }).catch((err) => {console.log(err); setFailed(true); tearDown()})
                                }
                                else {
                                    setFailed(true)
                                    tearDown()
                                    console.log(res)
                                }
                            }).catch((err) => {console.log(err); setFailed(true); tearDown()})
                            
                        }
                        else {
                            setFailed(true)
                            tearDown()
                            console.log(res)
                        }
                    }).catch((err) => {console.log(err); setFailed(true); tearDown()})
                }
            }).catch((err) => {console.log(err); setFailed(true); tearDown()})
        })
        .catch((err) => {
            console.log('error')
            console.log(err)
            tearDown()
        })
        // return navigate("/make-payment", { replace: true, state: {
        //      firstName: firstName,
        //      lastName: lastName,
        //      email: email,
        //      phone: phone,
        //      altPhone: altPhone,
        //      pickup: pickup,
        //      date: date ,
        //      price: price,
        // } }) 
        // return navigate("/", { replace: false })                 
    }


    if (brand === 'iphones' && price) {
        return (
            <React.Fragment >
                <ScrollToTopOnMount />    
                <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                        <Box p={4} mb={5} sx={{display: 'flex', backgroundColor: '#F6F6F6', flexDirection: 'column'}}>   
                            <Box py={1} display="flex">DEVICE NAME: <Typography ml={1}>{brand.slice(0, -1)} {model}</Typography></Box>
                            <Box py={1} display="flex">COLOUR:</Box>
                            <Box py={1} display="flex">ISSUE: <Typography ml={1}>{damage}</Typography></Box>
                        </Box>    
                        <Typography variant="h4"> Book A Repair</Typography>    

                        <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>    
                        <form onSubmit={handleSubmitForm}>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setFirstName(e.target.value)} placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setLastName(e.target.value)} placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setEmail(e.target.value)} type="email"  placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            {/* <div className="form-group mb-3">
                                <input placeholder="Alt. Phone Number" defaultValue={phone} onKeyUp={(e) => setAltPhone(e.target.value)} type="tel" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div> */}
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setPickup(e.target.value)} placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setCity(e.target.value)} placeholder="City" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <FormControl fullWidth sx={{ marginTop: '12px', marginBottom: '12px' }}>
                                <InputLabel id="state-select-label">State</InputLabel>
                                <Select
                                labelId="state-select-label"
                                id="state-select"
                                value={state}
                                label="State"
                                onChange={(e) => setUserState(e.target.value)}
                                >
                                {states.map((state) => (
                                    <MenuItem value={state}>{state}</MenuItem>
                                ))}    
                                <MenuItem key={state} value={state}>{state}</MenuItem>
                                </Select>
                            </FormControl>

                            <div>
                                <input required type="checkbox" className="me-2"/>  I have confirmed all details above
                            </div>
                            
                            <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                Confirm
                            </button>
                        </form>
                    </Grid>    

                    <Grid sx={{ order: {xs: 1, md: 2}, ml: {md: '200px'}}}  my={5} item xs={10} md={3}>
                    <Box> 
                        <Box class="cyberfix-checkout-details py-2 card">
                            <Box class="card-body checkout-card px-0 mx-4">
                                <h5 class="small-caps">ORDER SUMMARY</h5>    
                            
                                <Box class="d-flex mb-2 mt-4  justify-content-between">
                                    <Box class="mr-auto">Subtotal</Box>
                                    <Box id="cyberfix-subtotal">{price}</Box>
                                </Box>
                                <Box class="d-flex my-2 justify-content-between">
                                    <Box class="mr-auto">Shipping</Box>
                                    <Box>-</Box>
                                </Box>
                                <Box class="d-flex justify-content-between mt-2 mb-0">
                                    <Box class="mr-auto">Estimated Tax</Box>
                                    <Box>-</Box>
                                </Box>
                            </Box>
                            <Box class="card-footer px-0 mx-4 my-2">
                                <Box class="d-flex fw-bold justify-content-between">
                                    <Box class="mr-auto">Estimated Total</Box>
                                    <Box id="cyberfix-total">{price}</Box>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>
                    </Grid>
                    
                </Grid>    

                {(() => {
                    if (success) 
                        return (
                            <div>
                                  {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                  <Modal
                                    open={openSuccess}
                                    onClose={handleCloseSuccess}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                  >
                                    <Box sx={style}>
                                      <Box component="img" src={successImg} height={80} />
                                      <Typography fontWeight="bold" pt={3} id="modal-modal-title" variant="h4" component="h2">
                                          Successful
                                      </Typography>
                                      <Typography id="modal-modal-description" mt={1}>
                                          You will receive an email shortly
                                      </Typography>
                                      <Link to="/">
                                          <Button class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                              Go back to homepage
                                          </Button>
                                      </Link>
                                  </Box>
                                  </Modal>
                                </div>
                        )
                    else if (failed) 
                        return (
                            <div>
                                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                <Modal
                                open={openFailed}
                                onClose={handleCloseFailed}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >
                                <Box sx={style}>
                                    <Box component="img" src={successImg} height={80} />
                                    <Typography fontWeight="bold" pt={3} id="modal-modal-title" variant="h4" component="h2">
                                        Failed
                                    </Typography>
                                    {/* <Typography id="modal-modal-description" mt={1}>
                                        {}}
                                    </Typography> */}
                                    <Button onClick={handleCloseFailed} class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                        Try Again
                                    </Button>
                                </Box>
                                </Modal>
                            </div>
                        )
                })()}    

                {(() => {
                    if (showProgress) 
                        return <LinearProgressWithLabel value={progress} />
                })()}                            
                
            </React.Fragment>
        )
    }

    else if (brand === 'tablets' || brand == 'laptops')
        return (
            <React.Fragment >
                <ScrollToTopOnMount />    

                <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                        <Typography variant="h4"> Book A Repair</Typography>    

                        <form className="mt-5" onSubmit={handleSubmitForm}>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setDevice(e.target.value)}  placeholder="Device Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setDeviceModel(e.target.value)}   placeholder="Device Model" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <textarea rows={5} onKeyUp={(e) => setDeviceDamage(e.target.value)}  placeholder="What is wrong with your device" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                    
                            <div className="form-group mb-3">
                                <label for="exampleFormControlFile1">Upload image/video of device</label>
                                <input type="file" className="form-control-file" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            
                            

                            <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>    
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setFirstName(e.target.value)} placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setLastName(e.target.value)} placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setEmail(e.target.value)} type="email"  placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            {/* <div className="form-group mb-3">
                                <input placeholder="Alt. Phone Number" defaultValue={phone} onKeyUp={(e) => setAltPhone(e.target.value)} type="tel" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div> */}
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setPickup(e.target.value)} placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setCity(e.target.value)} placeholder="City" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <FormControl fullWidth sx={{ marginTop: '12px', marginBottom: '12px' }}>
                                <InputLabel id="state-select-label">State</InputLabel>
                                <Select
                                labelId="state-select-label"
                                id="state-select"
                                value={state}
                                label="State"
                                onChange={(e) => setUserState(e.target.value)}
                                >
                                {states.map((state) => (
                                    <MenuItem key={state} value={state}>{state}</MenuItem>
                                ))}    
                                
                                </Select>
                            </FormControl>

                            <div>
                                <input required type="checkbox" className="me-2"/>  I have confirmed all details above
                            </div>

                            <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                Confirm
                            </button>
                        </form>
                    </Grid>    
                    
                </Grid>    

                {(() => {
                    if (success) 
                        return (
                            <div>
                                  {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                  <Modal
                                    open={openSuccess}
                                    onClose={handleCloseSuccess}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                  >
                                    <Box sx={style}>
                                      <Box component="img" src={successImg} height={80} />
                                      <Typography fontWeight="bold" pt={3} id="modal-modal-title" variant="h4" component="h2">
                                          Successful
                                      </Typography>
                                      <Typography id="modal-modal-description" mt={1}>
                                          You will receive an email shortly
                                      </Typography>
                                      <Link to="/">
                                          <Button class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                              Go back to homepage
                                          </Button>
                                      </Link>
                                  </Box>
                                  </Modal>
                                </div>
                        )
                    else if (failed) 
                        return (
                            <div>
                                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                <Modal
                                open={openFailed}
                                onClose={handleCloseFailed}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >
                                <Box sx={style}>
                                    <Box component="img" src={successImg} height={80} />
                                    <Typography fontWeight="bold" pt={3} id="modal-modal-title" variant="h4" component="h2">
                                        Failed
                                    </Typography>
                                    {/* <Typography id="modal-modal-description" mt={1}>
                                        {}}
                                    </Typography> */}
                                    <Button onClick={handleCloseFailed}  class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                        Try Again
                                    </Button>
                                </Box>
                                </Modal>
                            </div>
                        )

                })()}                
                
                {(() => {
                    if (showProgress) 
                        return <LinearProgressWithLabel value={progress} />
                })()}                
            </React.Fragment>
        )

    else if (brand === 'samsungs' || !price)
        return (
            <React.Fragment >
                <ScrollToTopOnMount />    

                <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                        <Box p={4} mb={5} sx={{display: 'flex', backgroundColor: '#F6F6F6', flexDirection: 'column'}}>   
                            <Box py={1} display="flex">DEVICE NAME: <Typography ml={1}>{brand.slice(0, -1)} {model}</Typography></Box>
                            <Box py={1} display="flex">COLOUR:</Box>
                            <Box py={1} display="flex">ISSUE: <Typography ml={1}>{damage}</Typography></Box>
                        </Box>    
                        <Typography variant="h4"> Book A Repair</Typography>    

                        <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>    
                        <form onSubmit={handleSubmitForm}>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setFirstName(e.target.value)} placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setLastName(e.target.value)} placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setEmail(e.target.value)} type="email"  placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            {/* <div className="form-group mb-3">
                                <input placeholder="Alt. Phone Number" defaultValue={phone} onKeyUp={(e) => setAltPhone(e.target.value)} type="tel" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div> */}
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setPickup(e.target.value)} placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required onKeyUp={(e) => setCity(e.target.value)} placeholder="City" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <FormControl fullWidth sx={{ marginTop: '12px', marginBottom: '12px' }}>
                                <InputLabel id="state-select-label">State</InputLabel>
                                <Select
                                labelId="state-select-label"
                                id="state-select"
                                value={state}
                                label="State"
                                onChange={(e) => setUserState(e.target.value)}
                                >
                                {states.map((state) => (
                                    <MenuItem key={state} value={state}>{state}</MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                            
                            <div>
                                <input required type="checkbox" className="me-2"/>  I have confirmed all details above
                            </div>
                            
                            <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                Confirm
                            </button>
                        </form>
                    </Grid>    
                </Grid>
                
                {(() => {
                    if (success) 
                        return (
                                <div>
                                  {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                  <Modal
                                    open={openSuccess}
                                    onClose={handleCloseSuccess}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                  >
                                    <Box sx={style}>
                                      <Box component="img" src={successImg} height={80} />
                                      <Typography fontWeight="bold" pt={3} id="modal-modal-title" variant="h4" component="h2">
                                          Successful
                                      </Typography>
                                      <Typography id="modal-modal-description" mt={1}>
                                          You will receive an email shortly
                                      </Typography>
                                      <Link to="/">
                                          <Button class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                              Go back to homepage
                                          </Button>
                                      </Link>
                                  </Box>
                                  </Modal>
                                </div>
                        )
                    else if (failed) 
                        return (
                            <div>
                                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                                <Modal
                                open={openFailed}
                                onClose={handleCloseFailed}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                                >
                                <Box sx={style}>
                                    <Box component="img" src={successImg} height={80} />
                                    <Typography fontWeight="bold" pt={3} id="modal-modal-title" variant="h4" component="h2">
                                        Failed
                                    </Typography>
                                    {/* <Typography id="modal-modal-description" mt={1}>
                                        {}}
                                    </Typography> */}
                                    <Button onClick={handleCloseFailed} class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                        Try Again
                                    </Button>
                                </Box>
                                </Modal>
                            </div>
                        )

                })()}

                {(() => {
                    if (showProgress) 
                        return <LinearProgressWithLabel value={progress} />
                })()}
                
            </React.Fragment>
        )
    
    else
            return <Navigate to="/" />
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    borderRadius: '20px',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center',
  };

  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "FCT - Abuja",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara"
  ]
    