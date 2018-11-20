import React from 'react';

const Header = (props) => {
	return (
		<header className="app__header header">
			<div className="container">
				<div className="header__inner">
          <div className="header__logo">
            <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 136.4 28"><path d="M26 16.4v4.9c0 .7-.1 1.2-.2 1.6s-.4.7-.7 1.1-.8.6-1.3.9c-1.6.8-3.1 1.5-4.5 1.8s-3 .6-4.7.6c-2 0-3.8-.3-5.4-.9s-3-1.5-4.2-2.7-2-2.6-2.6-4.2-1-3.5-1-5.5.3-3.8.9-5.5S3.8 5.4 5 4.3s2.6-2 4.2-2.7 3.6-.9 5.7-.9c1.7 0 3.3.2 4.6.7s2.4 1 3.3 1.7 1.5 1.4 1.9 2.2.6 1.5.6 2.1c0 .7-.2 1.2-.7 1.7s-1.1.7-1.7.7c-.4 0-.7-.1-1.1-.3s-.8-.4-1-.7c-.6-1-1.2-1.8-1.6-2.3s-1-.9-1.8-1.3-1.7-.5-2.9-.5-2.3.2-3.2.6-1.8 1-2.4 1.8S7.6 8.9 7.3 10s-.5 2.4-.5 3.8c0 3 .7 5.3 2.1 7s3.3 2.4 5.8 2.4c1.2 0 2.3-.2 3.4-.5s2.1-.8 3.2-1.4v-4.2h-4c-1 0-1.7-.1-2.2-.4s-.7-.8-.7-1.5c0-.6.2-1 .6-1.4s1-.6 1.7-.6h5.9c.7 0 1.3.1 1.8.2s.9.4 1.2.9.4 1.2.4 2.1zM33.1 5.6c-.7 0-1.2-.2-1.7-.6s-.7-1-.7-1.7.2-1.2.7-1.7 1.1-.7 1.7-.7c.6 0 1.2.2 1.7.6s.7 1 .7 1.7-.2 1.3-.7 1.7-1.1.7-1.7.7zm2.4 4.9v13.9c0 1-.2 1.7-.7 2.2s-1 .7-1.7.7-1.3-.3-1.7-.8-.7-1.2-.7-2.2V10.7c0-.9.2-1.7.7-2.1s1-.7 1.7-.7 1.3.2 1.7.7.7 1.1.7 1.9zM55.9 21c0 1.3-.3 2.5-1 3.4s-1.6 1.7-2.9 2.1-2.8.7-4.6.7c-1.7 0-3.2-.3-4.4-.8s-2.1-1.2-2.7-2-.9-1.6-.9-2.4c0-.5.2-1 .6-1.4s.8-.6 1.4-.6c.5 0 .9.1 1.2.4s.5.6.8 1c.5.9 1.1 1.5 1.8 1.9s1.6.6 2.8.6c1 0 1.7-.2 2.4-.6s.9-.9.9-1.5c0-.8-.3-1.5-1-1.8s-1.7-.8-3.2-1.1c-1.7-.4-3-.8-4-1.3s-1.9-1-2.5-1.8-.9-1.6-.9-2.7c0-1 .3-1.9.9-2.7s1.4-1.5 2.5-2 2.5-.8 4.1-.8c1.2 0 2.4.1 3.3.4s1.8.6 2.5 1 1.2.9 1.5 1.4.5 1 .5 1.5c0 .6-.2 1-.6 1.4s-.9.5-1.6.5c-.5 0-.9-.1-1.3-.4s-.7-.7-1.2-1.3c-.4-.5-.8-.8-1.3-1.1s-1.2-.4-2-.4c-.9 0-1.6.2-2.2.6s-.9.8-.9 1.4c0 .5.2.9.6 1.2s1 .6 1.7.8 1.7.5 3 .8c1.5.4 2.7.8 3.6 1.3s1.7 1.1 2.1 1.8 1 1.7 1 2.5zM60.2 8.2h.5V5.3c0-.8 0-1.4.1-1.8s.2-.8.3-1.1c.2-.3.5-.6.8-.8s.7-.3 1.2-.3c.6 0 1.2.2 1.7.7.3.3.5.7.6 1.1s.1 1.1.1 1.9v3.3h1.8c.7 0 1.2.2 1.6.5s.5.7.5 1.2c0 .6-.3 1.1-.8 1.4s-1.2.4-2.2.4h-.9v8.8c0 .8 0 1.3.1 1.7s.2.7.4 1 .6.4 1.1.4c.3 0 .7 0 1.1-.1s.9-.1 1.1-.1c.4 0 .7.2 1 .5s.5.7.5 1.2c0 .8-.4 1.4-1.3 1.8s-2.1.6-3.6.6-2.6-.3-3.4-.8-1.3-1.2-1.5-2.1-.4-2.1-.4-3.6v-9.2H60c-.7 0-1.2-.2-1.6-.5s-.4-.9-.4-1.4.2-.9.6-1.2.9-.6 1.6-.6zM78.1 3.8v18.8h10.6c.8 0 1.5.2 1.9.6s.7.9.7 1.5-.2 1.1-.7 1.5-1.1.6-2 .6H76.1c-1.1 0-2-.3-2.5-.8s-.7-1.3-.7-2.4V3.8c0-1.1.2-1.8.7-2.4s1.1-.8 1.9-.8c.8 0 1.4.3 1.9.8s.7 1.4.7 2.4zM96.8 5.6c-.7 0-1.2-.2-1.7-.6s-.7-1-.7-1.7.2-1.2.7-1.7 1.1-.7 1.7-.7c.6 0 1.2.2 1.7.6s.7 1 .7 1.7c0 .8-.2 1.3-.7 1.8s-1 .6-1.7.6zm2.4 4.9v13.9c0 1-.2 1.7-.7 2.2s-1 .7-1.7.7-1.3-.3-1.7-.8-.7-1.2-.7-2.2V10.7c0-.9.2-1.7.7-2.1s1-.7 1.7-.7 1.3.2 1.7.7.7 1.1.7 1.9zM119.6 21c0 1.3-.3 2.5-1 3.4s-1.6 1.7-2.9 2.1-2.8.7-4.6.7c-1.7 0-3.2-.3-4.4-.8s-2.1-1.2-2.7-2-.9-1.6-.9-2.4c0-.5.2-1 .6-1.4s.8-.6 1.4-.6c.5 0 .9.1 1.2.4s.5.6.8 1c.5.9 1.1 1.5 1.8 1.9s1.6.6 2.8.6c1 0 1.7-.2 2.4-.6s.9-.9.9-1.5c0-.8-.3-1.5-1-1.8s-1.7-.8-3.2-1.1c-1.7-.4-3-.8-4-1.3s-1.9-1-2.5-1.8-.9-1.6-.9-2.7c0-1 .3-1.9.9-2.7s1.4-1.5 2.5-2 2.5-.8 4.1-.8c1.2 0 2.4.1 3.3.4s1.8.6 2.5 1 1.2.9 1.5 1.4.5 1 .5 1.5c0 .6-.2 1-.6 1.4s-.9.5-1.6.5c-.5 0-.9-.1-1.3-.4s-.7-.7-1.2-1.3c-.4-.5-.8-.8-1.3-1.1s-1.2-.4-2-.4c-.9 0-1.6.2-2.2.6s-.9.8-.9 1.4c0 .5.2.9.6 1.2s1 .6 1.7.8 1.7.5 3 .8c1.5.4 2.7.8 3.6 1.3s1.7 1.1 2.1 1.8 1 1.7 1 2.5zM124 8.2h.5V5.3c0-.8 0-1.4.1-1.8s.2-.8.3-1.1c.2-.3.5-.6.8-.8s.7-.3 1.2-.3c.6 0 1.2.2 1.7.7.3.3.5.7.6 1.1s.1 1.1.1 1.9v3.3h1.8c.7 0 1.2.2 1.6.5s.5.7.5 1.2c0 .6-.3 1.1-.8 1.4s-1.2.4-2.2.4h-.9v8.8c0 .8 0 1.3.1 1.7s.2.7.4 1 .6.4 1.1.4c.3 0 .7 0 1.1-.1s.9-.1 1.1-.1c.4 0 .7.2 1 .5s.5.7.5 1.2c0 .8-.4 1.4-1.3 1.8s-2.1.6-3.6.6-2.6-.3-3.4-.8-1.3-1.2-1.5-2.1-.4-2.1-.4-3.6v-9.2h-.6c-.7 0-1.2-.2-1.6-.5s-.5-.7-.5-1.2.2-.9.6-1.2.9-.8 1.7-.8z"/></svg>
          </div>

          <div className="header__search">
  					<form className="search" onSubmit={props.handleSubmit}>
  						<label className="search__label">http://gist.github.com/</label>
  		      	<input className="search__input" type="text"/>
  		      	<button className="search__button button">Search</button>
  		    	</form>
          </div>
	    	</div>
    	</div>
		</header>
	);
}

export default Header;
