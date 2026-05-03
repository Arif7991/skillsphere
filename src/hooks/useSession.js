"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await authClient.getSession();
      if (!error) {
        setSession(data);
      }
      setLoading(false);
    };

    getSession();
  }, []);

  return { session, loading };
}