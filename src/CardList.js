import React from 'react';
import Card from './Card';
import {robots} from './robots';


//destructuring and instead of using props, we directly pass the array in js form
//syntax of map first includes current-value(user) and then index (i)
//it's good to include a key everytime we use a loop in react to make things easy for th dom
const CardList=({ robots })=> {
	const cardComponent = robots.map((user, i) => {
		return (
			<Card 
				key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
			/>
		);
	})
	return(
		<div>
			{cardComponent}
		</div>
		);
}

export default CardList;