import { useState } from 'react'
import Tanymal from './components/Tanymal'
import Header from './components/main/Header'
import MusicList from './components/MusicList'
import Search from './components/Search'
import './index.css'
import musicLogo from '../src/templates/icons/image.png'
import Dom50Logo from '../src/templates/icons/Дом 50.jpeg'

function App() {
	const [musics, setMusicList] = useState([
		{
			img: musicLogo,
			title: 'Sheker',
			authorName: 'TBRN',
			liked: false,
		},
		{
			img: Dom50Logo,
			title: 'Дом 50',
			authorName: 'NOVЫЙ',
			liked: true,
		},
		{
			img: musicLogo,
			title: 'Uide',
			authorName: 'TBRN',
			liked: true,
		},
	])

	return (
		<div className='{} * : h-screen bg-gradient-to-b from-[#FFFFFF] to-[#999999] '>
			<Header />
			<Search />
			<Tanymal />
			{musics.map(post => (
				<MusicList post={post} />
			))}
		</div>
	)
}

export default App
