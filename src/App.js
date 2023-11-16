import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import InstantConsultation from './Instant Consultation/InstantConsultation';
import Notification from './Components/Notification/Notification';
import GiveReviews from './Components/ReviewForm/ReviewForm';
// import SignUp from './Components/Sign_Up/Sign_Up';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
          <LandingPage/>

          {/* <Route path="/" element={<LandingPage/>}/> */}
          {/* <SignUp/> */}

          {/* <InstantConsultation/> */}

          {/* <Route path="./Instant Consultation/InstantConsultation" element={<InstantConsultation />} /> */}

              {/* <Routes>
              </Routes> */}

          <Notification>
              <Routes>
                {/* <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/> */}
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="<component_route>" element={<component_name/>}/>
                 {/* /> */}
                 {/* //replace the component_route with the component path  and component_name with the component name as imported in the **App.js file**.  */}
              </Routes>
          </Notification>
          <GiveReviews/>

        </BrowserRouter>
       
    </div>
  );
}

export default App;