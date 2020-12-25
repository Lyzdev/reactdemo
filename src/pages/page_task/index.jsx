import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './css/index.less'
import { Layout,Menu } from 'antd'
import { Link,HashRouter, Route, Switch} from 'react-router-dom'
import {BMMenu} from '../../utils/conf'
// actions


// component
import Header from '../../components/Header';
const { Sider, Content } = Layout
const PageTask = props => {
    const { baseHtmlConf } = props
    useEffect(() => {
        return () => {

        }
    })
    return <div className='page-main'>
        PageTask
        {/* <Header />
        <Layout
            className='page-main-content'
            style={{ height: baseHtmlConf.contentHeight + 'px' }}
        >
            <Sider>
            <Menu
                // onClick={this.handleClick}
                // defaultSelectedKeys={[currentRoute]}
                // defaultSelectedKeys={this.state.defaultKeys}
                style={{ width: '100%'}}
                mode="inline"
            >
                <Menu.ItemGroup>
                    {BMMenu.map(item=><Menu.Item key={item.key}><Link to={item.to}>{item.label}</Link></Menu.Item>)}
                </Menu.ItemGroup>
            </Menu>
            </Sider>
            <Content>
            <HashRouter>
              <Switch>
                <Route  path='/businessMonitor' component={<>businessMonitor</>} />
                <Route  path='/businessMonitor/taskMonitor' component={<>/businessMonitor/taskMonitor</>} />
              </Switch>
            </HashRouter>
            </Content>
        </Layout> */}
    </div>
}

export default connect(state => ({
    callBackSetInfo: state.callBackSetInfo,
    baseHtmlConf: state.baseHtmlConf,
}), {

})(PageTask)