import React, {Component} from 'react';
import LogoContainer from './Welcome__LogoContainer';
import Text from './Welcome__Text';

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <LogoContainer />
                <Text text='welcome.'/>
            </div>
        )
    }
}