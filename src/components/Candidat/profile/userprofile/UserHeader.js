import React from 'react'; 
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    
      <div
        
        id ="profile-cover" 
        
      >
       
        {/* Mask */}
        
        {/* Header container */}
        <Container >
          <Row>
           <div id="high">
              <h1>Hi there !</h1>
              <h4 className="white-text">
                This is your profile page. You can change your personal details at any time
              </h4>
            </div>  
            
          </Row>
        </Container>
      </div>
    
  );
};

export default UserHeader;
