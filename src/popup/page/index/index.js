import React, {Component} from 'react';
import { Button, Form, Input, Icon, Select } from 'antd';
import { message } from 'antd';
import { inject, observer } from 'mobx-react';

const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;

@inject('UrlStore')
@observer
class Index extends Component {
  state = {}

  addCollection = () => {
    
    console.log("chrome", window.chrome);
    window.chrome.tabs.query({
      active: true
    }, (tabs) => {
      // [ Tab ]   https://crxdoc-zh.appspot.com/extensions/tabs#type-Tab
      console.log(tabs);

      let values = {
        title: tabs[0].title,
        url: tabs[0].url
      }
  
      this.props.UrlStore.add(values).then(e => {
        if (e.code === 200) {
          message.success("添加成功");
        }
      }).catch(e => {
        message.error(e.message);
      });
    })
  }

  render(){
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
          <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <TextArea placeholder="标题" size="small"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('type', {
              initialValue: 'lucy'
            })(
              <Select style={{ width: 120 }} size='small'>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            )}
          </FormItem>
            <Button type="primary" onClick={this.addCollection}>收藏</Button>
          </Form>
      </div>
    )
  }
}

export default Form.create()(Index);
