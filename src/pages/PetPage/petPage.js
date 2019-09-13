/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'proptypes';
import pets from '../../components/pets.json';
import design from './petPage.module.css';

const Pet = ({ match }) => {
  const data = pets.find(el => el.id === match.params.id);

  return (
    <div className={design.mainDiv_pp}>
      <NavLink
        exact
        activeClassName={design.active}
        to="/pets"
        className={design.petButton}
      >
        &#8678; go back
      </NavLink>
      <div className={design.petInfoDiv}>
        <h2 className={design.h2_petp}>All about {data.name}</h2>
        <div className="mainInfo">
          <div className={design.infoBlock}>
            <img src={data.image} alt="img" className={design.pet_img} />
            <div className={design.shortPetInfo}>
              <p>Age: {data.age}</p>
              <p>Gender: {data.gender}</p>
              <p>Color: {data.color}</p>
              <p>Breed: {data.breed}</p>
            </div>
          </div>
          <p className={design.p_petp}>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

Pet.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Pet;
