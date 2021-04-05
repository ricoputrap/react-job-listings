import PropTypes from 'prop-types'
import RoundedChip from '../RoundedChip';
import BoxChip from '../BoxChip';
import styles from "./Job.module.css"

const Job = ({job}) => {
  const {
    logo, company, isNew, isFeatured, 
    position, postedAt, contract, location,
    role, level, languages, tools
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

          <div className={ styles.details_footer }>
            <span>{ postedAt }</span>
            <span className={ styles.dot }></span>
            <span>{ contract }</span>
            <span className={ styles.dot }></span>
            <span>{ location }</span>
          </div>
        </div>
      </div>

      <div className={ styles.filter }>
        <BoxChip label={ role } type="role" />
        <BoxChip label={ level } type="level" />
        { languages.length > 0 && 
          languages.map(lang => 
          <BoxChip 
            label={ lang }
            type="languages"
            key={ lang } 
          />
        )}
        { tools.length > 0 &&
          tools.map(tool => 
          <BoxChip 
            label={ tool } 
            type="tools" 
            key={ tool }
          />
        )}
      </div>
    </div>
  )
}

Job.propTypes = {
  logo: PropTypes.string,
  company: PropTypes.string,
  isNew: PropTypes.bool,
  isFeatured: PropTypes.bool,
  position: PropTypes.string,
  postedAt: PropTypes.string,
  contract: PropTypes.string,
  location: PropTypes.string,
}

export default Job;