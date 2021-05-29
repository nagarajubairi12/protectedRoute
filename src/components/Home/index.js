// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-section">
      <h1>Home Route</h1>
    </div>
    <LogoutButton />
  </>
)
export default Home
