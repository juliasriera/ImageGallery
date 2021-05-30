import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {GlobalStyle, WrapperImages, Img} from './Galeria.style'
import axios from 'axios';

function App() {

  const [hasMore, setHasMore] = useState(true);
  const [images, setImages] = useState([]);
  const [items, setItems] = useState(15);
  const [page, setPage] = useState(1);

//Primera llamada de la API
useEffect(() => {
  fetchImages();
},[]);

// Cargar Imagenes
const fetchImages = () => {

setTimeout(() => {
axios
  .get(
    `https://jsonplaceholder.typicode.com/photos??page=${page}&_limit=${items}`
    )
    .then(res => {
      setImages(res.data)
    })

      setItems(items + 15)
      setPage(page + 1)

}, 500);  

  if(items >= 5000) {

      setHasMore(false)
  } 
};

// Eliminar Imagen

const deleteImg = (id) => {

  const newPhoto = images.filter( function (x){
    return x !== id;
  })
  setImages(newPhoto)
}
  return (
    <div>
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={hasMore}
        loader={<h4>Cargando...</h4>}
      >
        <WrapperImages>
          {images.map((image, index) => (
           <Img alt={image.id} src={image.thumbnailUrl} key={index} onClick={() => deleteImg(image)}/>
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;

