import { configureStore } from '@reduxjs/toolkit'
import windowReducer from './slices/windowSlice'

const store = configureStore({
	reducer: {
		window: windowReducer,
	},
})

export default store
