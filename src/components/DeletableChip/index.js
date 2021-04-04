import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from "./DeleteableChip.module.css";
import { MainContext } from "../../App"; 

const DeleteableChip = ({ label }) => {
  const context = useContext(MainContext);

  return (
    <div className={ styles.container }>
      <span className={ styles.label }>{ label }</span>
      <span 
        className={ styles.delete } 
        onClick={() => context.dispatch({
          type: "removeFilter",
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

