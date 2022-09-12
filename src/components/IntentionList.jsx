import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


  const IntentionList = (props) => {
    return (
      <div>
        <ListGroup>
        {props.intentions.map((intention, index) => {
          return <ListGroup.Item action variant="light" key={index} onClick={() => props.onClick(intention.title)}> {intention.title}</ListGroup.Item>
        })}
        </ListGroup>
      </div>
    )
  };


export default IntentionList;


