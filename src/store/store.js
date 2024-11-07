import { configureStore } from '@reduxjs/toolkit'
import windowReducer from './slices/windowSlice'
import playlistReducer from './slices/playlistSlice'

const store = configureStore({
	reducer: {
		window: windowReducer,
		playlist: playlistReducer,
	},
})

export default store
