import { Typography, Box, Stack, Paper, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";


const deviceModels = {
    iphones: [
        '13 Pro Max', '13 Pro', '13', '12 Pro Max', '12 Pro', '12', '11 Pro Max',
        '11 Pro', '11', 'XS Max', 'XS', 'XR', 'X', 'SE 2020', '8+', '8', '7+', '7',
        '6s+', '6s', '6+', '6', '5'
    ],
    samsungs: [
        'S10', 'S9', 'S8', 'S7 edge', 'S7', 'Note 8', 'Note 5', 'Note 4', 'S6 Edge', 'S6', 'S5'
    ]
}

export default function SelectDeviceModel() {
    const location = useLocation();
    const props = location.state;
    const [models, setModels] = useState([])
    const navigate = useNavigate()

    let brand;

    if (props) {
        brand = props.deviceModel
        sessionStorage.setItem('brand', brand)    
    }

    useEffect(() => {
        // console.log(deviceModels)
        // console.log(deviceModels[brand])
        
        if (deviceModels[brand] == undefined)
            setModels([])
        else {
            setModels(deviceModels[brand])    
            // console.log(models)
        }
    }, [models])
    
    if (!sessionStorage.getItem('brand'))
        return navigate("/", { replace: false }) 

    if (models.length === 0)    
        return navigate("/damage-option", { replace: true, state: { model: "" } }) 
    
    return (
        <React.Fragment>
            <Box sx={{ pl: {xs: 2, md: '60px'}, pr: {xs: 2, md: 5}, mt: {xs: '150px'}, mb: '200px'}}>
                <Typography variant="h4" sx={{ fontSize: {xs: '1.5rem', md: '2rem'}}}>Select Device Model</Typography>    

                <Grid container mt={3}>
                    {models.map((model) => {
                        // console.log('item ', model)
                        return (          
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/damage-option" state={{ model: model }}>
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