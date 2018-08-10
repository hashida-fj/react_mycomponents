import * as React from 'react';

// import {
//   Collapse,
//   Nav,
//   NavItem,
//   NavLink,
// } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFolder,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'

interface OwnProps {
  name: string,
  open: boolean,
  caret: boolean,
  onclickHandler? : () => void,
};


const ExplorerListitem = (props: OwnProps) => {
  return (
    <span>
      <FontAwesomeIcon
        icon={faAngleRight}
        rotation={props.open ? 90 : undefined}
        style={{
          margin: "0 0.3em",
          opacity: props.caret ? 1 : 0
        }}
      />
      <FontAwesomeIcon
        icon={faFolder}
        color="orange"
        style={{
          marginRight: "0.9em",
        }}
      />
      <span onClick={props.onclickHandler}>
        {props.name}
      </span>
    </span>
  )
}

export default ExplorerListitem;
