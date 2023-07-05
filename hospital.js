
import React from 'react'
class Hospital extends React.Component{
    render(){
        return(
            <div className='bgcon' >
                  <h1>Hospital Form</h1>
                  <form className='formbg'>
    <label forName="name">Name:</label>
    <input type="text" id="name" name="name" required></input>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required></input>
    <label for="units">No of Units:</label>
    <input type="text" id="units" name="units" required></input>
    <label for="blood_group">Blood Group:</label>
    <select id="blood_group" name="blood_group" required>
      <option value="">Select</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
    </select>
    <label for="phone">Phone:</label>
    <input type="tel" id="phone" name="phone" required />

    <label for="address">Address:</label>
    <textarea id="address" name="address" required></textarea>

    <input type="submit" value="Submit" />
  </form>
            </div>
        )
    }
}

export default Hospital