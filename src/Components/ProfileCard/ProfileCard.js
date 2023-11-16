import React from 'react';

const ProfileCard = () => {
    return (
        <div>
            <label>
         Name
         <input
           type="text"
           name="name"
           value={updatedDetails.name}
           onChange={handleInputChange}
         />
       </label>
       <label>
         Phone
         <input
           type="text"
           name="phone"
           value={updatedDetails.phone}
           onChange={handleInputChange}
         />
       </label>


  <p> <b>Email:</b> {userDetails.email}</p>
        <p><b>Phone:</b> {userDetails.phone}</p>


        </div>
    );
};

export default ProfileCard;