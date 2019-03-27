import React from 'react';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const styles = {
    Container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
}

const Account = () => (
    <div style={styles.Container}>
        <h1>Account</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);

export default Account;