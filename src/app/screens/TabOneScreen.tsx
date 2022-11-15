import { StyleSheet } from "react-native";

import EditScreenInfo from "src/app/components/EditScreenInfo";
import { RootTabScreenProps } from "src/utils/types/types";
import { useLocalization } from "src/locales";
import { Container, Text } from "../components/Core";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const { i18n } = useLocalization({
    lang: "ja",
  });
  return (
    <Container style={styles.container}>
      <Text color="text">Tab One</Text>

      <Text>
        {i18n.t("welcome")} {i18n.t("name")}
      </Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
