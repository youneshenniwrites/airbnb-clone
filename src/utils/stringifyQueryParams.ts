import qs, { StringifiableRecord } from "query-string";

export function stringifyQueryParams(query: StringifiableRecord) {
  return qs.stringifyUrl({ url: "/", query }, { skipNull: true });
}
