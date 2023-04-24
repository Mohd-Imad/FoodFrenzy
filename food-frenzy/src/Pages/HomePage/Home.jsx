import React from 'react'
import { Link } from 'react-router-dom'
import HeaderTop from '../../Components/Home/HeaderTop'
import HeaderMiddle from '../../Components/Home/HeaderMiddle'
import Navbar from '../../Components/Home/Navbar'

const Home = () => {
    return <>
        <h1>Home</h1>
        <HeaderTop />
        <HeaderMiddle />
        <Navbar />
        {/* <Link to='/register'
            style={{ border: '2px solid black', padding: '1rem', backgroundColor: '#253d4e', color: '#fff', textDecoration: 'none',marginTop:'2rem' }}>Open Popup</Link> */}
    </>
}

export default Home
