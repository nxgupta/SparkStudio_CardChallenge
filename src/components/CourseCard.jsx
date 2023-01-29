import React from 'react'
import { Box, Card, CardContent, Typography, Button, Stack, Rating, Divider, useTheme } from '@mui/material'
import styled from '@emotion/styled';

const CourseCard = ({ rating, games_count, category_name, original_price, discounted_price, name, certificate_count, num_classes, min_age, max_age, pitch, curriculum_outcomes }) => {

  const rate = rating.split(';');
  const perClass = Math.floor(discounted_price / num_classes)
  const off = Math.round((original_price - discounted_price) * 100 / original_price)
  const theme = useTheme();

  let themeColor = theme.palette[category_name].light


  const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
    margin:'50px 10px',
    maxWidth: 350, 
    width: '100%',
    transition: 'transform 0.5s',
    '& .bannerBox':{
      color: '#FFFFFF',
      width: '50%',
      position: 'relative',
      height: '34px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor:theme.palette[category_name].dark
    },
    '& .triangleBox':{
      position:'absolute',
      width: '25px',
      height: '25px',
      right: '-12px',
      top: 4,
      transform: 'rotate(45deg)',
      backgroundColor:theme.palette[category_name].light
    },
    '& .offerBox':{
      display: 'flex',
      justifyContent: 'center', alignItems: 'center',
      color: '#333333',
      px: '10px',
      paddingLeft: '16px',
      borderBottomLeftRadius: '95%',
      height: '70px',
      width: '55px',
      backgroundColor:theme.palette[category_name].dark
    },
    '& .btn':{
      background: 'linear-gradient(90deg, #F3705B 0%, #FCB444 100%)', borderRadius: '25px', padding: '10px 36px',
      textTransform: 'capitalize', color: 'white', cursor: 'pointer'
    },
    '& .benefitsBanner':{ display: 'flex', alignItems: 'center', gap: '8px'},
    
    '& .benefitsText':{fontWeight: 600, fontSize: '14px', lineHeight: '16.8px' },

    '&:hover': {
      transform: 'translateY(-50px)',
      '& .parentBox': {
        backgroundColor: theme.palette[category_name].dark
      },
      '& .bannerBox': {
        backgroundColor: theme.palette[category_name].light,

        '& #sessionBanner':{  
          color: '#333333',
        }
      },
      '& .triangleBox':{
        backgroundColor:theme.palette[category_name].dark
      },
      '& .offerBox':{
        backgroundColor: theme.palette[category_name].light
      },
      '& #name':{
        color:'#FFFFFF'
      },
      '& #reviews':{
        color:'#FFFFFF'
      },
    },
  }
  ))


  return (
    <div>
      <StyledCard>
        <Box bgcolor={themeColor} paddingBottom='20px' className='parentBox'>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Box className='bannerBox'>
              <Typography id='sessionBanner' marginLeft color='white' fontWeight='700'>
                {num_classes} sessions
              </Typography>
              <Box className='triangleBox'>
              </Box>
            </Box>
            <Box className='offerBox' >
              <Typography fontWeight='700'>
                {off}%<br />off
              </Typography>
            </Box>
          </Stack>
          <Box paddingLeft='20px'>
            <Typography sx={{ color: theme.palette[category_name].dark, fontSize: '20px', lineHeight: '30px', fontWeight: '700',maxWidth:'245px' }} id='name' fontFamily='"Poppins" !important'>
              {name}
            </Typography>
            <Stack direction='row' gap='8px' alignItems='center' marginTop='4px'>
              <Rating name="read-only" value={+rate[0]} max={+rate[1]} precision={0.1} readOnly />
              <Typography fontSize='14px' id='reviews'>
                ({rate[2]} reviews)
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Stack>
          <Box padding='16px'>
            <Typography marginBottom='16px'>
              {pitch}
            </Typography>
            <Typography color='#000000' fontWeight='700' marginBottom='16px'>
              Students will achieve
            </Typography>
            <Typography sx={{ display: 'flex', flexDirection: 'column', gap: '12px', lineHeight: '20px', color:'#666666' }}>
            {curriculum_outcomes.map((para,i)=>(<li key={i}>{para}</li>))}
            </Typography>
            <Box my={2}><a style={{ fontWeight: 500, fontSize: '14px', lineHeight: '17px', color: '#333333' }} href="#" underline="always" fontStyle='normal'>
              View Detailed lesson plan</a></Box>
          </Box>
          <Divider sx={{ margin: '0 16px' }} />
          <CardContent>
            <Stack>
              <Stack direction='row' justifyContent='space-between' alignItems=''>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '24px', lineHeight: '29px' }}>
                    ₹ {discounted_price}
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center' gap='4px'>
                  <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '21.6px' }}>
                    ₹ {perClass}
                  </Typography>
                  <Typography variant='span' sx={{ opacity: 0.7 }}>
                    per class
                  </Typography>
                </Box>
              </Stack>
              <del style={{ opacity: 0.7 }}>₹ {original_price}</del>
              <Typography variant='span' sx={{ fontWeight: 500, fontSize: '13px', lineHeight: '16px', color: '#F47759', textAlign: 'center', padding: '10px 0' }}>
                We'll schedule the slots as per your convenience
              </Typography>
            </Stack>
          </CardContent>
          <Stack direction='row' justifyContent='space-between' alignItems='center' bgcolor={themeColor} padding='12px'>
            <Box className='benefitsBanner'>
              <img src='/Images/Activities.png' />
              <Typography className='benefitsText'>8 Activities</Typography>
            </Box>
            <Box className='benefitsBanner'>
              <img src='/Images/Games.png' />
              <Typography className='benefitsText'>{games_count} Games</Typography>
            </Box>
            <Box className='benefitsBanner'>
              <img src='/Images/Certificate.png' />
              <Typography className='benefitsText'>{certificate_count} Certificate</Typography>
            </Box>
          </Stack>
          <Box display='flex' justifyContent='center' alignItems='center'
            margin='22px 0'>
            <Button className='btn'>
              Buy Course
            </Button>
          </Box>
        </Stack>
      </StyledCard>
    </div >
  )
}

export default CourseCard

