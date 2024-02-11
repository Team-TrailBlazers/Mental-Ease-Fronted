import React from 'react'
import "./footer.css"

function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<div>
			<footer className="footer">
				{`@${currentYear} All rights reserved`}
			</footer>
		</div>
	)
}

export default Footer