import React, { useEffect, useState } from 'react';
import { useAxios } from '../hook/useAxios';
import { API_KEY } from '../hook/useEnv';
import CustomCard from '../components/CustomCard';

function MoviePage({ URL }) {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axiosInstance.get(`/movie/${URL}?language=en-US&page=${page}&api_key=${API_KEY}`);
        setProduct(res.data.results);
        setTotalPage(res.data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [page, URL, axiosInstance]);

  return (
    <>
      <div className='p-5 flex flex-wrap'>
        <div className="flex flex-wrap justify-between gap-4 p-5">
          {product.length === 0 ? (
            <div className="flex items-center justify-center w-[300px] h-[400px] bg-gray-100 rounded-lg shadow-lg">
              <div className="text-center text-xl font-semibold text-gray-700 animate-pulse">
                Loading...
              </div>
            </div>
          ) : (
            product.map(item => <CustomCard key={item.id} item={item} />)
          )}
        </div>
        <div className="flex flex-wrap justify-between gap-4 p-5">
          {product.length === 0 ? (
            <div className="flex items-center justify-center w-[340px] h-[400px] bg-gray-100 rounded-lg shadow-lg">
              <div className="text-center text-xl font-semibold text-gray-700 animate-pulse">
                Loading...
              </div>
            </div>
          ) : (
            product.map(item => <CustomCard key={item.id} item={item} />)
          )}
        </div>
        <div className="flex flex-wrap justify-between gap-4 p-5">
          {product.length === 0 ? (
            <div className="flex items-center justify-center w-[340px] h-[400px] bg-gray-100 rounded-lg shadow-lg">
              <div className="text-center text-xl font-semibold text-gray-700 animate-pulse">
                Loading...
              </div>
            </div>
          ) : (
            product.map(item => <CustomCard key={item.id} item={item} />)
          )}
        </div>
        <div className="flex flex-wrap justify-between gap-4 p-5">
          {product.length === 0 ? (
            <div className="flex items-center justify-center w-[300px] h-[400px] bg-gray-100 rounded-lg shadow-lg">
              <div className="text-center text-xl font-semibold text-gray-700 animate-pulse">
                Loading...
              </div>
            </div>
          ) : (
            product.map(item => <CustomCard key={item.id} item={item} />)
          )}
        </div>
      </div>
    </>
  );
}

export default MoviePage;
