export const comma = (count: number): string =>
  count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
