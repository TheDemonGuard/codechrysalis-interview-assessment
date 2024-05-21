const { expect } = require('chai');
const { balancedParens } = require('./index.js');

describe('balancedParens', () => {
  it('should return true because the number of the parens match', () => {
    expect(balancedParens('()')).to.be.true;
    expect(balancedParens('(())')).to.be.true;
    expect(balancedParens('[](){}')).to.be.true;
    expect(balancedParens('[({})]')).to.be.true;
    expect(balancedParens('const dog = { bark: true }')).to.be.true;
  });

  it('should return false because the number of the parens does not match', () => {
    expect(balancedParens('(')).to.be.false;
    expect(balancedParens(')')).to.be.false;
    expect(balancedParens('(()')).to.be.false;
    expect(balancedParens(')(')).to.be.false;
    expect(balancedParens('[(]{)}')).to.be.false;
    expect(balancedParens('const cat = () => { meow();')).to.be.false;
  });

  it('should return false because unexpected values are passed', () => {
    expect(balancedParens()).to.be.false;
    expect(balancedParens('')).to.be.false;
    expect(balancedParens(null)).to.be.false;
    expect(balancedParens(undefined)).to.be.false;
    expect(balancedParens([])).to.be.false;
    expect(balancedParens({})).to.be.false;
    expect(balancedParens(() => {})).to.be.false;
    expect(balancedParens(true)).to.be.false;
    expect(balancedParens(false)).to.be.false;
    expect(balancedParens(123)).to.be.false;
  });
});
