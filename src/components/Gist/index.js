import React from 'react';
import './styles.css';
import Badge from '../Badge';
import Avatar from '../Avatar';

const FORKS_LIMIT = 3;

const Gist = ({ gist, forks, className }) => {
  var files = Object.values(gist.files).filter(i => !!i.language);  
  var avatars = !!forks && forks.length > 0 ? forks.slice(-FORKS_LIMIT, forks.length) : [];

  return (
		<article className={"gist " + className}>
			<div className="gist__body">
        <div className="gist__info">
          <a className="gist__link link link--bold" href={gist.url} target="_blank" rel="noopener noreferrer">{gist.url}</a>
          {!!gist.description && <p className="gist__text u-margin-top">{gist.description}</p>}
        </div>
        <div className="gist__forks">
          {avatars.map((f, i) => <Avatar className="gist__avatar" key={i} link={f.html_url} alt={f.owner.login} url={f.owner.avatar_url}/>)}
        </div>
			</div>
      <footer className="gist__footer">
        <div className="gist__badge">
          {files.map((file, i) => <Badge text={file.language} key={i}/>)}
        </div>
      </footer>
		</article>
	);
};

export default Gist;