import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useSetQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setQuery = (name: string, value: string | number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name.toLowerCase(), value.toString().toLowerCase());

    // router.push(pathname + "?" + name + "=" + value.toString()?.toLowerCase(), {
    router.push(pathname + "?" + params.toString(), {
      scroll: false,
    });
  };

  return setQuery;
};

export const useDeleteQuery = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const deleteQuery = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      router.push(pathname + "?" + params.toString(), { scroll: false });
    },
    [searchParams]
  );

  return deleteQuery;
};
