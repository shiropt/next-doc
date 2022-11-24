import useSWR from "swr";

export const useFetch = <T>(url: string) => {
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  };
  const { data, error } = useSWR<T>(url, fetcher);

  return { data, error };
};
