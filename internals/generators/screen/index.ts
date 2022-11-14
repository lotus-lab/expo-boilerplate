import { Actions, PlopGeneratorConfig } from "node-plop";
import inquirer from "inquirer";

import { pathExists } from "../utils";
import { baseGeneratorPath } from "../paths";
import path from "path";

inquirer.registerPrompt("directory", require("inquirer-directory"));

export enum ScreenProptNames {
  screenName = "screenName",
  path = "path",
  wantMemo = "wantMemo",
  wantStyledComponents = "wantStyledScreens",
  wantTranslations = "wantTranslations",
  wantLoadable = "wantLoadable",
  wantTests = "wantTests",
}

type Answers = { [P in ScreenProptNames]: string };

export const rootNavigationTypesPath = path.join(
  __dirname,
  "../../../src/utils/types/types.tsx"
);
export const rootNavigationScreenPath = path.join(
  __dirname,
  "../../../src/navigation/index.tsx"
);

export const rootNavigationLinkingPath = path.join(
  __dirname,
  "../../../src/navigation/LinkingConfiguration.ts"
);

export const screenGenerator: PlopGeneratorConfig = {
  description: "Add a screen",
  prompts: [
    {
      type: "input",
      name: ScreenProptNames.screenName,
      message: "What should it be called?",
    },
    {
      type: "directory",
      name: ScreenProptNames.path,
      message: "Where do you want it to be created?",
      basePath: `${baseGeneratorPath}`,
    } as any,
    {
      type: "confirm",
      name: ScreenProptNames.wantMemo,
      default: false,
      message: "Do you want to wrap your screen in React.memo?",
    },
    {
      type: "confirm",
      name: ScreenProptNames.wantStyledComponents,
      default: true,
      message: "Do you want to use styled-components?",
    },
    {
      type: "confirm",
      name: ScreenProptNames.wantTranslations,
      default: false,
      message:
        "Do you want i18n translations (i.e. will this screen use text)?",
    },
    {
      type: "confirm",
      name: ScreenProptNames.wantLoadable,
      default: false,
      message: "Do you want to load the screen asynchronously?",
    },
    // {
    //   type: "confirm",
    //   name: ScreenProptNames.wantTests,
    //   default: false,
    //   message: "Do you want to have tests?",
    // },
  ],
  actions: (data) => {
    const answers = data as Answers;

    const screenPath = `${baseGeneratorPath}/${answers.path}/{{properCase ${ScreenProptNames.screenName}}}`;
    const actualScreenPath = `${baseGeneratorPath}/${answers.path}/${answers.screenName}`;

    if (pathExists(actualScreenPath)) {
      throw new Error(`Screen '${answers.screenName}' already exists`);
    }
    const actions: Actions = [
      {
        type: "add",
        path: `${screenPath}/index.tsx`,
        templateFile: "./screen/index.tsx.hbs",
        abortOnFail: true,
      },
    ];

    if (answers.wantLoadable) {
      actions.push({
        type: "add",
        path: `${screenPath}/Loadable.ts`,
        templateFile: "./screen/loadable.ts.hbs",
        abortOnFail: true,
      });
    }

    if (answers.wantTests) {
      actions.push({
        type: "add",
        path: `${screenPath}/__tests__/index.test.tsx`,
        templateFile: "./screen/index.test.tsx.hbs",
        abortOnFail: true,
      });
    }

    actions.push({
      type: "modify",
      path: `${rootNavigationTypesPath}`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW SCREEN KEY ABOVE\].+\n/),
      templateFile: "./screen/appendScreenType.hbs",
      abortOnFail: true,
    });
    actions.push({
      type: "modify",
      path: `${rootNavigationScreenPath}`,
      pattern: new RegExp(/.*\/\/.*\[INSERT NEW SCREEN COMPONENT ABOVE\].+\n/),
      templateFile: "./screen/appendScreenComponent.hbs",
      abortOnFail: true,
    });
    actions.push({
      type: "modify",
      path: `${rootNavigationScreenPath}`,
      pattern: new RegExp(/.*\/\/.*\[IMPORT NEW COMPONENT SCREEN ABOVE\].+\n/),
      templateFile: "./screen/importScreenComponent.hbs",
      abortOnFail: true,
    });
    actions.push({
      type: "modify",
      path: `${rootNavigationLinkingPath}`,
      pattern: new RegExp(/.*\/\/.*\[LINK NEW SCREEN ABOVE\].+\n/),
      templateFile: "./screen/appendScreenInLinking.hbs",
      abortOnFail: true,
    });
    actions.push({
      type: "prettify",
      data: { path: `${actualScreenPath}/**` },
    });
    actions.push({
      type: "prettify",
      data: { path: `${rootNavigationTypesPath}/**` },
    });
    actions.push({
      type: "prettify",
      data: { path: `${rootNavigationScreenPath}/**` },
    });
    actions.push({
      type: "prettify",
      data: { path: `${rootNavigationLinkingPath}/**` },
    });

    return actions;
  },
};
