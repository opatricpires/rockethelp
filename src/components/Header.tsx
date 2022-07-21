import {
  HStack,
  Heading,
  IconButton,
  StyledProps,
  VStack,
  useTheme,
} from "native-base";

import { CaretLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

type Props = StyledProps & {
  title: string;
};

export function Header({ title, ...rest }: Props) {
  const navigation = useNavigation();
  const { colors } = useTheme();

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pt={12}
      pb={5}
      px={6}
    >
      <IconButton
        icon={<CaretLeft size={26} color={colors.gray[300]} />}
        onPress={handleGoBack}
      />
      <Heading color="gray.100" textAlign="center" fontSize="lg">
        {title}
      </Heading>
    </HStack>
  );
}
