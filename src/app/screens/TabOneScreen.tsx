import { StyleSheet } from "react-native";

import EditScreenInfo from "src/app/components/EditScreenInfo";
import { Text, View } from "src/app/components/Themed";
import { RootTabScreenProps } from "src/utils/types/types";
import { useLocalization } from "src/locales";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const { i18n } = useLocalization();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>
        {i18n.t("welcome")} {i18n.t("name")}
      </Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
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
