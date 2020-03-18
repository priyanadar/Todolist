import React from 'react';

import { Input, Button } from 'antd';


class AddItem extends React.Component {
  state = {
    inputVal: ''
  }

  onChangeInput = (e) => {
    console.log(e.target.value)
    this.setState({inputVal: e.target.value})
  }

  onClickButton = () => {
    this.setState({ inputVal: ''})
    this.props.onClickButton(this.state.inputVal);
  }

  render() {
    return (
      <div>
        <center style={{color:'darkblue',fontSize:'40px'}}> TO DO LIST</center>
        <div style={{display: 'flex',width:'600px'}}>
          <Input 
            size="large" 
            placeholder="Enter Here...."
            onChange={this.onChangeInput}
            value={this.state.inputVal} 
          /> 
          <Button className="my-button"
            onClick={this.onClickButton} 
            size="large"
            type="primary" 
            icon="arrow-right"
          >Add</Button>
        </div>
      </div>
    )
  }
}

export default AddItem;