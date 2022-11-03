import {Link, NavLink} from 'react-router-dom'
import * as userService from "../utilities/users-service"

const Navbar = ({user, setUser}) => {
    const handleLogOut = () => {
        // Delegate to the users-service
        userService.logOut();
    // Update state will also cause a re-render
        setUser(null)
    }
    return (
     <nav className='nav'>
        <NavLink to='/orders'>Order History</NavLink> {' '} | {' '}
        <NavLink to = '/orders/new'>New Order</NavLink> {' '} | {' '}
        <Link to="" onClick={handleLogOut}>Log Out</Link> {' '} | {' '}
        Welcome, {user.name}!
    </nav>
    )
}

export default Navbar