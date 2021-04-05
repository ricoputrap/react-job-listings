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
        { filters.role && 
          <DeleteableChip 
            key={ filters.role } 
            label={ filters.role }
          />
        }
        { filters.level && 
          <DeleteableChip 
            key={ filters.level } 
            label={ filters.level }
          />
        }
        
        { filters.languages.length > 0 && 
          filters.languages.map((lang, index) => 
          <DeleteableChip 
            key={ index }
            label={ lang } />
        )}

        { filters.tools.length > 0 && 
          filters.tools.map((tool, index) => 
          <DeleteableChip 
            key={ index }
            label={ tool } />
        )}
      </div>
      
      <span className={ styles.link } onClick={onClear}>Clear</span>
    </div>
  )
}

export default FilterBox

