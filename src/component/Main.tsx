import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Menubar from './Menubar'
import Home from './Home'


const Main = () => {

  const [hotels,setHotels] =useState([])

  const getHotels = async () =>{
    const url = 'https://airbnb13.p.rapidapi.com/search-geo?ne_lat=52.51&ne_lng=13.41&sw_lat=52.41&sw_lng=13.31&checkin=2025-01-12&checkout=2025-01-13&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '3da2592f3amsh912eb163e7f77cbp1b0c2fjsnd131cc26c1ec',
		'x-rapidapi-host': 'airbnb13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const data = await response.json();
	setHotels(data.results);
} catch (error) {
	console.error(error);
}
  }

  useEffect(()=>{
    getHotels();
   }, [])

  return (
    <div>
       <Navbar />
       <Menubar />
       <Home hotels={hotels}/>

    </div>
  )
}

export default Main