import { Box, Stack, Typography } from "@mui/material"

const Header = ({category,minAge,maxAge}) => {
  return (
      <Stack display='flex' justifyContent='center' alignItems='center' sx={{
        backgroundColor:'#003F5C',
        position: 'relative',
        height: '100px',
        width: '125px',  
        borderRadius:'4px',
        color: 'white',
        cursor:'pointer',
        margin: "30px 0px"
      }}
      >
        <span>{category}</span>
        <span>(Age {minAge}-{maxAge})</span>
        <Box
            sx={{
              background: "#003F5C",
              width: "20px",
              height: "20px",
              transform: "rotate(45deg)",
              position: "absolute",
              bottom: "-10px",
            }}
          ></Box>
      </Stack>
  )
}
export default Header