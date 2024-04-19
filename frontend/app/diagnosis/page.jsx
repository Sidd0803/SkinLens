
'use client'
import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";


export default function DiagnosisPage(){


    return (
        <div>

<Card className="text-center">
      
      <Card.Body>
      <Image src="banana.jpg" width  = "200" height = "200" rounded />
      </Card.Body>
    </Card>

    
<div className="text-center"> 
         <Button as="input" type="reset" value="Upload an Image" />
</div>

<Card className="text-center">

    <Card.Title>
        Your results
    </Card.Title>

    <Card.Body>

        sample text with your results
    </Card.Body>


</Card>

        </div>
    )


}