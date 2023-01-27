import { signOut } from "firebase/auth";
import { Button, Text } from "react-native";
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { User } from "../../App";

const Home = ({ user }: { user: User }) => {
  const handleSignOut = () => signOut(auth);

  return (
    <SafeAreaView>
      <Text>{user.firstName}</Text>
      <Button title="Logout" onPress={handleSignOut} />
    </SafeAreaView>
  );
};

export default Home;
