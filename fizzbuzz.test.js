const {fizzbuzz} = require("./fizzbuzz");

//test("add 1+ to equal 3",()=>{
//  expect(2+2).toBe(4);
//}) 

it("divides 45 % 3 && divides 45 % 5 to equal FizzBuzz",()=>{
  expect(fizzbuzz(15))/*15 %3 && 15 %5*/.toBe("FizzBuzz");
})
it("divides 15 % 3 to equal fizz",()=>{
  expect( fizzbuzz(33)).toBe("Fizz");
})
it ("divides 25 % 5 to equal Buzz",()=>{
  expect(fizzbuzz(25)).toBe("Buzz");
})
it ("divides 49 % 5 or 49 % 3 to equal 49 ",()=>{
  expect(fizzbuzz(49)).toBe(49);
})