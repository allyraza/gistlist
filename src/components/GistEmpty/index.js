import React from 'react';
import Loader from '../Loader';

const Gist = ({isLoading, text, loaderText}) => {
	return (
		<article className="gist gist--empty">
      <div className="gist__body">
        {!!isLoading && <Loader/>}
        {!isLoading && <p className="gist__text">{text}</p>}
    	</div>
		</article>
	);
};

export default Gist;
