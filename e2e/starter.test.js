/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should change dark theme', async () => {
    await expect(element(by.id('changeDark'))).toBeVisible();
    await element(by.id('changeDark')).tap();
  });
});
