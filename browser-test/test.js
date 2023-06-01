describe("@esm-bundle/angular__animations", () => {
  describe("@angular/animations", () => {
    it("can load the System.register es2022 bundle", async () => {
      const m = await System.import(
        "/base/system/es2022/ivy/angular-animations.js"
      );
      expect(m.AnimationBuilder).toBeDefined();
    });

    it("can load the System.register es2022 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2022/ivy/angular-animations.min.js"
      );
      expect(m.AnimationBuilder).toBeDefined();
    });
  });

  describe("@angular/animations/browser", () => {
    it("can load the System.register es2022 bundle", async () => {
      const m = await System.import(
        "/base/system/es2022/ivy/angular-browser.js"
      );
      expect(m.AnimationDriver).toBeDefined();
    });

    it("can load the System.register es2022 prod bundle", async () => {
      const m = await System.import(
        "/base/system/es2022/ivy/angular-browser.min.js"
      );
      expect(m.AnimationDriver).toBeDefined();
    });
  });
});
