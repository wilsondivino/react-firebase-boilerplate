import React from 'react';

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
    </div>
);

export default Account;