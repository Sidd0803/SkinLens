'use client'
// import Navigation from "./components/nav";
import { useRouter } from "next/navigation";
import DiagnosisPage from "./diagnosis/page";
import HomePage from "./home/page";

const App = () => {

  return (
    <div> 

      <HomePage />
      <DiagnosisPage />

    </div>
  );
}

export default App;


// NOTES

// PATHS: 
// start with homepage -> login or create
// after login taken to /home
      // view a summary of current things user is doing
      // option to go to log 
// log 
  // view current records
  // add new skincare or meds
  // upload image and get classification
  // progression
      // can see open progression timelines [NEED DYNAMIC ROUTING FOR THIS W DATA FROM BACKEND]
      // can create new progression timelines 
  
  // history (have option to delete this data perm.)
    // old products and regimes w their time lines (when started and when ended)
    // past timelines 

// account page
  // profile -> gender, location, contact info
  // settings -> preferred data settings, app view setings [color blind friendly, dark mode/lightmode]


// about
// contact

// login/create -> personalized homepage ->

// figma mockup 
// 2. database schema + fake data for one user only 
// 3. static pages 
