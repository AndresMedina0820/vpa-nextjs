import { format, parseISO, add } from "date-fns";

export const useFormatterDates = (date: string) => {
  const formatterDate = (date: string, formatter = "yyyy-MM-dd") => {
    return format(add(parseISO(date), { days: 1 }), formatter);
  };

  return { formatterDate };
};
