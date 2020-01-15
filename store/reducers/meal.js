import { MEALS } from '../../data/dummy-data'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};


const mealsReducer = (state = initialState, action) => {

  // switch (action.type) {
  //   case '':
  //     return;
  // }

  return state;
}

export default mealsReducer;