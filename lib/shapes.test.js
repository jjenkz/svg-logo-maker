describe("shape classes", () => {
  test("Circle render method", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      <circle cx="150" cy="100" r="50" fill="${this.color}" />
    );
  });

  test("Triangle render method", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      <polygon points="150,50 100,150 200,150" fill="${this.color}" />
    );
  });

  test("Square render method", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      <rect x="100" y="50" width="100" height="100" fill="${this.color}" />
    );
  });
});
