

import defaultAppState from './initialState';

export const personList = (state = defaultAppState.personList, action) => {
  if (action.type === 'get_person_list_success' && action.data) return action.data;
  return state;
};