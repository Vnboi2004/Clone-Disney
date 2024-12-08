import React from 'react';
import GenresList from '../../Constant/GenresList';
import MovieList from '../MovieList/MovieList';

const GenreMovieList = () => {
    return (
        <div>
            {GenresList.genere.map((item, index) => index <= 4 && (
                <div key={item.id} className='p-8 px-8 md:px-16'>
                    <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
                    <MovieList genreId={item.id} index_={index} />
                </div>
            ))}
        </div>
    );
};

export default GenreMovieList;
