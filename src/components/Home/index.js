import React from 'react';

const styles = {
    Container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
}

const Home = () => (
    <div style={styles.Container}>
        <h1>Home</h1>
    </div>
);

export default Home;