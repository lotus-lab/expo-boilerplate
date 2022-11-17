/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "src/utils/types/types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: "one",
            },
          },
          Contact: {
            screens: {
              TabTwoScreen: "two",
            },
          },

          // [LINK NEW SCREEN ABOVE] < Needed for linking screen

          // End
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
