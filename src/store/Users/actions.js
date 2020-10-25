const logout = () => dispatch => {
  dispatch({ type: 'RESET_STATE' });
}

export {
  logout
}
