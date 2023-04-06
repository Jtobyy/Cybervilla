import { Typography, Box, Stack, Paper, Grid } from "@mui/material";
import React, { useState } from "react";

import { Link, Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";


const damageOptions = [
    'Broken Screen', 'Battery', 'Back Glass', 'Water damaged', 'Won’t turn on', 'Others'
]

export default function SelectDamage() {
    const location = useLocation();
    const props = location.state;

    sessionStorage.setItem('model', props.model)

    return (
        <React.Fragment>
            <Box sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                <Typography variant="h4" sx={{ fontSize: {xs: '1.5rem', md: '2rem'}}}>What is wrong with your device?</Typography>    

                <Grid container mt={3}>
                    {damageOptions.map((option) => {
                        console.log('item ', option)
                        return (        
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/cyberfix/repair-form" state={{ 'damage': option }} >
                                <Box px={2} sx={{display: 'flex', cursor: 'pointer', borderRadius: '10px', width: {xs: '100px', md: '150px'},  height: {xs: '100px', md: '150px'} }} m={1} alignItems='center' justifyContent='center' bgcolor="#F6F6F6" >
                                    {option}
                                </Box>
                            </Link>  
                        )
                    })}    
                </Grid>    
            </Box>    
       </React.Fragment>        
    )
}