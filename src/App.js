// import React from 'react'
// import NavBar from './components/NavBar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Privacy from './components/Privacy'
// import { Routes, Route } from 'react-router-dom'

// function App() {
//   return (
//     <>
//       <Routes>
//         <div className="App">
//           <NavBar />
//           <Hero />
//           <About />
//           <Contact />
//           <Footer />
//         </div>

//         <Route path="/Privacy" element={<Privacy />} />
//       </Routes>
//     </>
//   )
// }

// export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
    </>
  )
}

export default App
