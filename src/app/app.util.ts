export function formatDate(value: Date): string {
  value = removeTime(value);
  if (value !== null && value !== undefined) {
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const date = value.getDate();
    // formatted to yyyy-MM-dd
    const formatted =
      ((year < 1000) ? '0' + year : year) + '-'
      + ((month < 10) ? '0' + month : month) + '-'
      + ((date < 10) ? '0' + date : date);
    return formatted;
  }
}

export function formatDateLocale(value: Date): string {
  value = removeTime(value);
  if (value !== null && value !== undefined) {
    const year = value.getFullYear();
    const month = value.getMonth() + 1;
    const date = value.getDate();
    // formatted to mm/dd/yyyy
    const formatted =
      ((month < 10) ? '0' + month : month) + '/'
      + ((date < 10) ? '0' + date : date) + '/'
      + ((year < 1000) ? '0' + year : year);
    return formatted;
  }
}

export function computeAge(date: Date): number {
  const diff = removeTime(new Date()).valueOf() - removeTime(new Date(date)).valueOf();
  return Math.floor(diff / 31557600000);
}

export function removeTime(date: Date): Date {
  date.setHours(0);
  date.setMinutes(0);
  date.setSeconds(0);
  return date;
}
