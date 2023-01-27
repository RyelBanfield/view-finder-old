import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      alert(error.message)
    );
  };

  return (
    <SafeAreaView>
      <TextInput
        onChangeText={setEmail}
        value={email}
        className="border-2 w-1/2 p-2 m-2 mx-auto"
      />
      <TextInput
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        className="border-2 w-1/2 p-2 m-2 mx-auto"
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </SafeAreaView>
  );
};

export default Auth;
