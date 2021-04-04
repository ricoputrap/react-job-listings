import React from 'react'
import PropTypes from 'prop-types'
import styles from "./DeleteableChip.module.css";

const DeleteableChip = ({ label }) => {
  return (
    <div className={ styles.container }>
      <span className={ styles.label }>{ label }</span>
      <span className={ styles.delete }>
        <img src="images/icon-remove.svg" alt="remove" />
      </span>
    </div>
  )
}

DeleteableChip.propTypes = {
  label: PropTypes.string
}

export default DeleteableChip;

