//Importing React
import React from "react";


//Create the User information Component
function UserInfo(user) {
return (
<div className='UserInformations'>
      {/* Display user information */}
      <h1>{user.name} {user.surname}</h1>
      <p>Date of Birth: {user.date_of_birth}</p>
      <p>Address: {user.address}</p>
      <p>Country: {user.country}</p>
      <p>Email: {user.email}</p>
      <p>Telephone: {user.telephone}</p>
      <p>Company: {user.company}</p>
      <img className= 'profilePicture' src={user.profile_picture} width='110'  height = '110 'alt="Profile" />
      </div>
);
}
export default UserInfo;
