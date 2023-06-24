import React, { useState } from "react";
import PropTypes from "prop-types";
import css from "./ContactForm.module.css"

export const  ContactForm  = ({onSubmit}) =>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

   const handleChange = event => {
        const { name, value } = event.currentTarget
       switch (name) {
           case 'name':
               setName(value);
               break;
           case 'number':
               setNumber(value);
               break;
           default:
               break;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(name, number);
        setName('');
        setNumber('');
    };
    
        return (
            <form className={css.form} onSubmit = {handleSubmit}>
                <label className = {css.label}>
                    <p className={css.title}>Name</p>
                    <input className={css.input}
                        value={name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className = {css.label}>
                    <p className={css.title}>Number</p>
                    <input
                        className={css.input}
                        value={number}
                        onChange={handleChange}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css.btnContact} type='submit'>Add contact</button>
            </form>
        );
    }                         


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};