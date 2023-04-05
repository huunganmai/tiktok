import clsx from 'clsx'
import { Routes, Route, Link } from "react-router-dom"
import { useRef } from 'react'
import './App.css'
import { ThemeContext, ThemeProvider } from './ThemeContext.js'
import Video from './Video'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'

function App() {
    const videoRef = useRef()

    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => [
        videoRef.current.pause()
    ]


    return (

        <div style={{ padding: 20 }} className='app'>
            <Video ref={videoRef} />
            <br />
            <h1>REACT ROUTER</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/news'>News</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </div>

    )

}

export default App