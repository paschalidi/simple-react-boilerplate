import { createSelector } from 'reselect';

/**
 * Direct selector to the f state domain
 */
const selectFDomain = () => (state) => state.get('f');

/**
 * Other specific selectors
 */


/**
 * Default selector used by F
 */

const makeSelectF = () => createSelector(
  selectFDomain(),
  (substate) => substate.toJS()
);

export default makeSelectF;
export {
  selectFDomain,
};
