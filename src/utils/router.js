import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/about'
import Contact from '../components/contact'
import Home from '../components/home'
import Portfolio from '../components/portfolio'
import Resume from '../components/resume'

export default function Router() {
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/resume' element={<Resume />} />

            <Route path='*' element={<Home />} />

        </Routes>

    )
}
