import PropTypes from 'prop-types'
import RoundedChip from '../RoundedChip';
import styles from "./Job.module.css"

const Job = ({job}) => {
  const {
    logo, company, isNew, isFeatured, 
    position, postedAt, contract, location,
  } = job;

  return (
    <div className={ styles.job }>
      <div className={ styles.details }>
        <img src={ logo } alt="photosnap"/>
        <div>
          <div className={ styles.details_header }>
            <div className={ styles.company }>{ company }</div>
            { isNew && <RoundedChip label="NEW!" /> }
            { isFeatured && <RoundedChip label="FEATURED" isDark /> }
          </div>
          <h3 className={ styles.position }>{ position }</h3>
          <div>
            <span>{ postedAt }</span>
            <span>{ contract }</span>
            <span>{ location }</span>
          </div>
        </div>
      </div>
      <div className="filter">
        
      </div>
    </div>
  )
}

Job.propTypes = {
  company: PropTypes.string,
  isNew: PropTypes.bool,
  isFeatured: PropTypes.bool,
  position: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  location: PropTypes.string,
}

export default Job;