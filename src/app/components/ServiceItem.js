import { Box, Stack, Typography } from '@mui/material';


const ServiceItem = (props) => {

    const serviceStyle = {
        maxWidth: '140px',
        width: '100%',
        height: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: 400,
        borderRadius: '4px',
        color: props.color,
        background: props.color + '1A',
    }

    return (
        <section>
            <Stack direction="column" sx={{ alignItems: 'center' }}>
                <Box component='img' src={'/' + props.img} sx={{ width: '100%', maxWidth: '400px' }} />
                <Stack direction="column"
                    sx={{
                        alignItems: 'center',
                        boxShadow: '0px 24px 34px 0px #0000000A',
                        borderRadius: '16px',
                        background: '#fff',
                        width: '100%',
                        maxWidth: '320px',
                        position: 'relative',
                        top: '-32px',
                        padding: '24px',
                        boxSizing: 'border-box',
                        transition: 'all 0.5s',
                        '&:hover': {
                            top: '-64px',
                        }
                    }}>
                    <Typography variant='h6' fontWeight={700}>{props.name}</Typography>
                    <Typography variant='body2' sx={{ textAlign: 'center', fontSize: '12px', lineHeight: '24px', marginTop: '12px' }}>
                        اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که چه خدماتی ارائه میدهید
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ marginTop: '32px', width: '100%', justifyContent: 'center' }}>
                        {props.services.map((item, index) => (
                            <Typography key={index} component={'strong'} sx={serviceStyle}>{item}</Typography>
                        ))}
                    </Stack>
                </Stack>
            </Stack>
        </section>
    )
}


export default ServiceItem;