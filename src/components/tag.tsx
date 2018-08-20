import * as React from 'react';

import {
    Badge,
} from 'reactstrap';


interface OwnProps {
  content: string,
  color: string,
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'


const Tag = (props: OwnProps) => {
  return (
    <Badge color={props.color} pill>

      {props.content}

      <span
        onClick={
          () => {
            console.log("hover")
          }
        }
      >
        <FontAwesomeIcon
          icon={faTimesCircle}
          style={{
            margin: "0 0.2em",
            verticalAlign: "middle"
          }}
        />
      </span>

    </Badge>
  )
}

export default Tag;
