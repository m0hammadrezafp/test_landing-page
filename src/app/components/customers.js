import { Container, Box, Stack, Typography, Grid } from '../mui';
import CustomerItem from './CustomerItem';


const Customers = () => {

    const allServices = [
        {
            id: 1,
            img: 'Ellipse 3 (1).png',
            name: 'سهراب یزدانی',
            position: 'عنوان شغل، اسم شرکت',
            opinion: 'این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.',
        },
        {
            id: 2,
            img: 'Ellipse 3.png',
            name: 'علی جوانمردی',
            position: 'عنوان شغل، اسم شرکت',
            opinion: 'این یک پاراگراف است. برای افزودن یا ویرایش متن خود اینجا را کلیک کنید. این متن باید برای گفتن یک داستان مورد استفاده قرار گیرد و کاربران اطلاعات بیشتری بدست آورند.',
        }
    ]

    const allCustomers = [
        'Isolation_Mode (1).png',
        'Isolation_Mode.png',
        'Union (1).png',
        'Isolation_Mode (1).png',
        'Union (1).png',
        'Isolation_Mode.png'
    ]

    const containerStyle = {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        minHeight: '880px',
        paddingY: {xs: '60px', sm: '80px'},
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
                            مشتریان ما در موردمان چه میگویند
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
                    <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                        {allServices.map((item) => (
                            <Grid item md={6} key={item.id}>
                                <CustomerItem
                                    img={item.img}
                                    name={item.name}
                                    position={item.position}
                                    opinion={item.opinion}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Stack direction="row" spacing={{xs: 2.5, md: 6}}
                        sx={{
                            margin: {xs: '60px 0 0 0', sm: '80px 0 0 0'},
                            alignItems: 'center'
                        }}>
                            {allCustomers.map((item, index) => (
                                <Box component='img' key={index}
                                src={'/' + item}
                                sx={{
                                    width: {xs: '32px', sm: '52px', md: '84px'},
                                    maxHeight: '100px',
                                    objectFit: 'contain'
                                }}
                            />
                            ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}


export default Customers;