import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Form.css';
import plus from './../assets/add_red.svg';

class From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    add = _=> {
        if (this.state.name) {
            this.props.add(this.state.name);
            this.props.history.push('/')
        }
    }

    render() {
        return (
            <div className='Route From'>
                <h1>Add</h1>
                <div className='input_box'>
                    <input value={this.state.name} onChange={e => {
                        this.setState({
                            name: e.target.value
                        })
                    }} />
                    <img src={plus} alt='add' onClick={this.add} />
                </div>
            </div>
        )
    }
}

export default withRouter(From);