import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import logo from '../../assets/logo.png';


export function MakePayment() { 
    const config = {
        public_key: 'FLWPUBK_TEST-4a979a2087a9fc732f4321b90c5b6ccd-X',
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phone_number: '070********',
          name: 'john doe',
        },
        customizations: {
          title: 'CyberFix',
          description: 'Payment',
          logo: {logo},
        },
      };
      
    const handleFlutterPayment = useFlutterwave(config)

    const startPayment = (e) =>  {
        e.preventDefault()
        
        handleFlutterPayment({
            callback: (response) => {
                console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
        });
    }
    return (
        <React.Fragment>
            <Grid container sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                <Grid sx={{ order: {xs: 2, md: 1}}} item xs={12} md={4}>
                
                    <Typography variant="h4" sx={{ mt: {xs: 3, md: 0}, fontSize: {xs: '1.5rem', md: '2rem'}}}>How do you want to pay?</Typography>
                    <Typography variant="caption" sx={{ pl: { md: 0}}}>Payment Methods</Typography>

                    <form onSubmit={startPayment}>     
                        <div class="form-check mt-4">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Pay with debit/credit card
                            </label> <br/>
                                <Typography variant="caption">Make payment using your debit and credit cards</Typography>
                        </div>
                        <div class="form-check mt-4">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" disabled />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Direct bank transfer
                            </label> <br />
                            <Typography variant="caption">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</Typography>
                        </div>

                        <div className="mt-5 small" >
                            <input type="checkbox" className="ms-2 me-2" required/> I have read and agreed to the website terms and conditions
                        </div>     

                        
                        <button class="mt-5 ctabtn btn w-100" style={{ paddingTop: '12px', paddingBottom: '12px' }}>
                            Proceed
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
}