import React from 'react'

function Navbar({search, setSearch}) {
  return (
   <nav className='navbar'>
    <h1 className='logo'>Movie App</h1>
    <input
    type='text'
    placeholder='search movie'
    value={search}
    onChange={(e)=>
        setSearch(e.target.value)
    }
    className='search'/>
    
   </nav>
  )
}

export default Navbar;
