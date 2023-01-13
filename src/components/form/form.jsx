import { useSelector, useDispatch } from 'react-redux'
import { addContact } from 'redax/contacts.slice';
import { useState } from 'react';
import { nanoid } from 'nanoid'
import { StyledDivForm, StyledForm, StyledLable, StyledButton, StyledInput } from './form.styled'


export const Form = () => { 
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const inputChange = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  }
  
  const formSubmit = (e) => { 
    e.preventDefault(); 
    
    const oldName = contacts.map(contact => contact.name);
    if (oldName.includes(name)) {
      reset()
      return alert(`${name} is already in contacts`);
    }
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    }
    
    dispatch(addContact(contact))
    fullReset()
  }

  const reset = () => { 
    setName('')
  }
  const fullReset = () => { 
    setName('')
    setNumber('')
  }
  
  return (
    <StyledDivForm>
      <StyledForm onSubmit={formSubmit}>
        <StyledLable>Name <StyledInput
          type="text"
          value={name} onChange={inputChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
        </StyledLable>
        <StyledLable>Number <StyledInput
          type="tel"
          value={number} onChange={inputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        </StyledLable>

        <StyledButton type='submit'>add contact</StyledButton>
      </StyledForm>
      
    </StyledDivForm>
  )
}


