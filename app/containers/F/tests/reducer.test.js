
import { fromJS } from 'immutable';
import fReducer from '../reducer';

describe('fReducer', () => {
  it('returns the initial state', () => {
    expect(fReducer(undefined, {})).toEqual(fromJS({}));
  });
});
