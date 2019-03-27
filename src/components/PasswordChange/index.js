import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null
}

const styles = {
    Container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    Input: {
        height: "30px",
        margin: "10px 0px",
        width: "100%",
        paddingLeft: "5px",
        fontSize: "12px"
    },
    Button: {
        width: "100%",
        height: "30px"
    }
}

class PasswordChangeForm extends Component {
    constructor (props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = event => {

        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState({ ...INITIAL_STATE })
            })
            .catch((error) => {
                this.setState({ error });
            })

        event.preventDefault();

    }

    onChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    };

    render () {

        const { passwordOne, passwordTwo, error } = this.state;

        const isValid = passwordOne === '' || passwordOne !== passwordTwo;

        return (
            <div>
                {error && <p>{error.message}</p>}

                <form onSubmit={this.onSubmit}>
                    <input
                        type="password"
                        name="passwordOne"
                        onChange={this.onChange}
                        style={styles.Input} 
                        placeholder="New Password" />

                    <input
                        type="password"
                        name="passwordTwo"
                        onChange={this.onChange}
                        style={styles.Input} 
                        placeholder="Confirm New Password" />

                    <button style={styles.Button} disabled={isValid} type="submit">
                        Reset My Password
                    </button>
                </form>
            </div>
        )

    }
}

export default withFirebase(PasswordChangeForm);