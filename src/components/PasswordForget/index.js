import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

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

const PasswordForgetPage = () => (
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null
}

class PasswordForgetFormBase extends Component {
    constructor (props) {
        super(props);

        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {

        const { email } = this.state;

        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
                this.setState({ error });
            });

        event.preventDefault();

    }

    onChange = event => {
        this.setState({ [event.target.name] : event.target.value });
    }

    render () {

        const { email, error } = this.state;

        const isValid = email === '';

        return (
            <div>

                {error && <p>{error.message}</p>}

                <form onSubmit={this.onSubmit}>
                    <input
                        type="email"
                        name="email"
                        style={styles.Input}
                        value={this.state.email}
                        onChange={this.onChange}
                        placeholder="Email Address"
                    />

                    <button  style={styles.Button} disabled={isValid} type="submit">
                        Reset My Password
                    </button>
                </form>

            </div>
        )
    }
}

const PasswordForgetLink = () => (
    <p>
        <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
)

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink }