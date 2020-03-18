import React from 'react';
import { Layout, Row, Col } from 'antd';
import AddItem from './AddItem';
import ItemList from './ItemList';

const { Content } = Layout;

class Main extends React.Component {
  state = {
    list: []
  }

  onClickButton = (val) => {
    const {list} = this.state; 
    this.setState({
      list: [
        ...list, 
        val
      ],
    });
  }

  render() {
    return (

      <Layout>
      <Content style={{height:'100vh',backgroundColor:'skyblue'}}>
      <Row>
         <Col span={12} offset={6}
           style={{height:'20em',
           display:'flex',
           alignItems:'center',
           justifyContent:'center'}}
      >
              <AddItem onClickButton={this.onClickButton} />
          </Col>
      </Row>
      <Row>
         <Col span={6} offset={6} style={{left:'100px'}}>
              <ItemList list={this.state.list} />
         </Col>
      </Row>
      </Content>
      </Layout>
    );
  }
}

export default Main;