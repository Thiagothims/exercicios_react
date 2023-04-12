import styles from './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Questions from './pages/Questions'
import Question from './pages/Question'
import About from './pages/About'

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
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/question/:id' element={<Question/>}/>
      </Routes>
    </Container>

    <Footer />

    </BrowserRouter>
  );
}

export default App;
