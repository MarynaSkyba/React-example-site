import React, { useEffect, useState } from "react";
import GalleryItem from './GalleryItem';
import './Gallery.css';
// import img from '../../images/img-1.jpg'




function Gallery() {
    const [data, setData] = useState([]);

    const getData=()=>{
        fetch('gallery.json', {
            headers: {
                'Content-Type': 'text/html',
                'Accept': 'application/json'
            }
        })
          .then(function(response){
            return response.json();
          })
            .then(function (json) {
                setData(json)
          });
    }
    
      useEffect(()=>{
        getData()
      },[])

  return (
      <div className='gallery'>
          <h1>Look at this amazing moments</h1>
          <div className='gallery__container'>
              <div className='gallery__wrapper'>
                  <ul className='gallery__items'>
                      {
                          data.gallery && data.gallery.map((item, index) => <GalleryItem index={index} src={item.src} description={item.description} label={item.label} path={item.path} />
)}
                      

                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Gallery