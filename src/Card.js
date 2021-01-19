import React from "react"


//instead of using props and props.id etc, we destructure it as in the function parameters
const Card=({name, email, id}) => {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img src={`https://robohash.org/${id}?200x200`} alt='robot'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>

	);
}

export default Card;