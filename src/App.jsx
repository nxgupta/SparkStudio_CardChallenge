import { Stack } from '@mui/system'
import './App.css'
import CourseCard from './components/CourseCard'
import Header from './components/header'


function App() {

  return (
    <div className="App">
      <Stack direction='column'>
        <Stack direction='row' justifyContent='space-around'
        gap='5px' >
          <Header category='Junior' minAge='6' maxAge='10'/>
          <Header category='Senior' minAge='10' maxAge='15'/> 
        </Stack> 
      <CourseCard/>
      </Stack>
    </div>      
  )
}

export default App
