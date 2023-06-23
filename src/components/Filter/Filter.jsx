import React from "react";
import PropTypes from "prop-types";
import css from "./Filter.module.css"

export const Filter = ({value, onChange}) => {
    return (
        <>
            <h5 className ={css.titlefilter}>Find contacts by name</h5>
            <input className ={css.inputfilter} type="text" value={value} onChange={onChange} />
        </>
    )
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};