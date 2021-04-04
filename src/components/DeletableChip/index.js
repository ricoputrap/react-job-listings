import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from "./DeleteableChip.module.css";
import { FilterContext } from "../../App"; 

const DeleteableChip = ({ index, label }) => {
  const filterContext = useContext(FilterContext);

  return (
    <div className={ styles.container }>
      <span className={ styles.label }>{ label }</span>
      <span 
        className={ styles.delete } 
        onClick={() => filterContext.filterDispatch({
          type: "addFilter",
          value: label
        })}>
        <img src="images/icon-remove.svg" alt="remove" />
      </span>
    </div>
  )
}

DeleteableChip.propTypes = {
  label: PropTypes.string
}

export default DeleteableChip;

