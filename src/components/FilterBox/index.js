import React from 'react'
import PropTypes from 'prop-types'
import styles from "./FilterBox.module.css"
import DeleteableChip from '../DeletableChip'

const FilterBox = ({ filters }) => {
  
  const onClear = e => {
    e.preventDefault();
  }

  return (
    <div className={ styles.container }>
      <div>
        {filters.length > 0 && 
        filters.map(filter => 
          <DeleteableChip label={ filter } key={ filter } />
        )}
      </div>
      
      <span className={ styles.link } onClick={onClear}>Clear</span>
    </div>
  )
}

FilterBox.propTypes = {
  filters: PropTypes.array
}

FilterBox.defaultProps = {
  filters: [],
}

export default FilterBox

