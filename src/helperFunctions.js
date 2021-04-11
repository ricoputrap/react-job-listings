
export const getJobTags = ({ role, level, languages, tools }) => {
  let tags = [];
  role && tags.push(role);
  level && tags.push(level);
  languages.length > 0 && languages.forEach(lang => tags.push(lang));
  tools.length > 0 && tools.forEach(tool => tags.push(tool));
  console.log('tags:', tags)
  return tags;
}

export const getFilteredJobs = (jobs, filters) => {
  return jobs.filter(job => {
    return filters.every(filter => getJobTags(job).includes(filter));
  })
}

export const getFilteredJobs2 = (jobs, filters) => {
  const hasRoleFilter = filters.role !== "";
  const hasLevelFilter = filters.level !== "";
  const hasLanguagesFilter = filters.languages.length > 0;
  const hasToolsFilter = filters.tools.length > 0;

  console.log('filters:', filters)
  console.log('hasRoleFilter:', hasRoleFilter)
  console.log('hasLevelFilter:', hasLevelFilter)
  console.log('hasLanguagesFilter:', hasLanguagesFilter)
  console.log('hasToolsFilter:', hasToolsFilter)

  let isSelected;

  return jobs.filter(job => {
    isSelected = hasRoleFilter ? job.role === filters.role : true;
    console.log('isSelected #1:', isSelected);

    isSelected = hasLevelFilter ? job.level === filters.level : isSelected;
    console.log('isSelected #2:', isSelected);

    // isSelected = hasLanguagesFilter
      // ? filters.languages.map(lang => )

    // isSelected = hasLanguagesFilter 
      // ? filters.languages.includes(job.languages)
      // : isSelected;
    // console.log('isSelected #3:', isSelected);

    // isSelected = hasToolsFilter 
    //   ? filters.tools.includes(job.tools)
    //   : isSelected;
    // console.log('isSelected #4:', isSelected);

    return isSelected;
  })
}