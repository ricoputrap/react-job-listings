const getFilteredJobs = (jobs, filters) {
  jobs.filter(job => {
    const isSelected = false;
    isSelected = filters.includes(job.role);
  })
}