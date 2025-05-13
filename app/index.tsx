// app/index.tsx
import { Redirect } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

export default function Index() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return null; // Or a loading indicator
  }

  return user ? <Redirect href="/(tabs)/notes" /> : <Redirect href="/login" />;
}
