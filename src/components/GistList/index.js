import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Gist from '../Gist';
import GistEmpty from '../GistEmpty';


const GistList = ({gists, forks, isLoading}) => {
  return (
    <div className="container">
      <section className="gistlist">

        <header className="gistlist__header">
          {!!gists.length && <h3 className="gistlist__title"><strong>{gists.length}</strong> {gists.length > 1 ? "gists" : "gist"} found</h3>}
        </header>

        <div className="gistlist__body">
          {!gists.length && <GistEmpty text={"Please enter a username to search."} isLoading={isLoading}/>}
          {!!gists.length && gists.map((gist, i) => <Gist key={i} forks={forks[gist.id]} className="gistlist__card" gist={gist}/>)}
        </div>
      </section>
    </div>
  );
};

GistList.propTypes = {
  gists: PropTypes.array
};

export default GistList;
