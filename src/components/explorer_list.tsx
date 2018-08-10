import * as React from 'react';

import {
  Collapse,
  Nav,
} from 'reactstrap';

import ExplorerListitem from './explorer_listitem'

interface dir {
  name: string
  children? : dir[]
}

interface PartsProps{
  root: dir
}

interface PartsState {
  open: boolean,
}

export default class ExplorerList extends React.Component<PartsProps, PartsState> {

  constructor(props: PartsProps) {
    super(props)
    this.state = {
      open: false,
    }
  }

  private folderToggle = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  public render(){
    const children = this.props.root.children

    if (children && children.length !== 0) {
      return(
        <div>
          <ExplorerListitem
            name = {this.props.root.name}
            caret = {true}
            open = {this.state.open}
            onclickHandler={this.folderToggle}
          />

          <Collapse isOpen={this.state.open}>
            <Nav vertical>
              {
                children.map( (child) =>
                  <ExplorerList root={child} />
                )
              }
            </Nav>
          </Collapse >
        </div>
      )
    } else {
      return(
        <ExplorerListitem
          name = {this.props.root.name}
          caret = {false}
          open = {false}
        />
      )
    }
  }
};


