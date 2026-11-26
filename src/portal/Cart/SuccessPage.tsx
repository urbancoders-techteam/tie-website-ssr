// @ts-nocheck
import Image from '../asset/ordersuccess.png';
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from "@/portal/navigation";
// import congratulation from '@assets/images/congrats.png';
const OrderStatus = () => {
    const navigate = useNavigate();
    return (
        <Box>
            
            <Box
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                    p: { sm: 6, xs: 3 },
                    // maxWidth: '500px',
                    gap: 2,
                }}
            >
                <img src={Image} style={{ width: '190px', height: 'auto' }} alt='' />
                <Typography variant="h4" sx={{ textAlign: 'center' }}>
                    Your Order has been accepted
                </Typography>
                <Typography sx={{ maxWidth: '250px', textAlign: 'center' }}>
                    Someone from our team will call you back                </Typography>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{
                        bgcolor: '#00999E',
                        '&:hover': {
                            bgcolor: '#00999E',
                        },
                        maxWidth: '300px',
                    }}
                    onClick={() => {
                        navigate('/');
                    }}
                >
                    Back To Home
                </Button>
            </Box>
            
        </Box>
    )
}
export default OrderStatus;
