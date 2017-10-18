import React from 'react'
import { Row, Col, Select,Checkbox } from 'antd';
const Option = Select.Option;

function handleChange(e){
    console.log('click ', e);
}
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
class Top extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <Row style={{paddingBottom:"10px",borderBottom:"5px solid #E6EEF8"}}>
                <Col xs={0} md={2}></Col>
                <Col xs={8} md={4}>
                    <span style={{ fontSize:14,lineHeight:"26px"}}> 干部库：</span>
                    <Select defaultValue="干部库" style={{ width: 140}} onChange={handleChange}>
                        <Option value="zz">在职</Option>
                        <Option value="lz">离职</Option>
                        <Option value="gz" disabled>挂职</Option>
                        <Option value="other">其他</Option>
                    </Select>
                </Col>
                <Col xs={8} md={4}>
                    <span style={{ fontSize:14,lineHeight:"26px"}}> 所属单位：</span>
                    <Select defaultValue="所属单位" style={{ width: 140}} onChange={handleChange}>
                        <Option value="rsgx">人事关系所在单位</Option>
                        <Option value="gszw">公司职位所在单位</Option>
                        <Option value="szzw" >行政职务所在单位</Option>
                    </Select>
                </Col>
                <Col xs={8} md={4}  style={{ fontSize:14,lineHeight:"26px"}}>

                    <Checkbox onChange={onChange}>显示所有下级</Checkbox>
                </Col>

            </Row>

        );
    }
}

export default Top;
