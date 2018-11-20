import React from 'react';
import PropTypes from 'prop-types';
import Gist from './Gist';
import GistEmpty from './GistEmpty';

const GistList = ({ items }) => {
  return (
    <div className="container">
      <section className="gist-list">
        <header className="gist-list__header">
          <h3 className="gist-list__title">0 gists found</h3>
        </header>

        <div className="gist-list__body">
          { !items.length && <GistEmpty/> }
          { items.map((item, i) => <Gist key={i} item={item} />) }
        </div>
      </section>
    </div>
  );
}

GistList.propTypes = {
  items: PropTypes.array
};

export default GistList;
