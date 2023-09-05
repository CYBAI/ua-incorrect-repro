import { expect, browser, $ } from "@wdio/globals";

describe("test", () => {
  it("should render UA for mobile emulation properly", async () => {
    await browser.url(
      `https://www.whatismybrowser.com/detect/what-is-my-user-agent/`
    );

    const el = await $("#detected_value");
    const text = await el.getText();

    if (process.env.OS?.toLowerCase() === "android") {
      expect(text).toBe(
        "Mozilla/5.0 (Linux; Android 11; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.181 Mobile Safari/537.36"
      );
    } else {
      expect(text).toBe(
        "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
      );
    }
  });
});
