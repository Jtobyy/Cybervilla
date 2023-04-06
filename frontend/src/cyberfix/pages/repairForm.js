import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import { model_damage_price } from "../..";
import ScrollToTopOnMount from "../../components/scrolltoview";

export default function RepairForm() {
    const location = useLocation();
    const props = location.state;
    const navigate = useNavigate()

    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [altPhone, setAltPhone] = useState()
    const [pickup, setPickup] = useState()
    const [date, setDate] = useState()

    let damage;    
    if (props) {
        damage = props.damage
        sessionStorage.setItem('damage', damage)
    }

    const brand = sessionStorage.getItem('brand')
    const model = sessionStorage.getItem('model')



    if (!sessionStorage.getItem('brand') || !sessionStorage.getItem('damage')) 
        return <Navigate to="/cyberfix/" /> 

    let price

    try {
        price = model_damage_price[brand][damage][model]
        console.log('price is ', price)
    } catch (e) {
        // alert('no data')
        price = ""
        console.log(e)
    }        

    const handleSubmitIphone = (e) => {
        e.preventDefault()   

        return navigate("/cyberfix/make-payment", { replace: true, state: {
             firstName: firstName,
             lastName: lastName,
             email: email,
             phone: phone,
             altPhone: altPhone,
             pickup: pickup,
             date: date ,
             price: price,
        } }) 
    }

    if (brand == 'iphones' && price) {
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
                        <form onSubmit={handleSubmitIphone}>
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
                            <div className="form-group mb-3">
                                <input required onChange={(e) => setPickup(e.target.value)} placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-5">
                                <label for="date" class="mb-1"> Date for Pickup</label>
                                <input required onChange={(e) => setDate(e.target.value)} type="date" id="date" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>

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
                                    <Box class="mr-auto">Total</Box>
                                    <Box id="cyberfix-total">{price}</Box>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>
                    </Grid>
                    
                </Grid>    
                
            </React.Fragment>
        )
    }

    else if (brand == 'tablets' || brand == 'laptops')
        return (
            <React.Fragment >
                <ScrollToTopOnMount />    

                <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                        <Typography variant="h4"> Book A Repair</Typography>    

                        <form className="mt-5">
                            <div className="form-group mb-3">
                                <input required placeholder="Device Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required placeholder="Device Model" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <textarea rows={5} placeholder="What is wrong with your device" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                    
                            <div className="form-group mb-3">
                                <label for="exampleFormControlFile1">Upload image/video of device</label>
                                <input required type="file" className="form-control-file" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            
                            

                            <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>    
                            <div className="form-group mb-3">
                                <input required placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required type="email" placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required type="tel" placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Alt. Phone Number" type="tel" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-5">
                                <label for="date" class="mb-1"> Date for Pickup</label>
                                <input required type="date" id="date" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>

                            <div>
                                <input required type="checkbox" className="me-2"/>  I have confirmed all details above
                            </div>

                            <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                Confirm
                            </button>
                        </form>
                    </Grid>    
                    
                </Grid>    
                
            </React.Fragment>
        )

    else if (brand == 'samsungs' || !price)
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
                        <form >
                            <div className="form-group mb-3">
                                <input required placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required type="email" placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required placeholder="Phone Number" type="tel" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required placeholder="Alt. Phone Number" type="tel" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input required placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-5">
                                <label for="date" class="mb-1"> Date for Pickup</label>
                                <input required type="date" id="date" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>

                            <div>
                                <input required type="checkbox" className="me-2"/>  I have confirmed all details above
                            </div>
                            
                            <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                Confirm
                            </button>
                        </form>
                    </Grid>    

                    
                </Grid>    
                
            </React.Fragment>
        )
    
    else
            return <Navigate to="/cyberfix" />
}


