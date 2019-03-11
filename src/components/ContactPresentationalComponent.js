import React from 'react'
import DeleteContact from "../containers/DeleteContact";
//import PropTypes from 'prop-types'

const ContactPresentationalComponent = ({name, number, id}) => (
  <li>
    {name},
    {number},
    <DeleteContact id={id}/>
  </li>
);

export default ContactPresentationalComponent
