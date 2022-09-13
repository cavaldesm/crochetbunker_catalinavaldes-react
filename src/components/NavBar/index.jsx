import React from 'react';

export const NavBar = () => {
    return (
        <div className="container">
            <div className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">Mi Marca</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Categoría 1</a>
                        </li>
                        <li>
                           <a className="nav_link" href="#">Categoría 2</a>  
                        </li>
                        <li>
                        <a className="nav_link" href="#">Carrito</a>
                        </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;