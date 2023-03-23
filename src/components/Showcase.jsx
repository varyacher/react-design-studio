import React from 'react'
import kitchenconcrete from "./images/kitchenconcrete.jpg"
import livingroom from "./images/livingroom.jpg"
import diningroom from "./images/diningroom.jpg"
import bedroom from "./images/bedroom.jpg"
import livingroom2 from "./images/livingroom2.jpg"
import atrium from "./images/atrium.jpg"

function Showcase(){
	return(
		<div id="showcase">
			<h2>Showcase</h2>
			<hr/>
			<div className="images">
				<img src={kitchenconcrete} />
				<img src={atrium} alt=""/>
				<img src={livingroom} alt=""/>
				<img src={diningroom} alt=""/>
				<img src={bedroom} alt=""/>
				<img src={livingroom2} alt=""/>
			</div>
		</div>
		)
}


export default Showcase