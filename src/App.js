import { useState } from 'react'
import Tanymal from './components/Tanymal'
import Header from './components/main/Header'
import MusicList from './components/MusicList'
import Search from './components/Search'
import Menu from './components/main/Menu'
import './index.css'
import Juzz from '../src/templates/icons/Juzz.jpeg'
import Dom50Logo from '../src/templates/icons/Дом 50.jpeg'

function App() {
	const [musics, setMusicList] = useState([
		{
			id: 1,
			img: Juzz,
			title: 'Sheker',
			authorName: 'TBRN',
			liked: false,
		},
		{
			id: 2,
			img: Dom50Logo,
			title: 'Дом 50',
			authorName: 'NOVЫЙ',
			liked: true,
		},
		{
			id: 3,
			img: Juzz,
			title: 'Uide',
			authorName: 'TBRN',
			liked: true,
		},
	])

	return (
		<div className='flex flex-col min-h-screen bg-gradient-to-b from-[#FFFFFF] to-[#999999]'>
			<div className='flex-grow'>
				<Header />
				<Search />
				<Tanymal />

				{musics.map(post => (
					<MusicList post={post} key={post.id} />
				))}
			</div>

			<Menu />
		</div>
	)
}

export default App
