import React from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter, Route, Switch } from 'react-router-dom';
// css
import './common/css/reset.less'
import './index.css';
import 'antd/dist/antd.css'
// // redux & locale
import { Provider } from "react-redux"
// import { ConfigProvider } from 'antd';
// import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store, {persistor}from "./redux"
import {PersistGate} from 'redux-persist/lib/integration/react';
// Component
import App from './App'
// import PageMain from './pages/page_main';
// others
import reportWebVitals from './reportWebVitals';
// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <ConfigProvider locale={zh_CN}>
//         <HashRouter>
//           <Switch>
//             <Route exact={true} path='/' component={PageMain} />
//           </Switch>
//         </HashRouter>
//       </ConfigProvider>
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
