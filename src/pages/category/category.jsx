import React,{ Component } from "react";
import {Card,Table,Button,Icon} from 'antd'
import LinkButton from '../../components/link-button'

/**
 * 商品分类路由
 */
export default class Category extends Component {
    render(){
        //Card的左侧
        const title = '一级分类列表'
        //Card的右侧
        const extra = (
            <Button type="primary">
                <Icon type="plus"/>
                添加
            </Button>
        )
        const dataSource = [
            {
              "parentId": '0',
              "_id": '1',
              "name": '服装',
              "_v": 0,
            },
            {
                "parentId": '0',
                "_id": '2',
                "name": '食品',
                "_v": 0,
            },
            {
                "parentId": '0',
                "_id": '3',
                "name": '家电',
                "_v": 0,
            },
            {
                "parentId": '0',
                "_id": '4',
                "name": '玩具',
                "_v": 0,
            },
            {
                "parentId": '0',
                "_id": '5',
                "name": '文具',
                "_v": 0,
            },
            {
                "parentId": '0',
                "_id": '6',
                "name": '厨具',
                "_v": 0,
            },
            {
                "parentId": '0',
                "_id": '7',
                "name": '交通工具',
                "_v": 0,
            }
          ];
          
          const columns = [
            {
              title: '分类名称',
              dataIndex: 'name',
            },
            {
              title: '操作',
              width:300,
              render:()=>(
                  <span>
                      <LinkButton>修改分类</LinkButton>
                      <LinkButton>查看子分类</LinkButton>
                  </span>
              )
            }
          ];
        return(
            <Card title={title} extra={extra}>
                <Table rowKey='_id' dataSource={dataSource} columns={columns} bordered/>
            </Card>
        )
    }
}