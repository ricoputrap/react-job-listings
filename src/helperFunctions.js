
export const getJobTags = ({ role, level, languages, tools }) => {
  let tags = [];
  role && tags.push(role);
  level && tags.push(level);
  languages.length > 0 && languages.forEach(lang => tags.push(lang));
  tools.length > 0 && tools.forEach(tool => tags.push(tool));
  return tags;
}

export const getFilteredJobs = (jobs, filters) => {
  if (filters.length > 0) {
    return jobs.filter(job => {
      return filters.every(filter => getJobTags(job).includes(filter));
    })
  }
  return jobs;
}