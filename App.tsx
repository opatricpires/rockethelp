import { Box, NativeBaseProvider } from "native-base";

import React from "react";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  return (
    <NativeBaseProvider>
      <SignIn />;
    </NativeBaseProvider>
  );
}
