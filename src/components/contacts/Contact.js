import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Contact extends Component {
  state = { showContactInfo: false };

  onDeleteClick = id=>{
    console.log('Deleting ' + id)
  }
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;



    return (
      <div className="card card-body mb-3">
        <h4>
          {name}

          <i 
          onClick={()=> this.setState({
            showContactInfo: !this.state.showContactInfo
          })}
          
          className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>

          <i
            className="fas fa-times "

          onClick={this.onDeleteClick.bind(this, id)}

            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          ></i>

          <Link to={`contact/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem'
              }}
            ></i>
          </Link>
        </h4>

        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email : {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
