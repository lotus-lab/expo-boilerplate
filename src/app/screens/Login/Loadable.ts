/**
 *
 * Asynchronously loads the component for Login
 *
 */

import { lazyLoad } from "src/utils/loadable";

export const Login = lazyLoad(
  () => import("./index"),
  (module) => module.Login
);
