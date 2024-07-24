import * as actions from '../actions';
import * as path from '../../core/path';
import { Form, Icon, Input } from 'antd';

import React from 'react';
import { connect } from 'react-redux';
import { osOpenUrl } from '../../core/actions';
import { selectStorageItem } from '../../../store/selectors';
class Custom extends React.Component {

    constructor() {
        super(...arguments);
        this.state = {
            targets: null
        };
    }
    render() {        
        return (
                <Form onSubmit={(e) => {e.preventDefault(); this.sendtargets(this.state.targets); window.location.reload();}}>
                    <h1>Custom Targets</h1>
                    <Form.Item
                        label="Targets"
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                    >
                        <Input
                            value={this.state.targets}
                            onChange={(event) => this.setState({ targets: event.target.value })}
                        />
                    </Form.Item>    
                    <Form.Item
                        wrapperCol={{ span: 20, offset: 4 }}
                    >
                        <Input
                            type="submit"
                            value="Submit"
                        />
                    </Form.Item>
                </Form>
        );
    }
    sendtargets(targets) {
        this.props.sendtargets(targets);
    }
}  

function mapStateToProps(state) {
  return {
    custom: selectStorageItem(state, 'custom'),
  };
}
export default connect(mapStateToProps, {
  ...actions,
  osOpenUrl,
})(Form.create()(Custom));
