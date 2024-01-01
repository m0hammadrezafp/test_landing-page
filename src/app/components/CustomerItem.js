import { Box, Stack, Typography } from '../mui'; 


const CustomerItem = (props) => {
    return (
        <Box sx={{ width: '100%', maxWidth: '500px' }}>
            <Stack direction={{ xs: 'column', md: 'row' }} sx={{
                alignItems: { xs: 'center', md: 'flex-start' },
                boxShadow: '0px 14px 44px 0px #00000012',
                borderRadius: '16px',
                background: '#fff',
                width: '100%',
                minHeight: '300px',
                padding: { xs: '24px 16px', sm: '50px 44px' },
                boxSizing: 'border-box',

            }}>
                <Box component={'img'} alt='img' src={'/' + props.img} sx={{
                    width: '84px',
                    height: '84px',
                    borderRadius: '100%',
                    marginRight: { xs: 0, md: '40px' },
                }} />
                <Stack direction="column">
                    <Typography variant='body1'
                        sx={{
                            textAlign: { xs: 'center', md: 'unset' },
                            fontSize: { xs: '12px', sm: '16px' },
                            lineHeight: { xs: '22px', sm: '28px' },
                            color: '#444',
                            order: { xs: 2, md: 1 },
                            overflow: "hidden",
                            display: "-webkit-box",
                            WebkitLineClamp: "5",
                            lineClamp: 5,
                            WebkitBoxOrient: "vertical",
                        }}>
                        {props.opinion}
                    </Typography>
                    <Stack direction="column"
                        sx={{
                            marginBottom: { xs: '24px', md: '0' },
                            order: { xs: 1, md: 2 },
                            textAlign: { xs: 'center', md: 'unset' }
                        }}>
                        <Typography variant='body2'
                            sx={{
                                marginTop: { xs: '24px', md: '56px' },
                                textAlign: { xs: 'center', md: 'unset' }
                            }}
                            fontWeight={700}>
                            {props.name}
                        </Typography>
                        <Typography variant='caption'
                            sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                color: '#444',
                                marginTop: '10px',
                                textAlign: { xs: 'center', md: 'unset' }
                            }}>
                            {props.position}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}


export default CustomerItem;