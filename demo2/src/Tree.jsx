import React from 'react'
import { Input,Tree } from 'antd';
import 'whatwg-fetch';
const Search = Input.Search;
const TreeNode = Tree.TreeNode;

class Tree1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [],
        }

        this.onLoadData = this.onLoadData.bind(this)
        this.onSelect = this.onSelect.bind(this)

    }

    componentDidMount() {
        this.readFirst()
    }

    readFirst(){
           fetch('/api/mainframe/viewstate',
           ).then(response =>{
                   console.log(response)
                   return  response.json()
               }
           ).then((response)=>{
               response.menuItems.map(function(item){
                   item.title =item.text
                   if(!item.items){
                       item.isLeaf =true
                   }
                  // console.log(item)
               })
               this.state.treeData=  response.menuItems
               this.Startrun();
         })
    }
    readJson(treeJson){
       // console.log(treeJson)
        treeJson.props.items.map(function(item1){
            item1.title =item1.text
            if(!item1.items){
                item1.isLeaf =true
            }
        })
        treeJson.props.dataRef.children = treeJson.props.items
    }
   /* readJson(treeJson){
        fetch('/api/mainframe/viewstate',
        ).then(response =>{
                //console.log(response)
                return  response.json()
            }
        ).then((response)=>{
            response.menuItems.map(function(item){
                if(treeJson.props.title == item.text){
                    item.items.map(function(item1){
                        item1.title =item1.text
                        if(!item1.items){
                            item1.isLeaf =true
                        }
                    })
                    treeJson.props.dataRef.children =item.items
                }
            })

            this.Startrun();
        })
    }*/
    onLoadData(treeNode){
        return (new Promise((resolve) => {
            if (treeNode.props.children) {
                resolve();
                return;
            }
            setTimeout(() => {
               // console.log(treeNode)
                this.readJson(treeNode)
                this.Startrun();
                resolve();
            }, 500);
        }));
    }
    Startrun(){
        this.setState({
            treeData: [...this.state.treeData],
        })
    }
    onSelect(electedKeys, e){
        var rvalue = [];
      if(e.selected){
          if(e.selectedNodes[0].props.dataRef.items){
              rvalue = e.selectedNodes[0].props.dataRef.items
          }else{
              rvalue.push(e.selectedNodes[0].props.dataRef)
          }
          this.props.callbackParent(rvalue);
      }
      return rvalue
    }
    renderTreeNodes(data){
        return data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item} dataRef={item} />;
        });
    }
    render() {

        return (
            <div style={{  margin:"10px",minHeight:300,paddingTop:"10px"}}>
                <Search
                    placeholder="点击查询"
                    style={{ width: "100%" }}
                    onSearch={value => console.log(value)}
                />
                    <Tree loadData={this.onLoadData} onSelect={this.onSelect}>
                        {this.renderTreeNodes(this.state.treeData)}
                    </Tree>
            </div>
        );
    }
}
export default Tree1;