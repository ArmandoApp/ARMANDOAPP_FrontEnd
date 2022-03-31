import React, { Component } from "react";


import "./Example.css";
import Paper from 'material-ui/Paper';

import { Form, Input, Button } from "antd";


const stylePaper = {
  height: '320px',
  width: '375px',
  background: '#f8f8f9',
  position: 'fixed',
  marginLeft:'20px',
  marginTop: '20px'
};

const styleText = {
    marginLeft: '20px',
    marginTop: '20px',
    fontSize: '1.21429rem',
    fontFamily: 'ff-clan-web-pro,"Helvetica Neue",Helvetica,sans-serif!important',
    fontWeight: '400'
};

const FormItem = Form.Item;

class Signup extends Component {
  state = {
    res: {},
    res_received: false
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          role: 'Work'        
        };
        
        console.log("Received values of form: ", values);        
        alert('Looking for your new service.')
       
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let result = null;
    if (this.state.res_received) {
      alert('Sign Up Succesful!');
      console.log(this.state.res_recieved);
    }

    return (
      <Paper style={stylePaper}>
        
        <Form onSubmit={this.handleSubmit} className="signup-form">
          <div style={{marginTop: '20px', marginBottom: '20px'}}> 
            <div style={styleText}>
            Input the service you require           
            </div>
          </div>          
          <FormItem>
            {getFieldDecorator("destinationlongitude", {
              rules: [{ required: true, message: "Please Input the service you require" }]
            })(<Input placeholder="Service" />)}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="signup-form-button"
            >
              SEARCH
            </Button>
          </FormItem>
          {result}
        </Form>
      </Paper>
    );
  }
}

const Sign_up = Form.create()(Signup);

export default Sign_up;
