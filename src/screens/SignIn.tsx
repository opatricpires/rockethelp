import { Envelope, Key } from "phosphor-react-native";
import { Heading, Icon, VStack, useTheme } from "native-base";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Logo from "../assets/logo_primary.svg";
import { useState } from "react";

export function SignIn() {
  const { colors } = useTheme();
  const [name, setName] = useState("Patric");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta {name}
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
      <Button title="Entrar" w="full" />
    </VStack>
  );
}
