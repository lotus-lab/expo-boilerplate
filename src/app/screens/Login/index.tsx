/**
 *
 * Login
 *
 */
import React, { memo } from "react";
import { Text, View } from "react-native";
import { RootTabScreenProps } from "utils/types/types";
import { useTranslation } from "react-i18next";
import { messages } from "./messages";

interface Props {}

export const Login = memo(({ navigation }: RootTabScreenProps<"Login">) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

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
      {t("")}
      {/*  {t(...messages.someThing())}  */}
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
