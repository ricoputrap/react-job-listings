import PropTypes from 'prop-types'
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
          <div>
            <span className={ styles.company }>{ company }</span>
            <span>{ isNew && "NEW!" }</span>
            <span>{ isFeatured && "FEATURED" }</span>
          </div>
          <h3 className={ styles.position }>{ position }</h3>
          <div>
            <span>{ postedAt }</span>
            <span>{ contract }</span>
            <span>{ location }</span>
          </div>
        </div>
      </div>
      <div className="tech">

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