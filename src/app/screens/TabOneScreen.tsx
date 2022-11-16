import { StyleSheet } from "react-native";

import EditScreenInfo from "src/app/components/EditScreenInfo";
import { RootTabScreenProps } from "src/utils/types/types";
import { useLocalization } from "src/locales";
import { Button, Container, Text } from "../components/Core";
import { useDispatch } from "react-redux";
import { useDefaultLayoutSlice } from "./defaultLayout/slice";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const { i18n } = useLocalization({
    lang: "ja",
  });
  const dispatch = useDispatch();
  const { actions } = useDefaultLayoutSlice();
  return (
    <Container style={styles.container}>
      <Text color="text">Tab One</Text>
      <Button
        bg="primary"
        p="2"
        borderRadius="6"
        onPress={() => {
          dispatch(actions.changeThemeMode("dark"));
        }}
      >
        <Text color="text">Change Theme</Text>
      </Button>
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
