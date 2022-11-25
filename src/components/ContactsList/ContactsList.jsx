//import { nanoid } from "nanoid";
// import { ContactListItem } from "./ContactListItem"
import PropTypes from 'prop-types';
import style from './Contacts.module.css'

export const ContactList = ({ contacts, toDelete }) => (
  <ul className={style.contactsList}>
    {contacts.map(({ id, name, number }) => (
      <li className={style.contactsItem} key={id}>
        <p>
          {name}: {number}
        </p>
            <button className={style.contactBtn}type="submit" onClick={() => toDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  toDelete: PropTypes.func.isRequired,
};