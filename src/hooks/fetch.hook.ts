import React from "react";

type Props<T> = {
  queryFn: () => Promise<T>;
};

export const useFetch = <T>(props: Props<T>) => {
  const [data, setData] = React.useState<T | null>(null);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [isError, setError] = React.useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);

    await props
      .queryFn()
      .then((result: T) => {
        setData(result);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return {
    refetch: fetchData,
    data,
    isLoading,
    isError,
  };
};
