import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieReducer'
import tvReducer from './reducers/tvReducer'
import personReducer from './reducers/personReducer'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tv: tvReducer,
    person: personReducer,
  },
})

