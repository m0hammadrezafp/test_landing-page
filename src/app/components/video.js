import { Container, Box, Typography, Grid } from '../mui';


const Video = () => {

    const allDescriptions = [
        'از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید',
        'از این زیرعنوان برای اطلاع رسانی به کاربر و آشنایی بیشتر با محصول و خدمات خود استفاده میکنیم. با کلیک بر روی این قسمت میتوانید متن خود را ویرایش کنید',
    ]

    const containerStyle = {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        minHeight: '500px',
        paddingY: '60px',
        display: 'flex',
        justifyContent: 'center',
    }

    return (
        <Box component={'section'} sx={{ width: '100%', background: '#666', color: '#fff' }} >
            <Container sx={containerStyle}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 'inherit',
                }}>
                    <Grid container spacing={{ xs: 4, sm: 8, lg: 10 }} sx={{ justifyContent: 'center' }}>
                        <Grid item sx={{ display: 'flex', justifyContent: 'center', order: { xs: 2, lg: 1 } }} lg={5}>
                            <Box component={'img'} src='/Group 2.png' alt='img'
                                sx={{
                                    width: '100%',
                                    objectFit: 'contain'
                                }} />
                        </Grid>
                        <Grid item sx={{ order: { xs: 1, lg: 2 } }} sm={8} lg={7}>
                            <Typography variant='h3' sx={{
                                fontSize: { xs: '18px', sm: '28px' },
                                fontWeight: '700'
                            }}>
                                ویدئو معرفی ما را تماشا کنید
                            </Typography>
                            <Box component={'ul'} sx={{ paddingLeft: { xs: '32px', sm: '56px' }, margin: '16px 0 0 0' }}>
                                {allDescriptions.map((item, index) => (
                                    <Box component={'li'} key={index} sx={{
                                        fontSize: '16px',
                                        fontWeight: 400,
                                        marginBottom: '16px',
                                        lineHeight: {xs: '28px', sm: '36px'},
                                        '&::marker': {
                                            fontSize: '0',
                                        },
                                        '&::before': {
                                            content: '""',
                                            position: 'relative',
                                            display: 'flex',
                                            left: { xs: '-1.75rem', sm: '-2.75rem' },
                                            top: { xs: '1.25rem', sm: '1.75rem' },
                                            width: { xs: '0.75rem', sm: '1rem' },
                                            height: { xs: '0.75rem', sm: '1rem' },
                                            background: '#fff',
                                            borderRadius: '10px',
                                        },
                                    }}>
                                        {item}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </Box>
    )
}


export default Video;