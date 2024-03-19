import { useEffect, useState } from 'react'
import Map, { Marker, Popup, NavigationControl } from 'react-map-gl'
import { BsFillStarFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import axios from 'axios'
import dayjs from 'dayjs'
import Geocoder from '../../components/Geocoder.jsx'
import { toast } from 'react-toastify';

import './PinMap.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

const PinMap = () => {
    const currentUser = localStorage.getItem('username');
    const [pins, setPins] = useState([])

    const fetchPins = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_SERVER}/api/pin`);
            setPins(res.data)
            // console.log(res.data)
        } catch (error) {
            toast.error('Error', {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    }


    useEffect(() => {
        fetchPins();
    }, [])



    const [style, setStyle] = useState('mapbox://styles/mapbox/streets-v12')
    const [selectedLocation, setSelectedLocation] = useState({})
    const [newPlace, setNewPlace] = useState(null);

    const handleChangeStyle = (event) => {
        const selectedStyle = event.target.value;
        let newStyle = 'mapbox://styles/mapbox/streets-v12';

        if (selectedStyle === 'Dark') {
            newStyle = 'mapbox://styles/mapbox/navigation-night-v1';
        } else if (selectedStyle === 'Satellite') {
            newStyle = 'mapbox://styles/mapbox/satellite-streets-v12';
        }
        setStyle(newStyle);
    }

    // console.log(newPlace)

    const handleAddClick = (e) => {
        if (currentUser != null) {
            const [long, lat] = e.lngLat.toArray();
            setNewPlace({
                long,
                lat,
            })
        }
        else {
            toast.warn('Please login to start pinning', {
                position: "bottom-right",
                hideProgressBar: true,
                theme: 'dark',
                autoClose: 1000,
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPlace((prevData) => ({ ...prevData, [name]: value }));
    };
    // console.log(pins)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPlace.title == null || newPlace.desc == null || newPlace.rating == null) {
            toast.warn('All fields must be filled', {
                position: "bottom-right",
                hideProgressBar: true,
                theme: 'dark',
                autoClose: 1000,
            });
        } else {
            try {
                const res = await axios.post(`${import.meta.env.VITE_SERVER}/api/pin`, {
                    username: currentUser,
                    ...newPlace
                })
                setPins([...pins, res.data]);
                setNewPlace(null)
                // window.location.reload(true)
            } catch (error) {
                toast.error('Error in pinning the destination', {
                    position: "bottom-right",
                    autoClose: 1500,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "dark",
                });
            }
        }
    }

    const deletePins = async (id) => {
        try {
            axios.delete(`${import.meta.env.VITE_SERVER}/api/pin/${id}`)
            fetchPins();
            window.location.reload(false)
        } catch (error) {
            toast.error('Error in deleting the pin', {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    }
    // console.log(selectedLocation)

    return (
        <div>
            <Map
                initialViewState={{
                    latitude: 28.644800,
                    longitude: 77.216721,
                    zoom: 3,
                    doubleClickZoom: false,
                    pitch: 0,
                }}
                style={{ width: '100%', height: '100vh' }}
                mapboxAccessToken={import.meta.env.VITE_MAPBOX_KEY}
                mapStyle={style}
                onDblClick={handleAddClick}
            >
                <select className='change-style' onChange={handleChangeStyle}>
                    <option>Theme: Street</option>
                    <option value={'Dark'}>Dark</option>
                    <option value={'Satellite'}>Satellite</option>
                </select>

                {pins.map((marker) => (
                    <div key={marker._id}>
                        <Marker
                            longitude={marker.long}
                            latitude={marker.lat}
                            style={{ cursor: 'pointer' }}
                            onClick={() => setSelectedLocation(marker._id)}
                            color={marker.username === currentUser ? '#DE3163' : '#ffbf00'}
                        />

                        {selectedLocation === marker._id && (
                            <Popup
                                onClose={() => setSelectedLocation({})}
                                anchor='top'
                                closeOnClick={false}
                                closeOnMove={true}
                                closeButton={true}
                                latitude={marker.lat}
                                longitude={marker.long}
                                style={{ color: '#333', fontFamily: 'Poppins', fontSize: '1rem' }}
                            >
                                <div className='card'>
                                    <label className='di'>Place:</label>
                                    <h4 className='place'>{marker.title}</h4>
                                    <label className='di'>Review</label>
                                    <p className='desc'>{marker.desc}</p>
                                    <label className='di'>Rating</label>
                                    <div className='stars'>
                                        {/* {console.log(marker.rating)} */}
                                        {Array.from({ length: marker.rating }, (_, index) => (
                                            <BsFillStarFill key={index} className='star' />
                                        ))}
                                    </div>
                                    <label className='di'>Information</label>
                                    <span className='username'>Created by: <b>{marker.username}</b></span>
                                    <span className='date'>Created {dayjs(marker.createdAt).format('DD/MM/YYYY')}</span>
                                    <MdDelete style={{
                                        color: currentUser === marker.username ? '#FA8072' : '#ccc',
                                        top: '1rem',
                                        right: '3rem',
                                        fontSize: '1.5rem',
                                        position: 'absolute',
                                        cursor: 'pointer',
                                    }} onClick={marker.username === currentUser ? () => deletePins(marker._id) : null} />
                                </div>
                            </Popup>
                        )}
                        {newPlace &&
                            (<Popup longitude={newPlace.long} latitude={newPlace.lat}
                                anchor="top"
                                closeButton={true}
                                closeOnClick={false}
                                maxWidth='none'
                                closeOnMove={false}
                                onClose={() => setNewPlace(null)}>
                                <div className='newpop'>
                                    <>
                                        <form onSubmit={handleSubmit}>
                                            <label className='pform'>Title</label>
                                            <input
                                                name='title'
                                                placeholder='Enter a title'
                                                onChange={handleChange}
                                            />
                                            <label className='pform'>Review</label>
                                            <textarea
                                                name='desc'
                                                placeholder='Say something about this place'
                                                onChange={handleChange}
                                            />
                                            <label className='pform'>Rating</label>
                                            <select name='rating' onChange={handleChange}>
                                                <option value={1}>1</option>
                                                <option value={2}>2</option>
                                                <option value={3}>3</option>
                                                <option value={4}>4</option>
                                                <option value={5}>5</option>
                                            </select>
                                            <button className='submitButton' type="submit">Add Pin</button>
                                        </form>
                                    </>
                                </div>
                            </Popup>
                            )
                        }
                    </div>
                ))}
                <Geocoder />
                <NavigationControl />
            </Map>
        </div>
    )
}

export default PinMap