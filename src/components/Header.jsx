import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const user = useSelector(state => state.user.currentUser);
    const showMenuBurger = () => {
        setShowMenu((prev) => prev = !prev);
    }

    return (
        <nav className="navbar is-light">
            <div className="navbar-brand">
                <NavLink
                    to="/"
                    className={({isActive}) =>
                        'navbar-item is-uppercase' +
                        (isActive ? ' is-active' : '')
                    }>
                    {user ? user.email : 'Todos'}

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
                    {user && (
                        <NavLink
                            to="/add"
                            className={({isActive}) =>
                                'navbar-item' +
                                (isActive ? ' is-active' : '')
                            }>
                            Создать дело
                        </NavLink>
                    )}
                    {!user && (
                        <NavLink
                            to="/register"
                            className={({isActive}) =>
                                'navbar-item' +
                                (isActive ? ' is-active' : '')
                            }>
                            Зарегистрироваться
                        </NavLink>
                    )}

                </div>
                {!user && (
                    <NavLink
                        to='/login'
                        className={({isActive})=>
                            'navbar-item' + (isActive ? 'is-active' : '')}>
                        Войти
                    </NavLink>
                )}
                {user && (
                    <div className="navbar-end">
                        <NavLink
                            to='/logout'
                            className={({isActive})=>
                                'navbar-item' + (isActive ?'is-active' : '')
                            }
                        >
                            Выйти
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    )
}