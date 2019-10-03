import React, { Component } from 'react';
import Contact from './Contact';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

export class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    console.log(this.props);

    const { contacts } = this.props;

    return (
      <div>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact}></Contact>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { getContacts }
)(Contacts);
