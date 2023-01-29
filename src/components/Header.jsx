import { Box, Button, Stack } from "@mui/material"
import data from "../utils/data"
import { useTheme } from "@emotion/react"

const Header = ({ category, minAge, maxAge, setState, show }) => {
  const handleShow = (category) => {
    if (category === 'Junior') {
      setState({
        juniorData: true,
        seniorData: false
      })
    }
    else {
      setState({
        juniorData: false,
        seniorData: true
      })
    }
  }

  let theme = useTheme();
  let { category_name } = data[0];

  return (
    <Box sx={{
      backgroundColor: show ? theme.palette[category_name].dark : theme.palette[category_name].light,
      position: 'relative',
      height: '100px',
      width: '147px',
      borderRadius: '4px',
      color: show?'#FFFFFF':'#333333',
      cursor: 'pointer',
      margin: "20px 0 30px 0",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
      onClick={() => handleShow(category)}>
      <Stack sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '36px',
          fontFamily: '"Poppins" !important'
        }}>{category}</Box>
        <Box sx={{
          fontWeight: '500',
          fontSize: '18px',
          lineHeight: '27px',
          fontFamily: '"Poppins" !important'
        }}>(Age {minAge}-{maxAge})</Box>
      </Stack>
      {show ? <Box
        sx={{
          backgroundColor: show ? theme.palette[category_name].dark : theme.palette[category_name].light,
          width: "20px",
          height: "20px",
          transform: "rotate(45deg)",
          position: "absolute",
          bottom: "-10px",
          zIndex: 5
        }}
      ></Box> : null}
    </Box>
  )
}
export default Header