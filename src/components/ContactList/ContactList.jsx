import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { List, ContactItem, Button } from './ContactListStyle';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem key={id}>
            {name} : {number}
            <Button type="button" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </ContactItem>
        );
      })}
    </List>
  );
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),

  deleteContact: PropTypes.func,
};
