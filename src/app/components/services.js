import { Container, Box, Stack, Typography, Grid } from '@mui/material';
import ServiceItem from './ServiceItem';
import { useState } from 'react';


const Services = () => {

    const [allServices] = useState([
        {
            id: 1,
            img: 'Rectangle 2.png',
            name: 'طراحی جدید',
            color: '#5274F9',
            services: ['Marketing', 'SEO'],
        },
        {
            id: 2,
            img: 'Rectangle 2 (1).png',
            name: 'خدمات مالی',
            color: '#28AE3D',
            services: ['Saftey Pay', 'Best Invest'],
        },
        {
            id: 3,
            img: 'Rectangle 2 (2).png',
            name: 'طراحی جدید',
            color: '#FB874F',
            services: ['IT Solution', 'Web Design'],
        }
    ]);

    const containerStyle = {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        minHeight: '840px',
        paddingY: {xs: '60px', sm: '80px'},
        paddingBottom: {xs: '40px', sm: 'unset'},
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <Box component={'section'} sx={{ width: '100%', background: '#FAFAFA', }} >
            <Container sx={containerStyle}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'inherit',
                }}>
                    <Stack direction="column" spacing={2.5} sx={{ marginBottom: '60px', alignItems: 'center' }}>
                        <Typography variant='h3' sx={{
                            fontSize: {xs: '16px', sm: '28px'},
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>
                            ما خدمات زیادی به مشتریان بزرگمان ارائه میدهیم
                        </Typography>
                        <Typography variant='h4' sx={{
                            fontSize:  {xs: '14px', sm: '20px'},
                            fontWeight: '400',
                            textAlign: 'center',
                            maxWidth: '700px',
                            lineHeight: {xs: '24px', sm: '32px'},
                            color: '#999'
                        }}>
                            از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید                        </Typography>
                    </Stack>
                    <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                        {allServices.map((item) => (
                            <Grid item md={6} lg={4} key={item.id}>
                                <ServiceItem color={item.color} name={item.name}
                                    img={item.img} services={item.services} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}


export default Services;