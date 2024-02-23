import React from 'react';
import { connect } from 'react-redux';

const User = ({ user, setUser, clearUser }) => {
  return (
    <div>
      <h2>User: {user ? user.name : 'No user logged in'}</h2>
      <button onClick={() => setUser({ name: 'John' })}>Set User</button>
      <button onClick={clearUser}>Clear User</button>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch({ type: 'SET_USER', payload: user }),
  clearUser: () => dispatch({ type: 'CLEAR_USER' })
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
