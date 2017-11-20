export function formatDate(value: Date): string {
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
