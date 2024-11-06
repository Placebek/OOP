import React from 'react'
import Tanymal from './components/Tanymal'
import MusicList from './components/MusicList'
import Menu from './components/main/Menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import './styles.css'

import Search from './components/Search'
import Greeting from './components/profile/Greeting'
import ModalWindows from './components/modals/ModalWindows'

function App() {
	return (
		<Router>
			<div className='flex flex-col min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#999999]'>
				<Menu />
				<ModalWindows />
				<Search />

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
					<Route path='/profile' element={<Greeting />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
