describe("@esm-bundle/angular__animations", () => {
  describe("@angular/animations", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-animations.js`
        );
        expect(m.AnimationBuilder).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-animations.min.js`
        );
        expect(m.AnimationBuilder).toBeDefined();
      });
    });
  });

  describe("@angular/animations/browser", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-browser.js`
        );
        expect(m.AnimationDriver).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-browser.min.js`
        );
        expect(m.AnimationDriver).toBeDefined();
      });
    });
  });
});
