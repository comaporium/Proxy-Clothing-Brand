import React, {useState} from 'react'
import Home from './Home'
import All from './All'
import Detail  from './Detail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Korisnik from './Korisnik'

const App = () => {
const [bucket, setBucket] = useState([]);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home bucket={bucket} setBucket={setBucket}/>} />
          <Route path='/All/:parent' element={<All/>} />
          <Route path='/Detail/:idartikla' element={<Detail bucket={bucket} setBucket={setBucket}/>} />
          <Route path='/Korisnik' element={<Korisnik bucket={bucket} setBucket={setBucket}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App