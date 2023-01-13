import { useDispatch } from 'react-redux'
import { deleteContact } from 'redax/contacts.slice';
import PropTypes from 'prop-types';
import { StyledLi, StyledP, StyledButton } from './contactsList.styled'

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <StyledLi key={id}><StyledP>{name}:</StyledP>
        <StyledP>{number}</StyledP>
        <StyledButton type='button' onClick={() => dispatch(deleteContact(id))}>delete</StyledButton>
    </StyledLi>
  );
};
 
ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default ContactListItem;