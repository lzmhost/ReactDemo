import React from 'react'
import { DatePicker,Select ,Table,Row, Col,Button ,Input } from 'antd';
import './css/index.css'
const { MonthPicker, RangePicker } = DatePicker;

const Option = Select.Option;
function onChange(date, dateString) {
    console.log(date, dateString);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}

function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    render: text => <a href="#">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
}];
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      //  disabled: record.name === 'Disabled User',
    }),
};

class CenterTable extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style={{marginRight:"50px",paddingTop:"10px",padding:"20px"}}>
            <Row>
                <Col>
                   <Row>
                       <Col><h2 className="colorRed"> 在职干部库</h2>
                        <hr/><br/>
                       </Col>
                   </Row>
                    <Row style={{textAlign:"center",marginBottom:"15px"}}>
                        <Col xs={12}>
                            <Row>
                                <Col xs={0} md={6}>
                                    <span style={{ fontSize:14,lineHeight:"26px"}}>姓名：</span>
                                </Col>
                                <Col xs={18} md={12}>
                                    <Input placeholder="请输入姓名" />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Row>
                                <Col  xs={0} md={6}>
                                    <span style={{ fontSize:14,lineHeight:"26px"}}>性别：</span>
                                </Col>
                                <Col  xs={18} md={12}>
                                    <Select defaultValue="" style={{ width: "100%"}} onChange={handleChange} placeholder="请选择性别">
                                        <Option value="men">男</Option>
                                        <Option value="women">女</Option>

                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{textAlign:"center",marginBottom:"15px"}}>
                        <Col xs={12}>
                            <Row>
                                <Col xs={0} md={6}>
                                    <span style={{ fontSize:14,lineHeight:"26px"}}>出生日期：</span>
                                </Col>
                                <Col xs={18} md={12}>
                                    <RangePicker onChange={onChange} />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12}>
                            <Row>
                                <Col  xs={0} md={6}>
                                    <span style={{ fontSize:14,lineHeight:"26px"}}>籍贯：</span>
                                </Col>
                                <Col  xs={18} md={12}>
                                    <Select
                                        showSearch
                                        style={{ width: "100%" }}
                                        placeholder="请选择或输入籍贯"
                                        optionFilterProp="children"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                    >
                                        <Option value="山西">山西</Option>
                                        <Option value="北京">北京</Option>
                                        <Option value="上海">上海</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
                <Row>
                    <Col style={{background:"#F4F4F4",minHeight:50,padding:10}}>
                        <Button type="primary" className="mgrt15">新建</Button>
                        <Button type="danger" className="mgrt15">删除</Button>
                        <Button type="primary" className="mgrt15">刷新</Button>
                        <Button type="primary" className="mgrt15">加入干部</Button>

                    </Col>
                </Row>
            <Row>
                <Col>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.props.newState} />
                </Col>
            </Row>
           </div>
        )
    }
};
export default CenterTable