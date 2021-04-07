import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from "./DeleteableChip.module.css";
import { MainContext } from "../../App"; 

const DeleteableChip = ({ label, type }) => {
  const context = useContext(MainContext);

  return (
    <div className={ styles.container }>
      <span className={ styles.label }>{ label }</span>
      <span 
        className={ styles.delete } 
        onClick={() => context.dispatch({
          type: "removeFilter",
          filterLabel: label,
          filterType: type
        })}>
        <img src="images/icon-remove.svg" alt="remove" />
      </span>
    </div>
  )
}

DeleteableChip.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
}

export default DeleteableChip;

