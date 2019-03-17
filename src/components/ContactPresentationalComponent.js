import React, {Component} from 'react'
import DeleteContact from "../containers/DeleteContact";
import {connect} from 'react-redux'
import {edit} from '../actions'

//import PropTypes from 'prop-types'

class ContactPresentationalComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      is_edit_mode: false,
      name: props.name,
      number: props.number
    }

    this._save = this._save.bind(this)
  }

  _save() {
    this.setState({is_edit_mode: false})

    // the following two lines are equivalent to this.props.dispatch(edit(this.props.id, {name: this.state.name, number: this.state.number0}))
    const {name, number} = this.state

    this.props.dispatch(edit(this.props.id, {name, number}))
  }

  render() {
    if (!this.state.is_edit_mode) {
      return (
        <li>
          {this.props.name},
          {this.props.number}
          <DeleteContact id={this.props.id}/>
          <button onClick={() => this.setState({is_edit_mode: true})} className="btn btn-primary">edit</button>
        </li>
      )
    } else {
      return (
        <li>
          <input placeholder="Enter name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
          <input placeholder="Enter number" value={this.state.number} onChange={event => this.setState({number: event.target.value})}/>
          <button onClick={() => this.setState({is_edit_mode: false})}>cancel</button>
          <button onClick={this._save}>save</button>
        </li>
      )
    }
  }
}

export default connect()(ContactPresentationalComponent)
