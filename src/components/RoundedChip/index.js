import React from 'react'
import PropTypes from 'prop-types'
import styles from "./RoundedChip.module.css";

const Chip = ({ label, isDark }) => {
  return (
    <div className={` ${styles.container} ${isDark && styles.dark} `}>
      { label }
    </div>
  )
}

Chip.propTypes = {
  label: PropTypes.string,
  isDark: PropTypes.bool
}

Chip.defaultProps = {
  isDark: false,
}

export default Chip

