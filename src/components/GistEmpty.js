import React from 'react';

const Gist = (props) => {
	return (
		<article className="card">
      <div className="card__body">
        <p>Username <code>alrazi</code> not found.</p>
        <a
          className="link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Search on github
        </a>
    	</div>
		</article>
	);
}

export default Gist;
