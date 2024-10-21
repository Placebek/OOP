import { createSlice } from '@reduxjs/toolkit';
import Juzz from '../../templates/icons/Juzz.jpeg'
import Dom50 from '../../templates/icons/Дом 50.jpeg'
import ShekerMusic from '../../templates/mp3/Sheker.mp3'
import Dom50Music from '../../templates/mp3/Dom50.mp3'
import UideMusic from '../../templates/mp3/Uide.mp3'

const initialState = {
    windowData: [
        {
            id: 1,
            title: 'Sheker',
            authorName: 'TBRN',
            liked: false,
            img: `${Juzz}`,
            music: `${ShekerMusic}`,
        },
        {
            id: 2,
            title: 'Дом 50',
            authorName: 'NOVЫЙ',
            liked: true,
            img: `${Dom50}`,
            music: `${Dom50Music}`,
        },
        {
            id: 3,
            title: 'Uide',
            authorName: 'TBRN',
            liked: true,
            img: `${Juzz}`,
            music: `${UideMusic}`,

        }],
    selectedMusic: null,
    isLargeWindowOpen: false,
    isSmallWindowOpen: false,
};

const windowSlice = createSlice({
    name: 'windows',
    initialState,
    reducers: {
        openLargeWindow(state) {
            state.isLargeWindowOpen = true;
        },
        closeLargeOpenSmallWindow(state) {
            state.isLargeWindowOpen = false;
            state.isSmallWindowOpen = true;
        },
        changeSmallWindow(state, props) {
            state.selectedMusic = props.payload;
        },
        closeSmallWindow(state) {
            state.isSmallWindowOpen = false
        }
    },
});

export const { openLargeWindow, closeLargeOpenSmallWindow, changeSmallWindow, closeSmallWindow } = windowSlice.actions;
export default windowSlice.reducer;
