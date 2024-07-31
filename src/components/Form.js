import React from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Form() {

    const [formData, setFormData] = useState({firstname:'', lastname:'', email:'', Country:'Select Country', streetaddress:'', city:'', state:'', zipcode:'', comments:'', candidates:'', offers:'',  pushNotifications:''});
    const navigate = useNavigate();


    const changeHandler = (event) => {
        const {name, value, checked, type} = event.target;

        setFormData((prevData) => {
            return{
                ...prevData,
                [name]: type === 'checkbox'? checked : value
            } 
        });
    };


    const submitHandler = (event) => {
        navigate("/save");
        event.preventDefault();
        console.log(formData);
    };


    return(
      <div className='form-main'>
        <form className='form'>
        <div className='firstName'>
          <label htmlFor='firstname'>First name</label>
          <input
            type="text"
            onChange={changeHandler}
            placeholder='Pranay'
            id='firstname'
            name='firstname'
            value={formData.firstname}
          ></input>
        </div>

        <div className='lastName'>
          <label htmlFor='lastname'>Last name</label>
          <input
            type="text"
            onChange={changeHandler}
            placeholder='Gupta'
            id='lastname'
            name='lastname'
            value={formData.lastname}
          ></input>
        </div>

        <div className='email'>
          <label htmlFor='email'>Email address</label>
          <input
            type="text"
            onChange={changeHandler}
            placeholder='pgupta@duck.com'
            id='email'
            name='email'
            value={formData.email}
          ></input>
        </div>

        <div className='dropDown-country'>
          <legend>Country</legend>
          <select
            id='dropdownCountry'
            name='Country'
            onChange={changeHandler}
            value={formData.dropdownCountry}
                    
          >
            <option>Select Country</option>
            <option>India</option>
            <option>USA</option>
            <option>Russia</option>
            <option>England</option>
          </select>
        </div>

        <div className='streetAddress'>
          <label htmlFor='streetaddress'>Street address</label>
          <input
            type="text"
            onChange={changeHandler}
            placeholder='1234 Main St'
            id='streetaddress'
            name='streetaddress'
            value={formData.streetaddress}
          ></input>
        </div>

        <div className='city'>
          <label htmlFor='city'>City</label>
          <input
            type="text"
            onChange={changeHandler}
            placeholder='Asansol'
            id='city'
            name='city'
            value={formData.city}
          ></input>
        </div>

        <div className='state'>
          <label htmlFor='state'>State / Province</label>
          <input
            type="text"
            onChange={changeHandler}
            placeholder='West Bangal'
            id='state'
            name='state'
            value={formData.state}
          ></input>
        </div>

        <div className='zip-code'>
          <label htmlFor='zipcode'>Zip / Postal code</label>
          <input
            type="text"
            onChange={changeHandler}
            placeholder='713301'
            id='zipcode'
            name='zipcode'
            value={formData.zipcode}
          ></input>
        </div>

        <fieldset className='by-email'>
          <legend className='byEmail'>By Email</legend>
          
          <div className='comments-box'>
          <div className='comments-checkbox'>
          <input
            type="checkbox"
            onChange={changeHandler}
            id='comments'
            name='comments'
            checked={formData.comments}
          ></input>
          <label htmlFor='comments'>Comments</label>
          </div>
          <p id='checkbox-text'>Get notified  when someones posts a comment on a posting.</p>
          </div>

          <div className='candidates-box'>
          <div className='candidates-checkbox'>
          <input
            type="checkbox"
            onChange={changeHandler}
            id='candidates'
            name='candidates'
            checked={formData.candidates}
          ></input>
          <label htmlFor='candidates'>Candidates</label>
          </div>
          <p id='checkbox-text'>Get notified when  a candidate applies for a job.</p>
          </div>

          <div className='offers-box'>
          <div className='offers-checkbox'>
          <input
            type="checkbox"
            onChange={changeHandler}
            id='offers'
            name='offers'
            checked={formData.offers}
          ></input>
          <label htmlFor='offers'>Offers</label>
          </div>
          <p id='checkbox-text'>Get notified when a candidate accepts or rejects an offer.</p>
          </div>
        </fieldset>

        <fieldset className='push-notifications'>
          <legend className='pushNotify'>Push Notifications</legend>
          <p className='radio-text'>These are delivered via SMS to your mobile phone.</p>
          
          <div className='radios'>
          <div className='Everything-radio'>
          <input
            type='radio'
            onChange={changeHandler}
            name='pushNotifications'
            value="Everything"
            id='everything'
          ></input>
          <label htmlFor='everything'>Everything</label> 
          </div>
          
          <div className='sameAsEmail-radio'>
          <input
            type='radio'
            onChange={changeHandler}
            name='pushNotifications'
            value="Same as email"
            id='sameAsEmail'
          ></input>
          <label htmlFor='sameAsEmail'>Same as email</label>
          </div>

          <div className='noPushNotifications-radio'>
          <input
            type='radio'
            onChange={changeHandler}
            name='pushNotifications'
            value="No push notifications"
            id='noPushNotification'
          ></input>
          <label htmlFor='noPushNotification'>No push notifications</label>
          </div> 
          </div>
        </fieldset>

        <div className='saveButton'>
            <button onClick={submitHandler}>Save</button>
        </div>
        </form>    
      </div>
    );
};

export default Form;