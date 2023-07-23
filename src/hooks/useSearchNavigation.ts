import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";

import { stringifyQueryParams } from "@/utils/stringifyQueryParams";

const useSearchNavigation = (label: string) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    const currentQuery = params ? qs.parse(params.toString()) : {};

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      //* Remove 'category' from the query params if it matches the label
      const { category, ...rest } = updatedQuery;
      router.push(stringifyQueryParams(rest));
    } else {
      router.push(stringifyQueryParams(updatedQuery));
    }
  }, [label, router, params]);

  return handleClick;
};

export default useSearchNavigation;
