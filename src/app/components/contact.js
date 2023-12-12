import { Container, Box, Button, Stack, Typography } from '@mui/material';


const Contact = () => {

    const containerStyle = {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        overflow: 'hidden',
        minHeight: { xs: '330px', sm: '750px' },
        paddingY: {xs: '60px', sm: '80px'},
        display: 'flex',
        justifyContent: 'center',
    }

    const buttonStyle = {
        width: '100%',
        whiteSpace: 'nowrap',
        fontSize: { xs: '16px', sm: '18px' },
        height: { xs: '44px', sm: '50px' },
        background: '#5274F9 !important',
        color: '#fff',
        boxShadow: 'none !important',
    };

    return (
        <Box component={'section'} sx={{ position: 'relative' }}>
            <Container sx={containerStyle}>
                <Stack direction="column" sx={{ color: '#fff', justifyContent: 'center', alignItems: 'center' }}>
                    <Stack direction="column" spacing={2} sx={{ marginBottom: '68px' }}>
                        <Typography variant='h3' sx={{
                            fontSize: { xs: '16px', sm: '28px' },
                            fontWeight: 'bold',
                            width: '100%',
                            textAlign: 'center',
                        }}>
                            اگر علاقه‌مند به همکاری با ما هستی
                        </Typography>
                        <Typography variant='h4' sx={{
                            fontSize: { xs: '14px', sm: '20px' },
                            fontWeight: '400',
                            textAlign: 'center',
                            maxWidth: '800px',
                            lineHeight: { xs: '28px', sm: '32px' },
                        }}>
                            از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={{xs: 2, sm: 3}} sx={{ maxWidth: { xs: '320px', md: '460px' }, width: '100%' }}>
                        <Button variant='contained' sx={buttonStyle}>
                            ارسال رزومه
                        </Button>
                        <Button variant='outlined' sx={{
                            ...buttonStyle,
                            background: 'transparent',
                            border: '2px solid #fff !important',
                        }}>
                            فرم تماس با ما
                        </Button>
                    </Stack>
                </Stack>
            </Container>
            <Box sx={{
                width: '100%',
                position: 'relative',
                bottom: 0,
                right: 0,
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: '#222',
                color: '#fff',
                height: {xs: '36px', sm: '67px'},
                fontSize: {xs: '11px', sm: '16px'},
                fontWeight: 300
            }}
            >
                2019 . Company . All rights reserved©
            </Box>
            <Box className='intro-image-container' sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                minHeight: { xs: '330px', sm: '750px' },
                height: { xs: '100%', sm: 'unset' },
                overflow: 'hidden',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: '#00000099'
                },
            }}>
                <Box component='img'
                    src="/Rectangle 3.png"
                    alt='background'
                    sx={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: 'auto auto',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Box>
    )
}


export default Contact;