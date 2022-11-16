/**
 *
 * Login
 *
 */
import React, { memo } from "react";
import { Text, View } from "react-native";
import { RootTabScreenProps } from "src/utils/types/types";
import { useLocalization } from "src/locales";

interface Props {}

export const Login = memo(({ navigation }: RootTabScreenProps<"Login">) => {
  const { i18n } = useLocalization();

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text> {i18n.t("welcome")} </Text>
      <Text
        style={{
          fontFamily: "Jost",
          fontWeight: "600",
          fontSize: 40,
        }}
      >
        Login Screen
      </Text>
    </View>
  );
});
