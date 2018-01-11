import React, {Component} from 'react';
import { Icon, Modal, Form, Input, message } from 'antd';
import { inject, observer } from 'mobx-react';

const FormItem = Form.Item;

@inject('UrlStore')
@observer
class Update extends Component {
  state = {
    add_modal_show: false,
    add_modal_submitLoading: false
  }

  handleOk = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.UrlStore.update(values, this.props.UrlStore.update_data.key).then(e => {
          if (e.code === 200) {
            message.success(e.message);
            this.props.UrlStore.closeUpdateModal();
          }
        }).catch(e => {
          message.error(e);
        }).finally(()=>{
          this.setState({add_modal_submitLoading: false});
        });
      }
    });
  }

  handleCancel = () => {
    this.props.UrlStore.closeUpdateModal();
  }

  handleShowUpdate = () => {
    this.setState({add_modal_show: true});
  }

  render(){
    const { add_modal_show, add_modal_submitLoading } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { update_show, update_data } = this.props.UrlStore;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <div>
        <Modal title="修改"
               visible={update_show}
               onOk={this.handleOk}
               confirmLoading={add_modal_submitLoading}
               onCancel={this.handleCancel}
        >
          <FormItem
            {...formItemLayout}
            label="名称"
          >
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title!' }],
              initialValue: update_data.title
            })(
              <Input prefix={<Icon type="tag-o" />} placeholder="名称" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Url"
          >
            {getFieldDecorator('url', {
              rules: [{ required: true, message: 'Please input your Url!' }],
              initialValue: update_data.url
            })(
              <Input prefix={<Icon type="link" />} placeholder="链接" />
            )}
          </FormItem>
        </Modal>
      </div>
    )
  }
}

export default  Form.create()(Update);
