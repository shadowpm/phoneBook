import React from 'react'
import {connect} from 'react-redux'
import {deleteContact} from "../actions";

const DeleteContact = ({id, dispatch}) => (
  <button onClick = {() => dispatch(deleteContact(id))}>Delete</button>
);

export default connect()(DeleteContact)
