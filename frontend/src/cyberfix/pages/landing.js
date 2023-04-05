import { Typography, Box, Stack, Grid } from "@mui/material";
import React from "react";

import iphone from '../../assets/iphone-4790162-3988748.png';
import samsung from '../../assets/samsung.png';
import tab from '../../assets/tab.png';
import laptop from '../../assets/laptop.png';

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <React.Fragment>
            <Box py={5} ml={2} sx={{ pl: {xs: 0, md: 5}, mb: '200px', mt:'80px' }}>
                <Typography variant="h4" sx={{ pl: {xs: 5, md: 0}, mt: {xs: 3, md: 0}}}>Select Your Device</Typography>
                <Typography variant="body1" sx={{ pl: {xs: 5, md: 0}}}>Kindly Select The Device You Want To Repair</Typography>    
        
                <Grid container sx={{ display: 'flex', mt: 4}} justifyContent="space-around" alignItems="end">
                    <Grid xs={6} md={3}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/cyberfix/device-model" state={{ deviceModel: 'iphones' }}>
                            <Stack direction="column" alignItems='center' sx={{ cursor: 'pointer' }}>
                                <Box component='img' src={iphone} sx={{width: {xs: '150px'}}} />
                                <Typography variant="h5" mt={3}>iphones</Typography>
                            </Stack>
                        </Link>
                    </Grid>
                    <Grid xs={6} md={3}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/cyberfix/device-model" state={{ deviceModel: 'tablets' }}>
                        <Stack direction="column" alignItems='center' sx={{ cursor: 'pointer' }}>
                            <Box component='img' src={tab} sx={{width: {xs: '150px'}}} />
                            <Typography variant="h5" mt={3}>Tablets</Typography>
                        </Stack>
                    </Link>
                    </Grid>
                    <Grid xs={6} md={3} >
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/cyberfix/device-model" state={{ deviceModel: 'samsungs' }}>
                            <Stack direction="column" alignItems='center' sx={{ cursor: 'pointer', mt: 5 }}>
                                <Box component='img' src={samsung} sx={{width: {xs: '150px'}}} />
                                <Typography variant="h5" mt={3}>Samsung</Typography>
                            </Stack>
                        </Link>
                    </Grid>
                    <Grid xs={6} md={3}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/cyberfix/device-model" state={{ deviceModel: 'laptops' }}>
                        <Stack direction="column" alignItems='center' sx={{ cursor: 'pointer', mt: 5 }}>
                            <Box component='img' src={laptop} sx={{width: {xs: '150px'}}} />
                            <Typography variant="h5" mt={3}>Laptops</Typography>
                        </Stack>
                    </Link>
                    </Grid>
                </Grid>
            </Box>
            
        </React.Fragment>        
    )
}