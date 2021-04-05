import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from "./BoxChip.module.css";
import { MainContext } from "../../App"; 

const BoxChip = ({ label, type }) => {
  const context = useContext(MainContext);

  return (
    <div 
      className={ styles.container }
      onClick={() => context.dispatch({
        type: "addFilter",
        filterLabel: label,
        filterType: type
      })}
    >
      { label }
    </div>
  )
}

BoxChip.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string
}

export default BoxChip;

