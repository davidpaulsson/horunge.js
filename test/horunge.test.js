const horunge = require("../dist/horunge.js");

test("adds non breaking space", () => {
  expect(horunge("This is a sample heading")).toBe(
    "This is a sample&nbsp;heading"
  );
});

test("excepts options", () => {
  expect(horunge("This is a sample heading", 3)).toBe(
    "This is a&nbsp;sample&nbsp;heading"
  );
});

test("excepts options, large number", () => {
  expect(
    horunge(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas quod tenetur facere corrupti eum consequatur, voluptas dignissimos expedita itaque saepe id debitis atque porro repudiandae odio nihil suscipit reiciendis.",
      10
    )
  ).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quas quod tenetur facere corrupti eum consequatur, voluptas dignissimos expedita itaque saepe&nbsp;id&nbsp;debitis&nbsp;atque&nbsp;porro&nbsp;repudiandae&nbsp;odio&nbsp;nihil&nbsp;suscipit&nbsp;reiciendis."
  );
});

test("doesn't mess with 1 word sentences", () => {
  expect(horunge("Heading")).toBe("Heading");
});

test("doesn't mess with 2 word sentences", () => {
  expect(horunge("Sample heading")).toBe("Sample heading");
});

test("works with ? at the end", () => {
  expect(horunge("This is a sample heading?")).toBe(
    "This is a sample&nbsp;heading?"
  );
});

test("works with ! at the end", () => {
  expect(horunge("This is a sample heading!")).toBe(
    "This is a sample&nbsp;heading!"
  );
});

test("works with a long paragraph", () => {
  expect(
    horunge(
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur unde blanditiis laudantium, inventore repudiandae dicta porro ullam? Consectetur, culpa nemo voluptatum sunt atque harum nam mollitia libero, optio vero, id."
    )
  ).toBe(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur unde blanditiis laudantium, inventore repudiandae dicta porro ullam? Consectetur, culpa nemo voluptatum sunt atque harum nam mollitia libero, optio vero,&nbsp;id."
  );
});

test("strips white space in the beginning and end of string", () => {
  expect(horunge("       Lorem ipsum dolor      ")).toBe(
    "Lorem ipsum&nbsp;dolor"
  );
});

test("ignores html tags inside heading", () => {
  expect(
    horunge(
      "Handcrafted <span>dropcaps by</span> the first year students at <abbr>gdk</abbr>"
    )
  ).toBe(
    "Handcrafted <span>dropcaps by</span> the first year students at&nbsp;<abbr>gdk</abbr>"
  );
});
