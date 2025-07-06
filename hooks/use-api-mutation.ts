import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunction);

  const mutate = async (playload: any) => {
    setPending(true);
    return apiMutation(playload)
      .finally(() => {
        setPending(false);
      })
      .then((result: any) => {
        return result;
      })
      .catch((error: any) => {
        throw error;
      });
  };
  return {
    pending,
    mutate,
  };
};
