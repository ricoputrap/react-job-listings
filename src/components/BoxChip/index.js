import React from 'react'
import PropTypes from 'prop-types'
import styles from "./BoxChip.module.css";

const BoxChip = ({ label }) => {
  return (
    <div className={ styles.container }>
      { label }
    </div>
  )
}

BoxChip.propTypes = {
  label: PropTypes.string
}

export default BoxChip;

