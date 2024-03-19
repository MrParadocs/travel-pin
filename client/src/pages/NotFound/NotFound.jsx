import { Link } from 'react-router-dom'

import './NotFound.scss'
import {GiAnubis} from 'react-icons/gi'

const NotFound = () => {
    return (
        <div className='notfound-container'>
            <h3>Whoops! 404</h3>
            <span>Watcha lookin for? Sherlock</span>
            <Link to={'/'} className='home-button'><GiAnubis className='icon'/></Link>
        </div>
    )
}

export default NotFound