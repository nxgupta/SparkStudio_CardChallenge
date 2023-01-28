import React from 'react'
import data from '../utils/data'
import { Box, Card, CardActions, CardContent, CardHeader, Typography, Button, Link, Stack, Rating, Divider } from '@mui/material'
const CourseCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <Box bgcolor='#D5F1FE;
' paddingBottom='20px'>
          <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Box sx={{
              backgroundColor: '#38BEFF',
              color: 'white',
              width: '50%',
              position: 'relative',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
            }}>
              <Typography marginLeft
                color='white' fontWeight='700'>
                18 sessions
              </Typography>
              <Box sx={{
                position: 'absolute',
                width: '25px',
                height: '25px',
                right: '-12px',
                top: 4,
                backgroundColor: 'white',
                transform: 'rotate(45deg)',
                backgroundColor: '#D5F1FE',
              }}>

              </Box>
            </Box>
            <Box bgcolor='#38BEFF' sx={{
              display: 'flex',
              justifyContent: 'flex-end', alignItems: 'center',
              color: 'black',
              px: '10px',
              paddingLeft: '16px',
              borderBottomLeftRadius: '95%',
              height: '70px',
              width: '55px',

            }} >
              <Typography fontWeight='700'>
                20%<br />off
              </Typography>
            </Box>
          </Stack>
          <Box paddingLeft='20px'>
            <Typography sx={{ color: 'black', fontSize: '20px', lineHeight: '30px', fontWeight: '700' }}>
              Public Speaking Learn
            </Typography>
            <Stack direction='row' gap='8px' alignItems='center' marginTop='4px'>
              <Rating name="read-only" value={4} readOnly />
              <Typography fontSize='14px'>
                (50 reviews)
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Stack>
          <Box padding='16px'>
            <Typography marginBottom='16px'>
              Master the most sought-after 21st century skill oratory, through interactive speaking activities
            </Typography>
            <Typography fontWeight='700' marginBottom='16px'>
              Students will achieve
            </Typography>
            <Typography sx={{display:'flex', flexDirection:'column', gap:'16px'}}>
              <li>
                understand elements and structure of a story
              </li>
              <li>
                practice weaving stories with the addition of elements and details
              </li>
              <li>
                learn to narrate with confidence using expressions and voice modulation
              </li>
              <li>
                + ....
              </li>
            </Typography>
            <Box my={2}><a style={{fontWeight: 500, fontSize: '14px', lineHeight: '16.8px', color:'black'}} href="#" underline="always">
              View Detailed lesson plan</a></Box>
          </Box>
          <Divider sx={{margin:'0 16px'}}/>
          <CardContent>
            <Stack>
              <Stack direction='row' justifyContent='space-between' alignItems=''>
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '24px', lineHeight: '28.8px' }}>
                    ₹ 9999
                  </Typography>
                </Box>
                <Box display='flex' alignItems='center' gap='4px'>
                  <Typography sx={{ fontWeight: 700, fontSize: '18px', lineHeight: '21.6px' }}>
                    ₹ 200
                  </Typography>
                  <Typography variant='span' sx={{ opacity: 0.7 }}>
                    per class
                  </Typography>
                </Box>
              </Stack>
              <del style={{ opacity: 0.7 }}>₹ 5999</del>
              <Typography variant='span' sx={{fontWeight:500, fontSize:'13px', lineHeight:'15.6px', color:'#F47759', textAlign:'center', padding:'15px 0'}}>
                We'll schedule the slots as per your convenience
              </Typography>
            </Stack>
          </CardContent>
          <Stack direction='row' justifyContent='space-between' alignItems='center' bgcolor='#D5F1FE' padding='12px'>
              <Box sx={{display:'flex', alignItems:'center', gap:'8px'}}>
                <img src='/Images/Activities.png'/>
                <Typography sx={{fontWeight:600, fontSize:'14px', lineHeight:'16.8px'}}>8 Activities</Typography>
              </Box>
              <Box sx={{display:'flex', alignItems:'center', gap:'8px'}}>
                <img src='/Images/Games.png'/>
                <Typography sx={{fontWeight:600, fontSize:'14px', lineHeight:'16.8px'}}>3 Games</Typography>
              </Box>
              <Box sx={{display:'flex', alignItems:'center', gap:'8px'}}>
                <img src='/Images/Certificate.png'/>
                <Typography sx={{fontWeight:600, fontSize:'14px', lineHeight:'16.8px'}}>1 Certificate</Typography>
              </Box>
            </Stack>
          <Box display='flex' justifyContent='center' alignItems='center'
          margin='22px 0'>
          <Button sx={{background: 'linear-gradient(90deg, #F3705B 0%, #FCB444 100%)', borderRadius:'25px', padding:'10px 36px',
        textTransform:'capitalize', color:'white', cursor:'pointer'}}>
          Buy Course
          </Button>
          </Box>  
        </Stack>
      </Card >
    </div >
  )
}

export default CourseCard
