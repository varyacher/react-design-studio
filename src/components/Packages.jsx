import React from 'react'


function Packages(){
	return(
		<div id="packages">
	        <h2>Packages</h2>
	        <hr />
	        <p>Some text about our services - what we do and what we offer. We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	        <div className="tarifs">
	          <div className="tarif">
	            <ul>
	              <li className="tarif-name">Basic</li>
	              <li>Floorplanning</li>
	              <li>10 hours support</li>
	              <li>Photography</li>
	              <li>20% furniture discount</li>
	              <li>Good deals</li>
	              <li><p class="price">50 рублей</p>
	              <p className="period"></p>в день</li>
	              <li><button>Sign up</button></li>
	            </ul>
	          </div>
	          <div className="tarif pro">
	            <ul>
	              <li className="tarif-name">Pro</li>
	              <li>Floorplanning</li>
	              <li>50 hours support</li>
	              <li>Photography</li>
	              <li>50% furniture discount</li>
	              <li>Good deals</li>
	              <li><p className="price">100 рублей</p>
	              <p class="period"></p>в день</li>
	              <li><button>Sign up</button></li>
	            </ul>
	          </div>
	        </div>
	    </div>
		)
}


export default Packages