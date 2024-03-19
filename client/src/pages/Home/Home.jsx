import { Link } from 'react-router-dom'
import './Home.scss'

const Home = () => {
    return (
        <div className='home-container' style={{ background: `url(https://images.unsplash.com/photo-1527261460248-b0abfd14c0da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1240&q=100)`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="left">
                <div className="main-content">
                    <div className="title">
                        <hr />
                        <h1 className="heading">
                            Sierra Desert: Morocco
                        </h1>
                        <span className="sub-heading">
                            Marrakech Merzouga
                        </span>
                        <span className="desc">
                            From vibrant Marrakech to the mesmerizing dunes of Merzouga, explore the rich contrasts of Morocco&apos;s Sierra Desert.
                        </span>
                    </div>
                    <Link to={'/map'}>
                        <span className='button'>Map</span>
                    </Link>
                </div>
            </div>
            <div className="right">
                <div className="card" style={{ background: `url(https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=100)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className="card-content" >
                        <hr />
                        <h3 className='heading'>Sierra Nevada USA</h3>
                        <span className='description'>Yosemite National</span>
                    </div>
                </div>
                <div className="card" style={{ background: `url(https://images.unsplash.com/photo-1517094629229-f5e0c2f88440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=100)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                    <div className="card-content" >
                        <hr />
                        <h3 className='heading'>West Iceland</h3>
                        <span className='description'>Langjökull Glacier</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home