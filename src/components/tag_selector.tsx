import * as React from 'react';

import {
  InputGroup,
  InputGroupButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Input,
} from 'reactstrap';


interface OwnState {
  open: boolean,
}

export default class TagSelector extends React.Component<{}, OwnState> {
  constructor(props: any){
    super(props)
    this.state = {
      open: false
    }
  }

  public render(){
    return(
      <InputGroup>
        <Input placeholder="and..." type="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <InputGroupButtonDropdown addonType="append" isOpen={this.state.open} toggle={() => {
            this.setState({
              open: !this.state.open
            })
        }}>
          <DropdownToggle split outline />
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>

            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
    )}
}
