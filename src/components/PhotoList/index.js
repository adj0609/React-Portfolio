import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const PhotoList = () => {
    const photos = [
      {
        name: 'Book-Nook-V2',
        category: 'Projects',
        description:
        'A book site for children using mongodb, apollo, react and google-books API so children and parents can keep track of how many books they read and can search through a wide veriety of books.'
    },

      {
            name: 'Meal Time Roulette',
            category: 'Projects',
            description:
            'A game using HTML, CSS, javaScript and serverside Apis to randomize Meal recipes for the family.'
        },
        {
            name: 'Through the Looking Glass',
            category: 'Projects',
            description:
            'A blog using Handlbarsjs, CSS, Mysql to create a user blog and database to collect data.'
        }
    ];
    
    //const currentPhotos = photos.filter(photo => photo.category === category);

    return (
        <div>
        <div className="flex-row">
          {photos.map((image, i) => (
            <div>
             <h1 data-testid="h1tag">{capitalizeFirstLetter(image.name)}</h1> 
             <p>{image.description}</p>
            <img
              src={require(`../../assets/project_snips/${i}.png`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={i}
            />
            
            <p>
              this is me testing
            </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PhotoList;
  


