'use client'
import Navigation from "./components/nav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {

  return (
    <div>
      <Navigation/>
         <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Welcome to SkinLens!</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p>Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
          <div className="d-flex flex-column text-center mt-4">
            <Button variant="primary" className="mr-2" href="/login">Login</Button>
            <Button variant="secondary" href="/join">Create Account</Button>
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
    </div>
  );
}

export default App;