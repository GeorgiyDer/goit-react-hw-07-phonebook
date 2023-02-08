import React from 'react';
import { useEffect } from 'react';
import ContactListItem from '../contactsListItem/contactsListItem'
import * as contactsOperations from '../../redax/contacts/contactsOperations'
import { useDispatch, useSelector } from 'react-redux'
import { StyledUl } from './contactList.styled'


const ContactsList = () => {
    const contacts = useSelector(state => state.contacts.items); 
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)
    
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);


    const findContactbyName = () => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );};
    

    return (
    <>
        {contacts.length > 0 && (
            <StyledUl>
                {findContactbyName()?.map(({ name, phone, id }) => (<ContactListItem
                    key={id}
                    name={name}
                    number={phone}
                    id={id}
                    />))}
            </StyledUl>)}
    </>
    )
}

export default ContactsList