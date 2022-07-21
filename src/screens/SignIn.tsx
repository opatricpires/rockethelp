import { Envelope, Key } from "phosphor-react-native";
import { Heading, Icon, VStack, useTheme } from "native-base";

import { Alert } from "react-native";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Logo from "../assets/logo_primary.svg";
import auth from "@react-native-firebase/auth";
import { useState } from "react";

export function SignIn() {
  const { colors } = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSingIn() {
    if (!email || !password) {
      return Alert.alert("Entrar", "Informe e-mail e senha!");
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setIsLoading(false);

        if (
          error.code === "auth/invalid-email" ||
          error.code === "auth/wrong-password"
        )
          return Alert.alert("Entrar", "E-mail ou senha inválidos");

        if (error.code === "auth/user-not-found")
          return Alert.alert("Entrar", "Usuário não encontrado");

        return Alert.alert("Entrar", "Não foi possivel acessar");
      });
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>
      <Input
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        mb={8}
        placeholder="Password"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Entrar"
        w="full"
        onPress={handleSingIn}
        isLoading={isLoading}
      />
    </VStack>
  );
}
