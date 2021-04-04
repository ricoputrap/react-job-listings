import React, { useContext } from 'react'
import styles from "./FilterBox.module.css"
import DeleteableChip from '../DeletableChip'
import { MainContext } from "../../App"; 


const FilterBox = () => {

  const context = useContext(MainContext);
  const filters = context.state.filters;
  
  const onClear = e => {
    e.preventDefault();
    context.dispatch({ type: 'clearFilter' })
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

export default FilterBox

