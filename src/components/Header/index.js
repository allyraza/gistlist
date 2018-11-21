import React from 'react';
import './styles.css';
import Logo from '../Logo';

const Header = ({ handleChange, handleSubmit }) => {
	return (
		<header className="app__header header">
			<div className="container">
				<div className="header__inner">

          <div className="header__logo">
		  	    <Logo />
          </div>

          <div className="header__search">
            <form className="search" onSubmit={handleSubmit}>
              <label className="search__label">http://gist.github.com/</label>
              <input className="search__input" onChange={handleChange} type="text"/>
              <button className="search__button button">Search</button>
            </form>
          </div>
          
	    	</div>
    	</div>
		</header>
	);
};

export default Header;
