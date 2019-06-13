import React from 'react';
import PropTypes from 'prop-types';

const ListContacts = (props) => {
    const list = props.contacts.map(contact => (
        <li className='contact-list-item'
            key={contact.id}>
            <div className='contact-avatar'
                style={{
                    backgroundImage: `url(${contact.avatarURL})`
                }}></div>
            <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
            </div>
            <button onClick={() => props.removeContact(contact.id)} className='contact-remove'>Remove</button>
        </li>));

    return (
        <ol className='contact-list'>
            {list}

        </ol>
    )
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired
}

export default ListContacts;