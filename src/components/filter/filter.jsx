import { useSelector, useDispatch } from 'react-redux'
import { filterContact } from 'redax/filter.slice';
import React from 'react'
import { StyledLable, StyledInput } from './filter.styled'


const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter)

    return (
        <StyledLable>Find contacts by name
            <StyledInput type="text" value={filter} onChange={(e) => dispatch(filterContact(e.target.value))} />
        </StyledLable>
    )
}


export default Filter;