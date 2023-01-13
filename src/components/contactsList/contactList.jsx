import React from 'react';
import ContactListItem from '../contactsListItem/contactsListItem'
import { useSelector } from 'react-redux'
import { StyledUl } from './contactList.styled'


const ContactsList = () => {
    const contacts = useSelector(state => state.contacts.contacts); 
    const filter = useSelector(state => state.filter)
    
    const findContactbyName = () => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );};
    // const visibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(filter))

    return (
    <StyledUl>
        {findContactbyName()?.map(({ name, number, id }) => (<ContactListItem
            key={id}
            name={name}
            number={number}
            id={id}
        />))}
        </StyledUl>
    )
}

export default ContactsList