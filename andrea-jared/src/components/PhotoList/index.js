import React, { useState } from 'react';

const PhotoList = ({category }) => {
    const [photos] = useState([
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
    ]);
    
    const currentPhotos = photos.filter(photo => photo.category === category);

    return (
        <div>
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/project_snips/${category}/${i}.jpg`).default}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default PhotoList;
  


