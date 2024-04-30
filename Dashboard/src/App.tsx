import {  Card, Col, Divider, Layout, Menu, Row, Space, Table, Typography } from "antd"
import Sider from "antd/es/layout/Sider"
import { Content, Header } from "antd/es/layout/layout"
import "./style/dashboard.css"
import { FaHome } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";
import { FaBurger } from "react-icons/fa6";
import { useState } from "react";
import {  AiOutlineMoneyCollect } from "react-icons/ai";
function App() {
 const [collapsed , setCollpased] = useState(false)
return (
    <>
      <Layout className="container">
        <Header
        style={{backgroundColor:"white",}}>
          <div style={{display : "flex" , alignItems: "center"}}>
            <FaBurger onClick={()=>setCollpased(!collapsed)}size={24} style={{marginRight:20}}/>
            <div className="brand">Cool-dashboard</div>
          </div>
          
        </Header>
        <Layout>
          <Sider collapsed={collapsed} theme="light">
            {/* use to send the data or suboptions */}
            <Menu mode={"inline"} items={
              [
                {
                  label:"Home",
                  key:"home",
                  icon : <FaHome />,
                  children : [
                    {
                      label : "Add profile",
                      key : "add_profile",
                    },
                    {
                      label : "All User",
                      key : "All_users",
                    }
                  ]
                },
                {
                  label:"About",
                  key:"about",
                  icon : <GrOrganization />
                }
              ]
            }/>

          </Sider>
          <Content className="content">
          <Space direction="horizontal" style={{padding:10}}>
          <Card>
          <Space direction="horizontal">
          <AiOutlineMoneyCollect/>
          <small>Total sales 1</small>
          </Space>
          <Typography.Title>$4343</Typography.Title>
          </Card>
          <Card>
          <Space direction="horizontal">
          <AiOutlineMoneyCollect/>
          <small>Total sales 2</small>
          </Space>
          <Typography.Title>$2341</Typography.Title>
          </Card>
          <Card>
          <Space direction="horizontal">
          <AiOutlineMoneyCollect/>
          <small>Total sales 3</small>
          </Space> 
          <Typography.Title>$95675</Typography.Title>
          </Card> 
          </Space>
          <Divider/>
           
           <Row gutter={15}>
            <Col span={6}>
            <Card>
              <Typography.Title>something</Typography.Title>
            </Card>
            </Col>
            <Col span={18}>
            <Card>
              <Typography.Title>something</Typography.Title>
            </Card>
            </Col>
           </Row>

           <Row gutter={12} style={{marginTop:25}}>
            <Col span={10}>
              {/* we can use faker for generating random data */}
              <Table /* dataSource={} */ columns={[
                {
                  dataIndex:"id",
                  title:"ID",
                  key:"id",
                },
                {
                  dataIndex:"name",
                  title:"Name",
                  key:"name",
                },
                {
                  dataIndex:"name",
                  title:"Age",
                  key:"name",
                },
                {
                  dataIndex:"name",
                  title:"Address",
                  key:"name",
                }
              ]}/>
            </Col>
           </Row>
          
          </Content>
        </Layout>

      </Layout>
    </>
  )
}
export default App
