import * as React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

interface OwnProps {
  selectedOption: {
    value: string,
    label: string,
  } ,
}

export default class TestSelect extends React.Component<{}, OwnProps> {

  constructor(props: any){
    super(props)
    this.state = {
      selectedOption: {
        value: 'chocolate',
        label: 'Chocolate'
      },
    }
  }

  handleChange = (selectedOption: {value: string, label: string} ) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
