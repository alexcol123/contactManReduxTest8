import React, { Component } from 'react';
import Contact from './Contact';

export class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'Jinna Lynn',
        email: 'JLynn@yahoo.com',
        phone: '505-555-8457'
      },
      {
        id: 2,
        name: 'Lissa Ann',
        email: 'LissaAnn@yahoo.com',
        phone: '305-800-6969'
      },
      {
        id: 3,
        name: 'Mya Kailifa',
        email: 'MyaKal@gmail.com',
        phone: '305-874-9602'
      }
    ]
  };

  render() {
    return (
      <div>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {this.state.contacts.map(contact => (
          <Contact key={contact.id} contact={contact}></Contact>
        ))}
      </div>
    );
  }
}

export default Contacts;
