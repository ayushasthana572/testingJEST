const model = require('./run');

describe(`addition test case`,()=>{
test("should add two numbers",()=>{
    expect(model.addTwoNumber(2,3)).toBe(5);
});
test("should throw error if no arguments are passes",()=>{
    expect(()=>model.addTwoNumber()).toThrow();
});
});

describe(`subtraction test case`,()=>{
    test("should subtract two numbers",()=>{
        expect(model.subtractTwoNumber(5,2)).toBe(3);
    });
    test("should throw error if no arguments are passes",()=>{
        expect(()=>model.subtractTwoNumber()).toThrow();
    });
});

describe(`multiplication test case`,()=>{
    test("should multiply two numbers",()=>{
        expect(model.multiplyTwoNumber(5,4)).toBe(20);
    });
    test("should throw error if no arguments are passes",()=>{
        expect(()=>model.multiplyTwoNumber()).toThrow();
    });
});

describe(`division test case`,()=>{
    test("should divide two numbers",()=>{
        expect(model.divideTwoNumber(6,3)).toBe(2);
    });
    test("divisor should not equal to zero",()=>{
        expect(()=>model.divideTwoNumber(5,0)).toThrow();
    });
});