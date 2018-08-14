import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

export default class Navbar extends Component {
    state = {
        current: 'home',
    }
    
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" id="navbar" style={{ position: 'fixed', zIndex: 1, width: '100%'}} >
                <Menu.Item key="home" style={{ color: '#f7f1e3'}} >
                    <Icon type="home" />Home
                </Menu.Item>
                <Menu.Item key="solution" style={{ color: '#f7f1e3'}}>
                    <Icon type="solution" />Experience
                </Menu.Item>
                <Menu.Item key="contacts" style={{ color: '#f7f1e3'}}>
                    <Icon type="contacts" />Contact me
                </Menu.Item>
                <Menu.Item key="github" >
                    <a href="https://github.com/WaspsMan" style={{ color: '#f7f1e3'}}><Icon type="github" />Github</a>
                </Menu.Item>
            </Menu>
        )
    }
}
