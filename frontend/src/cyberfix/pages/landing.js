import { Typography, Box, Stack, Grid } from "@mui/material";
import React from "react";

import iphone from '../../assets/iphone-4790162-3988748.png';
import samsung from '../../assets/samsung.png';
import tab from '../../assets/tab.png';
import laptop from '../../assets/laptop.png';

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../components/scrolltoview";

export default function Landing() {
    return (
        <React.Fragment>
            <ScrollToTopOnMount />    
            <Box py={5}  sx={{ml: {md: 2}, px: {xs: 1}, pl: {md: 5}, mb: {xs: '50px', md: '200px'}, mt:'80px' }}>
                <Typography variant="h4" sx={{ pl: {xs: 1, md: 0}, mt: {xs: 3, md: 0}, fontSize: {xs: '1.5rem', md: '2rem'}}}>Select Your Device</Typography>
                <Typography variant="body1" sx={{ pl: {xs: 1, md: 0}}}>Kindly Select The Device You Want To Repair</Typography>    
        
                <Grid container sx={{ display: 'flex', mt: {md: 4}}} justifyContent="space-around" alignItems="end">
                    <Grid xs={6} md={3} mb={3} sx={{marginLeft: {md: '-80px'}}} >
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/device-model" state={{ deviceModel: 'iphones' }}>
                            <Stack direction="column" alignItems='center' sx={{ cursor: 'pointer' }}>
                                <Box component='img' src={iphone} sx={{width: {xs: '120px', md: '200px'}}} />
                                <Typography variant="h5" sx={{ mt: {xs: 1, md: 3}}}>iphones</Typography>
                            </Stack>
                        </Link>
                    </Grid>
                    <Grid xs={6} md={3} mb={3}>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/device-model" state={{ deviceModel: 'samsungs' }}>
                            <Stack direction="column" alignItems='center' sx={{ cursor: 'pointer', mt: 5 }}>
                                <Box component='img' src={samsung} sx={{width: {xs: '120px', md: '180px'}}} />
                                <Typography variant="h5" sx={{mt: {xs: 1, md: 3}}}>Samsung</Typography>
                            </Stack>
                        </Link>
                    </Grid>
                    
                    <Grid xs={6} md={3} mb={3}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/device-model" state={{ deviceModel: 'tablets' }}>
                        <Stack direction="column" alignItems='center' sx={{ cursor: 'pointer' }}>
                            <Box component='img' src={tab} sx={{width: {xs: '150px', md: '250px'}}} />
                            <Typography variant="h5" sx={{mt: {xs: 1, md: 3}}}>Tablets</Typography>
                        </Stack>
                    </Link>
                    </Grid>
                    
                    <Grid xs={6} md={3} mb={3}>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/device-model" state={{ deviceModel: 'laptops' }}>
                        <Stack direction="column" alignItems='center' sx={{ cursor: 'pointer', mt: 5 }}>
                            <Box component='img' src={laptop} sx={{width: {xs: '200px', md: '300px'}}} />
                            <Typography variant="h5" sx={{mt: {xs: 1, md: 3}}}>Laptops</Typography>
                        </Stack>
                    </Link>
                    </Grid>
                </Grid>
            </Box>
            
        </React.Fragment>        
    )
}