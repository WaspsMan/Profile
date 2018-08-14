import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import 'moment/locale/th';
import { Layout } from 'antd'
import {  Profile, Experience } from './Components';

class App extends Component {
  render() {
    return (
      <Layout>
          {/* <Navbar/> */}
        <Layout.Content className="backGroud1">
          <Profile/>
        </Layout.Content>
        <Layout.Content className="backGroud2">
          <Experience/>
        </Layout.Content>
      </Layout>
    );
  }
}

export default App;
