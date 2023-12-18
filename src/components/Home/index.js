import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <div className="home-container">
        <h1>Home</h1>
      </div>
    </>
  )
}

export default Home
