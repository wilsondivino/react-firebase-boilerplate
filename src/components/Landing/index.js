import React from 'react';

const styles = {
    Container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
}

const Landing = () => (
    <div style={styles.Container}>
        <h1>Landing</h1>
    </div>
);

export default Landing;