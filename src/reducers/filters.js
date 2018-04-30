import defaultAppState from './defaultState';

export const filters = (state = defaultAppState.filters, action) => {
  switch (action.type) {
    case 'updateFilters':
    return {
      ...state,
      ...action.data
    }
    case 'setFiltersUserType':
    return {
      ...state,
      userType: action.userType
    }
    case 'setFiltersLocationChoice':
    return {
      ...state,
      location: action.locationChoice,
    }
    default:
    return state;
  }
};