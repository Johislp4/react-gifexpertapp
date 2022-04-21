import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    //'data:images' lo utilizamos para renombrar 'data' como 'images' que es más intuitivo en el contexto del componente
    const { loading, data:images } = useFetchGifs(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading...</p>}
            <div className='card-grid'>
                {images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}
