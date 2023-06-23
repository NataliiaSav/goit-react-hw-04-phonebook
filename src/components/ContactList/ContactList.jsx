import React from "react";
import PropTypes from "prop-types";
import css from './ContactList.module.css'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={css.listContainer}>
            {contacts.map(({ id, name, number }) => 
            (<li className={css.contactItem} key = {id}>
                <p>{name}: {number}</p>
                <button className={css.btnDelete} type='button' onClick={() => onDeleteContact(id)}>Delete</button>
            </li>))}
    </ul>
)
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};