import { configureStore } from '@reduxjs/toolkit'
import windowReducer from './slices/windowSlice'
import playlistReducer from './slices/playlistSlice'
import newsReducer from './slices/newsSlices'

const store = configureStore({
	reducer: {
		window: windowReducer,
		playlist: playlistReducer,
		news: newsReducer,
	},
})

export default store
