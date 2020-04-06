import * as fromActionName from './action-name.actions';

describe('loadActionNames', () => {
  it('should return an action', () => {
    expect(fromActionName.loadActionNames().type).toBe('[ActionName] Load ActionNames');
  });
});
