import React from 'react'
import CenterTable from './CenterTable';
import Tree1 from './Tree';
import { Row, Col } from 'antd';
var newState1
class CenterConter extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            a : []
        }
    }

    onChildChanged(newState) {
       // console.log(newState)
        newState.map(function(item){
            item.name = item.text
            item.age = 1
            item.address = item.text
        })
        this.setState({
            a: newState,
        })
        return newState;
    }
     render(){
        return(
            <Row>
                <Col xs={8} sm={8} md={4} style={{top:0,bottom:0,minHeight:"500px",borderRight:"5px solid #E6EEF8"}}>
                    <Tree1 callbackParent={this.onChildChanged.bind(this)} />
                </Col>
                <Col  xs={16} sm={16}  md={20}>
                    <CenterTable newState={this.state.a}>
                    </CenterTable>
                </Col>
            </Row>
        )
    }
}

export default CenterConter