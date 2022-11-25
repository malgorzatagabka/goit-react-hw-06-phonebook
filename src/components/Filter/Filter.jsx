import PropTypes from 'prop-types';
import style from './Filter.module.css'



export const Filter = ({ value, onChange }) => (
    <label>Find contacts by name
        <input className={style.filterInput}
            type="name"
            value={value}
            onChange={onChange}
        />
    </label>
)

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
