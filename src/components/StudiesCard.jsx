import PrimaryBtn from '@/components/Buttons/PrimaryBtn';
import {useLoaderData} from 'react-router-dom'
import { useEffect, useState } from 'react';
export const photoLoader = async () => {
  const response = await fetch('https://picsum.photos/v2/list?limit=10');
  return response.json();
};
const StudiesCard = () => {


const photos = useLoaderData()

  // const [photos, setPhotos] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://picsum.photos/v2/list?limit=500');
  //       const data = await response.json();
  //       setPhotos(data);
  //     } catch (error) {
  //       console.error('Error ', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);


  // useEffect(() => {
  //   if(data){
  //     console.log(data)
  //     setPhotos((data))
  //   }
  
  // }, [data])
  
  return (
    <section className="py-12 wrapper pt-20">
      <article className="row flex justify-between items-center">
        <div className="left">
          <h3 className="text-violet-500 py-4 text-xl">Our Works</h3>
          <h3 className="text-3xl font-bold text-heading pb-4">Our Case Studies</h3>
        </div>
        <span>
          <PrimaryBtn text="View All" className="hover:text-violet-600" />
        </span>
      </article>
      {/* {loading && <p className="flex justify-center items-center text-3xl text-green-500"> Please Wait photos are loading...</p>} */}
      <article className="section cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        {photos.map(({ author, id, download_url, width, height }) => (
          <div className="card hover:scale-105 duration-300 shadow-md rounded-2xl p-4" key={id}>
            <div className="w-full h-48 mb-4 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={download_url}
                alt={`Photo by ${author}`}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="py-3 text-heading font-semibold text-xl">Photo by {author}</h4>
            <p className="text text-sm text-gray-600">
              {width} × {height}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default StudiesCard;
