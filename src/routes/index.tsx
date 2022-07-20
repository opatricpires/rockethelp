import { AppRoutes } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "../screens/SignIn";

export function Routes() {
  const logged = true;

  return (
    <NavigationContainer>
      {logged ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  );
}
