import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";
import { Range } from "react-date-range";

export default function useTotalPrice(dateRange: Range, listingPrice: number) {
  const [totalPrice, setTotalPrice] = useState(listingPrice);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && listingPrice) {
        setTotalPrice(dayCount * listingPrice);
      } else {
        setTotalPrice(listingPrice);
      }
    }
  }, [dateRange.startDate, dateRange.endDate, listingPrice]);

  return totalPrice;
}
