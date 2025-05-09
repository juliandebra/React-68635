import React from "react";
import { Button, Card } from "react-bootstrap";

const NotFound = ({ titulo, descripcion, onClick, label }) => {
  return (
    <Card>
      <Card.Header>{titulo}</Card.Header>
      <Card.Body>
        <Card.Text>{descripcion}</Card.Text>
        {onClick && (
          <Button variant="primary" type="button" onClick={onClick}>
            {label ? label : "Volver a intentarlo..."}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default NotFound;
