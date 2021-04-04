import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from "./BoxChip.module.css";
import { FilterContext } from "../../App"; 

const BoxChip = ({ label }) => {
  const filterContext = useContext(FilterContext);

  return (
    <div 
      className={ styles.container }
      onClick={() => filterContext.filterDispatch({
        type: "addFilter",
        value: label
      })}
    >
      { label }
    </div>
  )
}

BoxChip.propTypes = {
  label: PropTypes.string
}

export default BoxChip;

