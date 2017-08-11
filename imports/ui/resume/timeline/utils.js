import React from 'react';

export const getPeriod = (dateBoundaries) => {
  if(dateBoundaries.endDate) {
    // happened within the short period of time (e.g. same week, same month)
    if(dateBoundaries.startDate == dateBoundaries.endDate) return dateBoundaries.startDate
    else return dateBoundaries.startDate + ' - ' + dateBoundaries.endDate
  }
  else {
    return dateBoundaries.startDate + ' - ' + i18n.__('Content.until_now')
  }
}

export const getFlagSpan = (countryCode) => (
  <span className={"flag-icon flag-icon-" + countryCode}></span>
)
