'use client'
// import Navigation from "./components/nav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Button } from 'react-bootstrap';
import DiagnosisPage from "./diagnosis/page";

const Home = () => {

  return (
    <div>
      {/* <Navigation/> */}
         <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Welcome to SkinLens!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          <div className="d-flex flex-column text-center mt-4">
            <Button variant="primary" className="mr-2" href="/login">Login</Button>
            <Button variant="secondary" href="/join">Create Account</Button>
            <Button variant="secondary" href="/notes">Notes</Button>
          </div>
        </Col>
      </Row>
    </Container>
     
    </div>

  );
}


const App = () => {

  return (
    <div> 

      <Home />
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
