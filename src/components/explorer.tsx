import * as React from 'react';

import {
  Nav,
} from 'reactstrap';

import ExplorerList from './explorer_list'


interface dir {
  name: string
  children? : dir[]
}

interface OwnProps {
  root: dir[]
};

export default class Explorer extends React.Component<OwnProps, {}> {

  constructor(props: OwnProps){
    super(props);
  }

  public render(){
    return(
      <Nav vertical>
        {
          this.props.root.map ( (it) => {
            return <ExplorerList root={it} />
          })
        }
      </Nav>
    )
  }
}
