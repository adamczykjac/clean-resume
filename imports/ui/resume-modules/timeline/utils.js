export const renderWorkPeriod = (startDate, endDate) => {
  if(endDate) {
    // happened within the short period of time (e.g. same week, same month)
    if(startDate == endDate) return startDate
    else return startDate + ' - ' + endDate
  }
  else {
    return startDate + ' - ' + i18n.__('Content.until_now')
  }
}
