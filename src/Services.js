import React from 'react';
import './services.css';
import carIcon from './icons/car.svg';
import billPayingIcon from './icons/budget.svg';
import helpingHandIcon from './icons/helpingHand.svg';
import mealPrepIcon from './icons/plate.svg';
import shoppingIcon from './icons/shopping-bag.svg';
import doctorVisitsIcon from './icons/stethescope.svg'

let Services = props => {
  return(
    <div className="services-page">
    <h1 className="heading">Services</h1>
    <div className="services-text-icons-container">
    <div className="column-item">
    <img src={carIcon} className="services-icon" alt="car-icon" />
    <div className="text">
    <h2>Outpatient Surgeries & Medical Procedures Requiring Sedation</h2>
    <p>I provide transportation to and from outpatient surgeries and medical procedures requiring sedation. Post-surgery or procedure, I can stay with you until the end of the day, using that time to prepare meals or help around the house, making your recovery more comfortable.</p>
    </div>
    </div>
    <div className="column-item">
    <img src={doctorVisitsIcon} className="services-icon" alt="doctor-visits-icon" />
    <div className="text">
    <h2>Doctors Visits</h2>
    <p>Transportation to any doctor, dentist, chiropractor, optometrist, etc., including medical visits outside of the city.</p>
    </div>
    </div>
    <div className="column-item">
    <img src={mealPrepIcon} className="services-icon" alt="meal-prep-icon" />
    <div className="text">
    <h2>Meal Preparation</h2>
    <p>Meal preparation is something I do to relax; I love to cook. I have experience with a range of alternative diets including gluten-free, dairy-free and diabetic. This service is ideal for clients undergoing surgery, new moms and families, or anyone needing dietary assistance.</p>
    </div>
    </div>
    <div className="column-item">
    <img src={shoppingIcon} className="services-icon" alt="shopping-icon" />
    <div className="text">
    <h2>Personal Shopping</h2>
    <p>If you would like me to do your grocery shopping or clothes shopping, I can pick items up for you, or I can take you to the store to make your own selections.</p>
    </div>
    </div>
    <div className="column-item">
    <img src={billPayingIcon} className="services-icon" alt="bill-pay-icon" />
    <div className="text">
    <h2>Bill Paying</h2>
    <p>Assistance for individuals whose vision or cognition makes it dffcult for them to pay their own bills.</p>
    </div>
    </div>
    <div className="column-item">
    <img src={helpingHandIcon} className="services-icon" alt="helping-hand-icon" />
    <div className="text">
    <h2>Additional Services</h2>
    <p>I know that each person’s needs will be different and may change over time, so we will work together to find the right level of services for you.</p>
    </div>
    </div>
    </div>
    {/* <p>Ro on the Go, LLC., and its principal are not licensed healthcare providers. The services provided by Ro on the Go, LLC., do not require a medical license and Ro on the Go, LLC., and its
principal will not provide any services requiring a medical license and/or medical certi cation.</p>
    <p>*Fees are calculated on time and mileage. Subject to the anticipated need, minimums may apply.</p> */}
    </div>
  )
}

export default Services
