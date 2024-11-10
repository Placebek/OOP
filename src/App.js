import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Tanymal from './components/Tanymal'
import MusicList from './components/MusicList'
import Menu from './components/main/Menu'
import Search from './components/Search'
import Greeting from './components/profile/Greeting'
import ModalWindows from './components/modals/ModalWindows'
import Playlist from './components/profile/Playlist'
import News from './components/news/News'
import './index.css'
import './styles.css'

function App() {
	const location = useLocation()

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#999999]'>
			<Menu />
			<ModalWindows />
			{location.pathname !== '/news' && <Search />}

			<Routes>
				<Route
					path='/'
					element={
						<>
							<Tanymal />
							<MusicList />
						</>
					}
				/>
				<Route
					path='/profile'
					element={
						<>
							<Greeting />
							<Playlist />
						</>
					}
				/>
				<Route path='/news' element={<News />} />
			</Routes>
		</div>
	)
}

export default App
