import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styles from "./FilterBox.module.css"
import DeleteableChip from '../DeletableChip'
import { FilterContext } from "../../App"; 


const FilterBox = () => {

  const filterContext = useContext(FilterContext);
  const filters = filterContext.filterState.filters;
  
  const onClear = e => {
    e.preventDefault();
  }

  return (
    <div className={ styles.container }>
      <div>
        { filters.length > 0 && 
          filters.map((filter, index) => 
          <DeleteableChip 
            key={ index }
            label={ filter } />
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
  filters: ["Frontend", "JS"],
}

export default FilterBox

