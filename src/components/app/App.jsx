import { Form } from '../form/form';
import ContactsList from '../contactsList/contactList';
import Filter from '../filter/filter';
import { StyledDiv, StyledH1, StyledH2 } from './App.styled'


export const  App = () => { 

    return (
      <StyledDiv>
        <StyledH1>Phonebook</StyledH1>
        <Form />
        <StyledH2>Contacts</StyledH2>
        <Filter />
        <ContactsList />
      </StyledDiv>
    )

}


