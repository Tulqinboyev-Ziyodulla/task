import React, { useEffect, useState } from 'react'
import { useAxios } from '../hook/useAxios'
import { API_KEY } from '../hook/useAnv'
import CustomCard from '../components/CustomCard'


function NowPlaying() {
  const [product, setProduct] = useState([])
  const [isLoading, setIsloading] = useState(false)
  useEffect(() => {
    useAxios().get(`/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`).then(res => {
      setProduct
      (res.data.results)
    })
  },[])
  return (
    <div className='p-10'>
      <ul className="flex flex-wrap justify-between gap-4">
        {product.map(item => <li key={item.id} className="mx-auto"> <CustomCard  item={item}/> </li> )}
        
      </ul>
    </div>
  )
}

export default NowPlaying
