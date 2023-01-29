import { Stack } from "@mui/system"
import CourseCard from "./CourseCard"

const Display = ({ juniorData, seniorData, state}) => {
  return (
    <>
      <Stack gap='20px' display='flex' sx={{flexDirection: { xs: 'column', md: 'row' }}} xs={12} sm={6}>
        {state.juniorData ? juniorData.map(course => <CourseCard {...course} key={course.rating} />)
          :
          seniorData.map(course => <CourseCard {...course} key={course.rating} />)}
      </Stack>

    </>
  )
}
export default Display