import { Stack } from '@mui/system'
import './App.css'
import Header from './components/header'
import data from './utils/data'
import { useState } from 'react'
import { useEffect } from 'react'
import Display from './components/Display'

function App() {
  const [juniorData, setJuniorData] = useState([]);
  const [seniorData, setSeniorData] = useState([]);
  const [state,setState]=useState({
    juniorData:true,
    seniorData:false,
  })

  useEffect(() => {
    setJuniorData(data.filter(item => item.min_age < 10))
    setSeniorData(data.filter(item => item.max_age >= 10))
  }, [])

  return (
    <div className="App">
      <Stack direction='column' alignItems='center' sx={{overflowX:'scroll'}}>
        <Stack direction='row' justifyContent='space-around' gap='18px' maxWidth='350px'>
          <Header category='Junior' minAge='6' maxAge='9' show={state.juniorData} setState={setState}/>
          <Header category='Senior' minAge='10' maxAge='15' show={state.seniorData} setState={setState}/>
        </Stack>
        <Display juniorData={juniorData} seniorData={seniorData} state={state}/>
      </Stack>
    </div>
  )
}

export default App
