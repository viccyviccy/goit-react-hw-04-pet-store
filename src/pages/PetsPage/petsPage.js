import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'proptypes';
import pets from '../../components/pets.json';
import design from './petsPage.module.css';

const allPets = ({ history, location, match }) => {
  return (
    <div className={design.mainDivPets}>
      <ul className={design.petsUL}>
        {pets.map(pet => (
          <li className={design.petsLI} key={pet.id}>
            <Link to={`${match.path}/${pet.id}`}>
              <img src={pet.image} alt="img" className={design.petsListImg} />
              <p className={design.petName}>{pet.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

allPets.propTypes = {
  match: PropTypes.object.isRequired,
};

export default allPets;
