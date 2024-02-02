import React from 'react'
import "./therapists.css"
import MentalEasePhoto from "../../assets/images/MentalEasePhoto.png"
import TherapistCard from './TherapistCard'


function Therapists() {
  return (
	<div>

		<div className="welcome-therapist">

			<div className="image-therapists">
				<img src={MentalEasePhoto} alt="ourMentalEase" style={{width: '150px'}} />
			</div>

			<div className="text-description">
				<h2>
					BOOK AN APPOINTMENT WITH US TODAY
				</h2>

				<p>
				Here is where you meet and discuss your mental state with professionals Therapists who are ready to help you.
				</p>

			</div>
		</div>


		{/* therapists cards */}

		<TherapistCard />


	</div>
  )
}

export default Therapists