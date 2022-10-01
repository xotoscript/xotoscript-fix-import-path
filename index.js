const globCallback = require("glob");
const fs = require("fs").promises;
const replaceInFiles = require("replace-in-files");
const { promisify } = require("util");
const { pascalCase, paramCase, camelCase } = require("change-case");
const glob = promisify(globCallback)

/**
 * convert
 * @comment
 */

async function convert () {
    const importNames = [
        "RouteLocationCustomClass",
        "MapElementClass",
        "StripCustomClass",
        "StructureConstants",
        "OutClickDirective",
        "AnimationTypeEnum",
        "AppStatusEnum",
        "CardListTypeEnum",
        "EntityProviderEnum",
        "FormStateEnum",
        "FormStructureType",
        "FormTypeEnum",
        "IconNameEnum",
        "InteractionTypeEnum",
        "ModifierButtonEnum",
        "ModifierTextEnum",
        "PageSizeEnum",
        "PillEventBusEnum",
        "PresetButtonEnum",
        "PresetListModeEnum",
        "PresetPriceBlockEnum",
        "PresetTextComponentEnum",
        "RoleModifiersEnum",
        "ToastComponentEnum",
        "CurrencyFilter",
        "PresetAbstractCustomClass",
        "ImageSystem",
        "InteractionSystem",
        "ModifierSystem",
        "PageSizeSystem",
        "ButtonThemeSystem",
        "PriceBlockThemeSystem",
        "TextThemeSystem",
        "ToastThemeSystem",
        "ParseNestedArgs",
    ]
    for (let importName of importNames) {
        const { paths } = await replaceInFiles({
            files: [ `./registries/client/xotosphere-client-design/**/*.ts`],
            from: new RegExp(`import {\\s*${importName}\\s*} from ".*?"`, "g"),
            to: `import {${importName}} from "@xotosphere/xotosphere-client-ui"`,
            saveOldFile: false,
            onlyFindPathsWithoutReplace: false
        });
    }
}

(async () => {
	await convert();
})();
