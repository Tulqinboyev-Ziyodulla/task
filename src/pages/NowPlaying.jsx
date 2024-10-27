import React, { useEffect, useState } from 'react';
import { useAxios } from '../hook/useAxios';
import { API_KEY } from '../hook/useEnv';
import CustomCard from '../components/CustomCard';
import MoviePage from '../components/MoviePage'

function NowPlaying() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    useAxios().get(`/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`)
      .then(res => {
        setProduct(res.data.results);
        setIsloading(false);
      })
      .catch(error => {
        console.error(error);
        setIsloading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center text-xl font-semibold text-gray-700">
          Loading...
        </div>
      </div>
    );
  }
  

  return (
    <>
    <MoviePage URL={"now_playing"} />
    <div className='p-10'>
      <ul className="flex flex-wrap justify-between gap-4">
        {product.map(item => (
          <li key={item.id} className="mx-auto">
            <CustomCard item={item} />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default NowPlaying;
