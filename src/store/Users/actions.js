const generateInvoice = (details) => dispatch => {
  dispatch({ type: 'SET_INVOICE', payload: details });
}

export {
  generateInvoice
}
