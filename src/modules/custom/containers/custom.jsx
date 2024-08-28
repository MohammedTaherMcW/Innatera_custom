import * as actions from '../actions';
import { Form, Input,Tooltip } from 'antd';
// filename app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { InfoCircleTwoTone } from '@ant-design/icons';

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
                    <h1 className="display-4">Custom Targets</h1>
                    <div className="alert alert-warning" role="alert">
                        <p className="mb-0" style={{fontSize: '18px'}}>Warning! : The order of Execution of the targets will be same as the order of the targets specified.</p>
                    </div>
                <Form.Item 
                    label= "Targets"
                    labelCol={{ span: 4, offset: 0 }} 
                    wrapperCol={{ span: 4, offset: 0 }} 
                    style={{ display: 'flex' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Input
                            size="small"
                            style={{ height: '30px', fontSize: '16px', flexGrow: 1 }}
                            value={this.state.targets}
                            onChange={(event) => this.setState({ targets: event.target.value })}
                        />
                        <Tooltip title="Note: Multiple targets should be separated by Comma.">
                            <InfoCircleTwoTone style={{ marginLeft: '8px', fontSize: '16px' }} />
                        </Tooltip>
                    </div>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{ span: 3, offset: 4, style: { height: '60px' } }}
                    >
                        <Input
                            size="small"
                            type="submit"
                            value="Submit"
                            className="btn btn-primary btn-sm mw-100 h-100"
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
