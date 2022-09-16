import React from 'react'

export default function Header() {
  const toggleMobileNav = () => {
    const toggle = document.getElementById('mobile');
    toggle?.classList.toggle("open");
  }
  return (
    <header>
      <h1 className='logo'>RITA</h1>
      <nav className='mainNav'>
        <ul className='nav'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/resume'>Resume</a></li>
          <li><a href='/portfolio'>Portfolio</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>

      <nav id='mobile' className='bars' onClick={toggleMobileNav}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        <ul className='mobileMainNav'>
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About</a></li>
          <li><a href='/resume'>Resume</a></li>
          <li><a href='/portfolio'>Portfolio</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>

      <div className='socialMediaIcons'>
        <h3>icons</h3>
      </div>
    </header>
  )
}
