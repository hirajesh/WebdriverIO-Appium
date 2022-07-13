describe("Test webdriver IO", () => {
  it("Test ", async () => {
    const selectcountry = await $("~twfButton_en_2");
    await selectcountry.waitForDisplayed({ timeout: 20000 });
    selectcountry.click();

    const continuecountryselection = await $("~ttlContinue");
    await continuecountryselection.waitForDisplayed({ timeout: 20000 });
    continuecountryselection.click();

    const skiplocation = await $("//*[@text='Skip and share later']");
    await skiplocation.waitForDisplayed({ timeout: 20000 });
    skiplocation.click();

    const selectdepartment = await $(
      "//android.widget.ImageView[@content-desc='iScaledImage1']"
    );
    await selectdepartment.waitForDisplayed({ timeout: 20000 });
    selectdepartment.click();

    const myaccount = await $("~lblnew-my-accountIcon");
    await myaccount.waitForDisplayed({ timeout: 20000 });
    myaccount.click();

    const signinbutton = await $("~ttlSignIn");
    await signinbutton.waitForDisplayed({ timeout: 20000 });
    signinbutton.click();

    const username = await $("~txtUserName");
    await username.waitForDisplayed({ timeout: 20000 });
    username.setValue("landmarkeod2021@gmail.com");

    const password = await $("~txtPassword");
    await password.waitForDisplayed({ timeout: 20000 });
    password.setValue("123456");

    const loginbutton = await $("~txtIsSubmitButton");
    await loginbutton.waitForDisplayed({ timeout: 20000 });
    loginbutton.click();

    myaccount.click();

    // const signout = await $("//android.widget.TextView[@text='Sign Out']");
    // await signout.waitForDisplayed({ timeout: 20000 });
    // signout.click();
  });
});
