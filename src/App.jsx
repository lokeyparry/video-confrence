import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import JoinPage from './pages/JoinPage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinPage />} />        
        <Route path="/*" element={<HomePage />} />        

        {/* Add more routes here */}
      </Routes>
       {/* Add routes here */}

    </BrowserRouter>
  )
}

export default App
