/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Materialize from 'materialize-css/dist/js/materialize.min';
import {
    deleteContacts,
    setCurrent,
    toggleFavorite
} from '../../actions/contactsActions';

function ContactItem({ contact, deleteContacts, setCurrent, toggleFavorite }) {
    const onDelete = id => {
        deleteContacts(id);
        Materialize.toast({ html: 'Contact Deleted' });
    };

    return (
        <div
            style={{ width: '470px', float: 'left', marginRight: '20px' }}
            className="card collection hoverable"
        >
            <div className=" collection-item card-content avatar">
                <i className="material-icons blue circle">contacts</i>
                <span className="card-title">{contact.nickname}</span>
                <p>
                    {contact.email}
                    <br />
                    {contact.phone}
                </p>
                <div
                    style={{ cursor: 'pointer' }}
                    className="right secondary-content"
                    onClick={() => toggleFavorite(contact.id)}
                >
                    <i
                        className={`material-icons ${
                            contact.favorite ? 'blue-text ' : 'grey-text '
                        }`}
                    >
                        grade
                    </i>
                </div>
                <div style={{ marginTop: '20px' }} className="row right">
                    <a
                        onClick={() => setCurrent(contact)}
                        href="#view-contact-modal"
                        className="right-align waves-effect waves-light  card-action  modal-trigger"
                    >
                        <i className="material-icons left">unfold_more</i>
                        View
                    </a>
                    <a
                        onClick={() => setCurrent(contact)}
                        href="#edit-contact-modal"
                        className="right-align waves-effect waves-light  card-action  modal-trigger"
                    >
                        <i className="material-icons left">edit</i>Edit
                    </a>
                    <div
                        onClick={() => onDelete(contact.id)}
                        className=" left-align waves-effect waves-light red-text card-action  "
                    >
                        <i className="material-icons left">delete</i>Delete
                    </div>
                </div>
            </div>
        </div>
    );
}

ContactItem.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    contact: PropTypes.object.isRequired,
    deleteContacts: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
    toggleFavorite: PropTypes.func.isRequired
};

export default connect(
    null,
    { deleteContacts, setCurrent, toggleFavorite }
)(ContactItem);
