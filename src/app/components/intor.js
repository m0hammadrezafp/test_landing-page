import { Container, Box, Button, Stack, Typography } from '@mui/material';


const Intro = () => {

    const containerStyle = {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        overflow: 'hidden',
        minHeight: { xs: '540px', sm: '750px' },
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
                    <Stack direction="column" spacing={1.5} sx={{ marginBottom: '72px', alignItems: 'center' }}>
                        <Box component='img' src='/Union.png' sx={{ width: '140px', marginBottom: '12px' }} />
                        <Typography component='strong' sx={{ fontWeight: 700, fontSize: '22px' }}>
                            Lead Generation
                            <Typography component='span' sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                wdith: '100%',
                                fontWeight: 300,
                                fontSize: '16x'
                            }}>Company</Typography>
                        </Typography>
                    </Stack>
                    <Stack direction="column" spacing={2} sx={{ marginBottom: '68px' }}>
                        <Typography variant='h1' sx={{
                            fontSize: { xs: '22px', sm: '32px' },
                            lineHeight: { xs: '40px', sm: 'unset' },
                            fontWeight: 'bold',
                            width:  {xs: 'unset', sm: '100%'},
                            padding: {xs: '0 32px', sm: 'unset'},
                            textAlign: 'center',
                        }}>
                            به راحتی خدمات مورد نیاز خودت رو پیدا کن
                        </Typography>
                        <Typography variant='h2' sx={{
                            fontSize: { xs: '16px', sm: '20px' },
                            fontWeight: '400',
                            textAlign: 'center',
                            maxWidth: '700px',
                            lineHeight: '36px',
                            lineHeight: { xs: '30px', sm: '36px' },
                        }}>
                            اینجا میتوانید کمی در مورد خودتون صحبت و توضیح دهید که محصول شما چیست و چه کارهایی انجام میده
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={{xs: 2, sm: 3}} sx={{ maxWidth: { xs: '320px', md: '460px' }, width: '100%' }}>
                        <Button variant='contained' sx={buttonStyle}>مشاوره میخوام</Button>
                        <Button variant='outlined' sx={{
                            ...buttonStyle,
                            background: 'transparent',
                            border: '2px solid #fff !important',
                        }}>فرم تماس با ما</Button>
                    </Stack>
                </Stack>
            </Container>
            <Box className='intro-image-container' sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                minHeight: { xs: '540px', sm: '750px' },
                height: { xs: '100%', sm: 'unset' },
                overflow: 'hidden',
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    background: '#203789CC',
                },
            }}>
                <Box component='img'
                    src="/Rectangle 1.png"
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
        </Box >
    )
}


export default Intro;