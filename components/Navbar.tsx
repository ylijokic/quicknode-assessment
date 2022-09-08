import React from 'react'

export interface NavbarProps {
    message?: string;
}
const Navbar = ({ message }: NavbarProps) => {
  return (  
    <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
            <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row justify-center">
                <li className="nav-item">
                <p 
                    className="font-bold text-xl block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" 
                    data-mdb-ripple="true" 
                    data-mdb-ripple-color="light"
                >
                    {message}
                </p>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
