// src/page/Header.jsx
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            <Link to='/'>Main</Link>
            <Link to='/myPage'>MyPage</Link>
        </div>
    )
}

export default Header;