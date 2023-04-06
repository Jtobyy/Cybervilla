import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";


export default function RepairForm() {
    const location = useLocation();
    const props = location.state;

    const damage = props.damage
    sessionStorage.setItem('model', damage)

    const brand = sessionStorage.getItem('brand')
    const model = sessionStorage.getItem('model')

    if (brand == 'iphones') 
        return (
            <React.Fragment >
                <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                        <Box p={4} mb={5} sx={{display: 'flex', backgroundColor: '#F6F6F6', flexDirection: 'column'}}>   
                            <Box py={1} display="flex">DEVICE NAME: <Typography ml={1}>{brand} {model}</Typography></Box>
                            <Box py={1} display="flex">COLOUR:</Box>
                            <Box py={1} display="flex">ISSUE: <Typography ml={1}>{damage}</Typography></Box>
                        </Box>    
                        <Typography variant="h4"> Book A Repair</Typography>    

                        <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>    
                        <form>
                            <div className="form-group mb-3">
                                <input placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Alt. Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-5">
                                <input placeholder="Select date for Pickup" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>

                            <div>
                                <input type="checkbox" className="me-2"/>  I have confirmed all details above
                            </div>
                            
                            <Link to="/cyberfix/make-payment">
                                <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                    Confirm
                                </button>
                            </Link>
                            
                        </form>
                    </Grid>    

                    <Grid sx={{ order: {xs: 1, md: 2}, ml: {md: '200px'}}}  my={5} item xs={10} md={3}>
                    <Box> 
                        <Box class="cyberfix-checkout-details py-2 card">
                            <Box class="card-body checkout-card px-0 mx-4">
                                <h5 class="small-caps">ORDER SUMMARY</h5>    
                            
                                <Box class="d-flex mb-2 mt-4  justify-content-between">
                                    <Box class="mr-auto">Subtotal</Box>
                                    <Box id="cyberfix-subtotal">-</Box>
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
                                <Box class="d-flex justify-content-between">
                                    <Box class="mr-auto">Total</Box>
                                    <Box class="fw-700 " id="cyberfix-total"/>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>
                    </Grid>
                    
                </Grid>    
                
            </React.Fragment>
        )
    else if (brand == 'samsungs')
        return (
            <React.Fragment >
                <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                        <Box p={4} mb={5} sx={{display: 'flex', backgroundColor: '#F6F6F6', flexDirection: 'column'}}>   
                            <Box py={1} display="flex">DEVICE NAME: <Typography ml={1}>{brand} {model}</Typography></Box>
                            <Box py={1} display="flex">COLOUR:</Box>
                            <Box py={1} display="flex">ISSUE: <Typography ml={1}>{damage}</Typography></Box>
                        </Box>    
                        <Typography variant="h4"> Book A Repair</Typography>    

                        <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>    
                        <form >
                            <div className="form-group mb-3">
                                <input placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Alt. Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-5">
                                <input placeholder="Select date for Pickup" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>

                            <div>
                                <input type="checkbox" className="me-2"/>  I have confirmed all details above
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
                                    <Box id="cyberfix-subtotal">-</Box>
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
                                <Box class="d-flex justify-content-between">
                                    <Box class="mr-auto">Total</Box>
                                    <Box class="fw-700 " id="cyberfix-total"/>
                                </Box>
                            </Box>
                        </Box>
                        
                    </Box>
                    </Grid>
                    
                </Grid>    
                
            </React.Fragment>
        )
    else if (brand == 'tablets')
        return (
            <React.Fragment >
                <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                        <Typography variant="h4"> Book A Repair</Typography>    

                        <form className="mt-5">
                            <div className="form-group mb-3">
                                <input placeholder="Device Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Device Model" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <textarea rows={5} placeholder="What is wrong with your device" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                    
                            <div className="form-group mb-3">
                                <label for="exampleFormControlFile1">Upload image/video of device</label>
                                <input type="file" className="form-control-file" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            
                            

                            <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>    
                            <div className="form-group mb-3">
                                <input placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Alt. Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-5">
                                <input placeholder="Select date for Pickup" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>

                            <div>
                                <input type="checkbox" className="me-2"/>  I have confirmed all details above
                            </div>

                            <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                Confirm
                            </button>
                        </form>
                    </Grid>    
                    
                </Grid>    
                
            </React.Fragment>
        )
    else if (brand == 'laptops')
        return (
            <React.Fragment>
                <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                    <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                        <Typography variant="h4"> Book A Repair</Typography>    

                        <form className="mt-5">
                            <div className="form-group mb-3">
                                <input placeholder="Device Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Device Model" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            
                            <Typography variant="h6" mt={5} mb={3} >Enter Your Name And Address :</Typography>    
                            <div className="form-group mb-3">
                                <input placeholder="First Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Last Name" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Email Address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Alt. Phone Number" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input placeholder="Pickup address" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>
                            <div className="form-group mb-5">
                                <input placeholder="Select date for Pickup" className="form-control" style={{ paddingTop: '12px', paddingBottom: '12px' }} />
                            </div>

                            <div>
                                <input type="checkbox" className="me-2"/>  I have confirmed all details above
                            </div>

                            <button value="submit" class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                                Confirm
                            </button>
                        </form>
                    </Grid>    
                    
                </Grid>    
            </React.Fragment>
        )
}