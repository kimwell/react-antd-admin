import React from "react";
import { Provider } from "react-redux";
import store from './redux'
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

function App() {
  return (
    <ConfigProvider
      locale={zhCN}
      componentSize="middle"
      input={{ autoComplete: "off" }}
    >
      <Provider store={store}>
        <div className="App">
          <div>sdfsdf</div>
        </div>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
