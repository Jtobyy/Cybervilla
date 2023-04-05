import { Typography, Box, Stack, Paper, Grid } from "@mui/material";
import React, { useState } from "react";

import { Link, Navigate } from "react-router-dom";

import { useLocation } from "react-router-dom";


const deviceModels = {
    iphones: [
        '13 pro Max', '13 pro', '13', '12 pro Max', '12 pro', '12', '11 pro Max',
        '11 pro', '11', 'XS Max', 'XS', 'XR', 'X', 'SE 2020', '8+', '8', '7+', '7',
        '6s+', '6s', '6+', '6', '5'
    ],
    samsungs: [
        'S10', 'S9', 's8', 's7 edge', 's7', 'Note 8', 'Note 5', 'Note 4', 'S6 Edge', 's6', 's5'
    ]
}

export default function SelectDeviceModel() {
    const location = useLocation();
    const props = location.state;
    const [models, setModels] = useState([])

    const brand = props.deviceModel
    sessionStorage.setItem('brand', brand)    

    console.log(deviceModels)
    console.log(deviceModels[brand])
    if (deviceModels[props.deviceModel] == undefined)
        return <Navigate style={{ textDecoration: 'none', color: 'black' }} to="/cyberfix/damage-option" state={{ model: "" }} />
    else 
        setModels(deviceModels[props.deviceModel])
    return (
        <React.Fragment>
            <Box sx={{ pl: {xs: 5, md: '60px'}, pr: {md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                <Typography variant="h4" >Select Device Model</Typography>    

                <Grid container mt={3}>
                    {models[0].map((model) => {
                        console.log('item ', model)
                        return (          
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/cyberfix/damage-option" state={{ model: model }}>
                                <Box px={2} sx={{display: 'flex', cursor: 'pointer', borderRadius: '10px', width: {xs: '100px', md: '150px'},  height: {xs: '100px', md: '150px'} }} m={1} alignItems='center' justifyContent='center' bgcolor="#F6F6F6" >
                                    {model}
                                </Box>
                            </Link>
                        )
                    })}    
                </Grid>    
            </Box>    
       </React.Fragment>        
    )
}