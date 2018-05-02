import React, {Component} from 'react';
import { Affix, Icon, Modal, Form, Input, message, Select, Mention } from 'antd';
import { inject, observer } from 'mobx-react';

const FormItem = Form.Item;
const Option = Select.Option;
const { toString, toContentState, getMentions } = Mention;

@inject('UrlStore')
@observer
class NewUrl extends Component {
  state = {
    add_modal_show: false,
    add_modal_submitLoading: false
  }

  handleOk = () => {
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log( getMentions(values.category));

        // 检查是否存在新的 category
        getMentions(values.category).map((item => {
          console.log(item);
          if(this.props.UrlStore.category.indexOf(item.replace("@",'')) < 0 ){
            this.props.UrlStore.addCategory({name: item.replace("@",'')});
          }
        }))

        console.log(this.props.UrlStore.category);

        // this.setState({add_modal_submitLoading: true});
        // this.props.UrlStore.add(values).then(e => {
        //   if (e.code === 200) {
        //     this.handleCancel();
        //     this.setState({add_modal_show: false});
        //   }
        // }).catch(e => {
        //   message.error(e);
        // }).finally(()=>{
        //   this.setState({add_modal_submitLoading: false});
        // });
      }
    });
  }

  handleCancel = () => {
    this.props.form.resetFields();
    this.setState({add_modal_show: false});
  }

  handleShowAdd = () => {
    this.setState({add_modal_show: true});
  }

  render(){
    const { add_modal_show, add_modal_submitLoading } = this.state;
    const { getFieldDecorator } = this.props.form;

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
        <Affix className='url__new' onClick={this.handleShowAdd}>
          <Icon type="plus-circle" className='url__new--icon' />
        </Affix>

        <Modal title="添加"
               visible={add_modal_show}
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
            })(
              <Input prefix={<Icon type="link" />} placeholder="链接" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="类型"
          >
            {getFieldDecorator('type', {
              initialValue: 'default'
            })(
              <Select style={{ width: 120 }}>
                <Option value="default">default</Option>
                <Option value="primary">primary</Option>
                <Option value="dashed">dashed</Option>
                <Option value="danger">danger</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="分类"
          >
            {getFieldDecorator('category', {

            })(
              <Mention
                style={{ width: '100%' }}
                suggestions={this.props.UrlStore.category}
              />
            )}
          </FormItem>
        </Modal>
      </div>
    )
  }
}

export default  Form.create()(NewUrl);
