import {
  type ElectronApplication,
  _electron as electron,
  expect,
  test,
} from "@playwright/test";
import { findLatestBuild, parseElectronApp } from "electron-playwright-helpers";

/*
 * Using Playwright with Electron:
 * https://www.electronjs.org/pt/docs/latest/tutorial/automated-testing#using-playwright
 */

let electronApp: ElectronApplication;

test.beforeAll(async () => {
  const latestBuild = findLatestBuild();
  const appInfo = parseElectronApp(latestBuild);
  process.env.CI = "e2e";

  electronApp = await electron.launch({
    args: [appInfo.main],
  });
});

test.afterAll(async () => {
  await electronApp.close();
});

test("shows todo form and table in home page", async () => {
  const page = await electronApp.firstWindow();

  await expect(page.locator('input[name="title"]')).toBeVisible();
  await expect(
    page.getByRole("button", {
      name: "Create",
    })
  ).toBeVisible();
  await expect(
    page.getByRole("columnheader", { name: "Actions" })
  ).toBeVisible();
});
