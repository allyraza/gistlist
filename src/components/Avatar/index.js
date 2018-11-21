import React from 'react';
import './styles.css';

const Avatar = ({alt, url, link, className}) => {
  return (
    <div className={"avatar " + className }>
      {!!link && <a href={link} className="avatar__link" target="_blank" rel="noopener noreferrer">View Gist</a>}
      <img alt={alt} className="avatar__image" height="40" width="40" src={url}/>
    </div>
  );
};

export default Avatar;