import { createSlice } from '@reduxjs/toolkit';
import Juzz from '../../templates/icons/Juzz.jpeg'
import Dom50 from '../../templates/icons/Дом 50.jpeg'

const initialState = {
    playlistData: [
        {
            id: 1,
            playlist_name: 'Душевное',
            playlist_logo: `${Juzz}`,
        },
        {
            id: 2,
            playlist_name: 'На улице',
            playlist_logo: `${Dom50}`,
        },
        {
            id: 3,
            playlist_name: 'На машине',
            playlist_logo: `${Juzz}`,
        }],
};

const playlistSlice = createSlice({
    name: 'playlist',
    initialState,
    reducers: {

    },
});

export default playlistSlice.reducer;
