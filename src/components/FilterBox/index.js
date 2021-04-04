import React from 'react'
import PropTypes from 'prop-types'
import styles from "./FilterBox.module.css"
import DeleteableChip from '../DeletableChip'

const FilterBox = props => {
  
  const onClear = e => {
    e.preventDefault();
  }

  return (
    <div className={ styles.container }>
      <div>
        <DeleteableChip label="Frontend" />
      </div>
      
      <a href="" onClick={onClear}>Clear</a>
    </div>
  )
}

FilterBox.propTypes = {

}

export default FilterBox

