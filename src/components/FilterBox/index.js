import React from 'react'
import PropTypes from 'prop-types'
import BoxChip from '../BoxChip'
import styles from "./FilterBox.module.css"

const FilterBox = props => {
  
  const onClear = e => {
    e.preventDefault();
  }

  return (
    <div className={ styles.container }>
      <div>
        <BoxChip label="Frontend" />
        <BoxChip label="Junior" />
      </div>
      
      <a href="" onClick={onClear}>Clear</a>
    </div>
  )
}

FilterBox.propTypes = {

}

export default FilterBox

