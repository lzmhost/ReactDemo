import React from 'react';
import PropTypes from 'prop-types';
import { a, b } from './Tree';


class HelloMessage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            textVisible: false
        }
    }

    handClick() {
        this.setState({
            textVisible: !this.state.textVisible
        });
    }
    onSelect(selectedKeys, info){
        return (
            console.log('selected', selectedKeys, info)
        )
    }
    handClick2() {
        a();
    }

    render() {

        let text = null;
        if (this.state.textVisible) {
            text = <span ref="tip">{this.props.text}</span>;
        }

        return (
            <div>

                <button onClick={e => this.handClick2(e)}>访问引入模块的接口</button>
                <button onClick={e => this.handClick(e)}>显示|隐藏</button>
                {text}
            </div>
        )

    }

}

HelloMessage.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HelloMessage;