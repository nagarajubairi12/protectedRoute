// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav>
    <div className="header-section">
      <Link to="/" className="nav-list">
        <li>Home</li>
      </Link>
      <Link to="/about" className="nav-list">
        <li>About</li>
      </Link>
    </div>
  </nav>
)
export default Header
