import { ref } from 'vue'

export function useFilter() {
  const data = ref('')
  const toNumber = (num: string) => Number(num)
  const toLS = (num: number) => num?.toLocaleString()
  const addDays = (days: number, date = <Date>new Date()) => {
    date.setDate(date.getDate() + days);
    return date;
  }
  const formatDate = (current_datetime: Date) => {
    return current_datetime.toISOString().split('T')[0]
  }
  return {
    data,
    toNumber,
    toLS,
    addDays,
    formatDate
  }
}