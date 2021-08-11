const Add = require('./functions');

test("Add(1,2,5) - Expected: 8", () => {
  expect(Add("1,2,5")).toBe(8);
});
test("Add(1\\n,2,3) - Expected: 6", () => {
  expect(Add("1\\n,2,3")).toBe(6);
});
test("Add(1,\\n2,4) - Expected: 7", () => {
  expect(Add("1,\\n2,4")).toBe(7);
});
test("Add(//;\\n1;3;4) - Expected: 8", () => {
  expect(Add("//;\\n1;3;4")).toBe(8);
});
test("Add(//;\\n1;-3;2) - Expected to throw: Negatives not allowed: -3", () => {
  expect(() => { Add("//;\\n1;-3;2")}).toThrow("Negatives not allowed: -3");
});
test("Add(//$\\n1$2$3) - Expected: 6", () => {
  expect(Add("//$\\n1$2$3")).toBe(6);
});
test("Add(//@\\n2@3@8) - Expected: 13", () => {
  expect(Add("//@\\n2@3@8")).toBe(13);
});
test("Add(//$$$$$\\n1$$$$$2$$$$$9) - Expected: 12", () => {
  expect(Add("//$$$$$\\n1$$$$$2$$$$$9")).toBe(12);
});
test("Add(1,1001,2,9850) - Expected: 3", () => {
  expect(Add("1,1001,2,9850")).toBe(3);
});
test("Add(2,1001) - Expected: 2", () => {
  expect(Add("2,1001")).toBe(2);
});
test("Add(//***\\n1***2***3) - Expected: 6", () => {
  expect(Add("//***\\n1***2***3")).toBe(6);
});
test("Add(//@\\n2@-3@8@-1) - Expected to throw: Negatives not allowed: -3,-1", () => {
  expect(() => { Add("//@\\n2@-3@8@-1")}).toThrow("Negatives not allowed: -3,-1");
});
test("Add(1009,1001,2002,9850) - Expected: 0", () => {
  expect(Add("1009,1001,2002,9850")).toBe(0);
});
test("Add(//$\\n5$5$,6) - Expected to throw: Invalid number: ,6", () => {
  expect(() => { Add("//$\\n5$5$,6")}).toThrow("Invalid number: ,6");
});
test("Add([empty string]) - Expected: 0", () => {
  expect(Add("")).toBe(0);
});
test("Add([blank space]) - Expected: 0", () => {
  expect(Add(" ")).toBe(0);
});