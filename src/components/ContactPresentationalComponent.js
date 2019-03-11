import React from 'react'
import DeleteContactPresentationComponent from './DeleteContactPresentationComponent'
//import PropTypes from 'prop-types'

const ContactPresentationalComponent = ({name, number}) => (
  <div>
    <li>
      {name},
      {number}
    </li>
    <DeleteContactPresentationComponent/>
  </div>
);

export default ContactPresentationalComponent
