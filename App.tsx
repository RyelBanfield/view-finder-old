import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore/lite";
import AuthStack from "./src/navigation/AuthStack";
import { signOut } from "firebase/auth";
import UserStack from "./src/navigation/UserStack";
import { Text } from "react-native";

export type User = {
  uid: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  accountType: string;
};

export default function App() {
  const [user, setUser] = useState<User | null | "loading">("loading");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFromAuth) => {
      if (userFromAuth) {
        const getUserFromDB = async () => {
          const userRef = doc(db, "users", userFromAuth.uid);
          const userSnap = await getDoc(userRef);
          const userDoc = userSnap.data();

          return userDoc as User;
        };

        getUserFromDB().then((userDoc) => setUser(userDoc));
      } else setUser(null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {user === "loading" && <Text>Loading... </Text>}

      {!user && <AuthStack />}

      {user && user !== "loading" && <UserStack user={user} />}
    </>
  );
}
