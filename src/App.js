import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// css
import './App.css';
// redux & locale
import { Provider } from "react-redux"
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store, { persistor } from "./redux"
import { PersistGate } from 'redux-persist/lib/integration/react';
// action
import { action_async_setBaseHtmlConf } from './redux/actions/action_global'
// Component
import PageBunisess from './pages/page_business';
import PageStatus from './pages/page_status'
import routes from './router/route'
const rt = [
  {
    path: '/businessMonitor',
    component:<PageBunisess/>
  },
  {
    path: '/statusMonitor',
    component:<PageStatus/>
  }
]
function App(props) {
  const { baseHtmlConf, action_async_setBaseHtmlConf } = props
  const [r, setR] = useState(routes.map(item => item.show ? <Route path={item.path} component={() => item.component} /> : ''))
  useEffect(() => {
    const setContentH = () => {
      const dom0 = document.querySelector('.App')
      if (dom0) {
        const contentHeight = parseFloat(getComputedStyle(dom0).height) - baseHtmlConf.headerHeight
        action_async_setBaseHtmlConf({ contentHeight })
      }
    }
    setContentH()
    window.onresize = setContentH


  }, [])

  return (
    <div className="App">
      {/* <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> */}
      <ConfigProvider locale={zh_CN}>
        <HashRouter>
          <Switch>
            {/* {r} */}
            {/* {
              routes.map(item =>item.show? <Route path={item.path} component={()=>item.component} />:'')
            } */}
            {routes.map(item=><Route path={item.path} component={()=>item.component} />)}
            {/* <Route path='/businessMonitor' component={PageBunisess} />
            <Route path='/statusMonitor' component={PageStatus} /> */}
            <Redirect path="/" to="/businessMonitor/taskMonitor" />
            <Redirect path="/businessMonitor" to="/businessMonitor/taskMonitor" />
            {/* {
              routes.map(item => <Route path={item.path} component={item.component} />)
            }
            {
              routes.map(item => <Redirect path={item.path} to={item.to} />)
            } */}
            {/* <Redirect path="/" to="/businessMonitor/taskMonitor" />
                <Redirect path="/businessMonitor" to="/businessMonitor/taskMonitor" />  */}
            {/* <Redirect exact from="/" to="/businessMonitor"></Redirect> */}
          </Switch>
        </HashRouter>
      </ConfigProvider>
      {/* </PersistGate>
      </Provider> */}
    </div>
  );
}

export default connect(state => ({
  callBackSetInfo: state.callBackSetInfo,
  baseHtmlConf: state.baseHtmlConf,
}), {
  action_async_setBaseHtmlConf
})(App)
