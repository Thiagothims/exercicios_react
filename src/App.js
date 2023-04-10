import styles from './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Question01 from './pages/Question01'
import Question02 from './pages/Question02'
import Question03 from './pages/Question03'
import Question04 from './pages/Question04'
import Question05 from './pages/Question05'
import Question06 from './pages/Question06'
import Question07 from './pages/Question07'

import Footer from './layout/Footer'
import Container from './layout/Container';
import NavBar from './layout/NavBar'

function App() {

  return (
    <BrowserRouter className={styles.app}>

    <NavBar/>

    <Container>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/question01' element={<Question01/>}/>
        <Route path='/question02' element={<Question02/>}/>
        <Route path='/question03' element={<Question03/>}/>
        <Route path='/question04' element={<Question04/>}/>
        <Route path='/question05' element={<Question05/>}/>
        <Route path='/question06' element={<Question06/>}/>
        <Route path='/question07' element={<Question07/>}/>
      </Routes>
    </Container>

    <Footer />

    </BrowserRouter>
  );
}

export default App;
