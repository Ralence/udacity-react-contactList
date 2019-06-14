import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        removeContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuary = (query) => {
        this.setState(() => ({ query: query.trim() }))
    };

    clearQuery = () => {
        this.updateQuary('');
    };

    render() {
        const { query } = this.state;
        const { contacts, removeContact } = this.props;

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))

        const list = showingContacts.map(contact => (
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
                <button onClick={() => removeContact(contact.id)} className='contact-remove'>Remove</button>
            </li>));

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(e) => this.updateQuary(e.target.value)}
                    />
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>show all</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {list}
                </ol>
            </div>

        )
    }
}

export default ListContacts;