import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import moment from 'moment';

export default class Profile extends Component {
    render() {
        return (
            <div style={{margin: '10%'}} className="content">
                <Row gutter={16} style={{width:'75%'}}>
                    <Col span={12} >
                        <Avatar size={300} src="https://scontent.fbkk5-8.fna.fbcdn.net/v/t1.0-9/18194690_1379260148783538_2102926800836133203_n.jpg?_nc_cat=0&oh=fc339e8958b913632efa47d90e8d84e3&oe=5BF0E558"/>
                    </Col>
                    <Col span={12}>
                        <h1 style={{color:'#f7f1e3'}}>I'm Front-end</h1>
                        <h2 style={{color:'#f7f1e3'}}>Name Kittisak Kamonwat</h2>
                        <h2 style={{color:'#f7f1e3'}}>Age {moment().diff(moment("12/08/1994", 'DD/MM/YYYY'), 'years', false)} years</h2>
                        <h2 style={{color:'#f7f1e3'}}>Sex Male</h2>
                        <h2 style={{color:'#f7f1e3'}}>Weight 85 kg</h2>
                        <h2 style={{color:'#f7f1e3'}}>Height 172 cm</h2>
                    </Col>
                </Row>
            </div>
        )
    }
}
