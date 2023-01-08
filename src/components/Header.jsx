import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export const Header = () =>{
  const [showMenu, setShowMenu] = useState(false);
  const showMenuBurger = () =>{
        setShowMenu((prev)=>prev=!prev);
  }

  return (
        <nav className="navbar is-light">
        <div className="navbar-brand">
          <NavLink 
            to="/"
            className={({isActive})=>
            'navbar-item is-uppercase' +
            (isActive ? ' is-active' : '')
            }>
            Todos
          </NavLink>
          <Link to="#"
             className={showMenu ?
                        'navbar-burger is-active' :
                        'navbar-burger'}
             onClick={showMenuBurger}>
            <span></span>
            <span></span>
            <span></span>
          </Link>
        </div>
        <div 
        className={showMenu ?
                       'navbar-menu is-active' :
                       'navbar-menu'}
              onClick={showMenuBurger}
              >
          <div className="navbar-start">
            <NavLink 
              to="/add"
              className={({isActive})=>
              'navbar-item' +
              (isActive ? ' is-active' : '')
              }>
            Создать дело
            </NavLink>
          </div>
        </div>
      </nav>
  )
}