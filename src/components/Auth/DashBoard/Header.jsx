import React from 'react'

const Header = (props) => {

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // window.location.reload()
  }

  

  return (
    <div className='flex flex-1 justify-between gap-[45rem]  items-end'>
      <h1 className='text-xl font-medium'>Hello, <br /><span className='text-3xl font-bold'>{props.user === 'admin' ? <sapn>Admin</sapn> : <span>{props.data.firstName}</span>}</span></h1>
      <button
      
        onClick={logOutUser}
      className= 'rounded-lg  text-white font-bold text-xs bg-red-500 px-2 py-1'>Log Out</button>
    </div>
  )
}

export default Header
