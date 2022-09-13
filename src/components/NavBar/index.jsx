import React from 'react';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import './navBar.css';

export const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to='/'>Inicio</NavLink>
                </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to='/categoria/productos'>Productos</NavLink>
                        </li>
                        <li>
                           <NavLink className="nav_link" to='/categoria/sale'>En Oferta</NavLink>  
                        </li>
                        <li>
                        <NavLink className="nav_link" to='/cart'>
                            <CartWidget />
                        </NavLink>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;