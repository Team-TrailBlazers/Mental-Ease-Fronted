import React, { useState, useEffect } from 'react';
import './card.css';
import Axios from 'axios';
import { apidomain } from './../../Utils/apiDomain';
import userIcon from './../../assets/images/userIcon.jpg'


function TherapistCard() {
  const [therapists, setTherapists] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecialization, setSearchSpecialization] = useState('');

  useEffect(() => {
	Axios.get(`${apidomain}/api/therapist`)
	  .then(response => setTherapists(response.data))
	  .catch(error => console.error(error));
  }, []);


  const filteredTherapists = therapists.filter(therapist =>
    therapist.FirstName.toLowerCase().includes(searchName.toLowerCase()) &&
    therapist.Specialization.toLowerCase().includes(searchSpecialization.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search by name" onChange={e => setSearchName(e.target.value)} />
      <input type="text" placeholder="Search by specialization" onChange={e => setSearchSpecialization(e.target.value)} />
      <div className="cardsContainer">
	  {filteredTherapists.map(therapist => (

        <div key={therapist.TherapistID} className='card'>

			<div className="basic-info">
				<img src={userIcon} alt="userIcon" style={{width: '100px'}} />

				<h2 className='therapist-name'>{therapist.FirstName} {therapist.LastName}</h2>
		  		<p className='therapist-details'>Email Address: {therapist.EmailAddress}</p>

			</div>
		<div className="more-info">
		<p>Specialization: {therapist.Specialization}</p>
          <p>Location: {therapist.Location}</p>
          <p>Treatment Approach: {therapist.TreatmentApproach}</p>
		</div>
       
        </div>

      ))}
	  </div>
    </div>
  );
}

export default TherapistCard;