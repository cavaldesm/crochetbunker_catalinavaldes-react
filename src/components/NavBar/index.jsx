import React from 'react';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="container">
            <div className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to='/'>Mi Marca</NavLink>
                </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to='/categoria/films'>Categoría 1</NavLink>
                        </li>
                        <li>
                           <NavLink className="nav_link" to='/categoria/series'>Categoría 2</NavLink>  
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