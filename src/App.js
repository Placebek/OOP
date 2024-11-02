import React from 'react'
import Tanymal from './components/Tanymal'
import Header from './components/main/Header'
import MusicList from './components/MusicList'
import Menu from './components/main/Menu'
import './index.css'
import './styles.css'

import Search from './components/Search'

function App() {
	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#999999]'>
			<div className='flex-grow'>
				<Header />
				<Search />
				<Tanymal />
				<MusicList />
				<Menu />
			</div>
		</div>
	)
}

export default App
