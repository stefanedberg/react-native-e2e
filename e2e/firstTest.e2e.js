describe('Example', () => {
  beforeAll(async () => {
    console.log('await device launchapp')
    await device.launchApp();
    console.log('await device launchapp aft')
  });

  beforeEach(async () => {
    console.log('await device reloadReactNative')
    await device.reloadReactNative();
    console.log('await device reloadReactNative aft')
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
