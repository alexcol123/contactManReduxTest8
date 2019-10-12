import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../actions/contactActions';


export class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // check form errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }
    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }
    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const newContact = {
      name,
      email,
      phone
    };

    // Submit Contact
    this.props.addContact(newContact);

    // Clear State

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
    this.props.history.push('/');
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, phone } = this.state;
    console.log(this.state);

    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor={name}>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
                className={
                  this.state.errors.name
                    ? 'form-control form-control-lg is-invalid'
                    : ' form-control form-control-lg '
                }
              />
              {this.state.errors && (
                <div className="invalid-feedback">{this.state.errors.name}</div>
              )}
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                // error={errors.email}
                onChange={this.onChange}
                className={
                  this.state.errors.email
                    ? 'form-control form-control-lg is-invalid'
                    : ' form-control form-control-lg '
                }
              />
              {this.state.errors && (
                <div className="invalid-feedback">
                  {this.state.errors.email}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone"
                value={phone}
                //error={errors.phone}
                onChange={this.onChange}
                className={
                  this.state.errors.phone
                    ? 'form-control form-control-lg is-invalid'
                    : ' form-control form-control-lg '
                }
              />
              {this.state.errors && (
                <div className="invalid-feedback">
                  {this.state.errors.phone}
                </div>
              )}
            </div>

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-danger btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(AddContact);
