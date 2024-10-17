import { createSlice } from '@reduxjs/toolkit';
import Juzz from '../../templates/icons/Juzz.jpeg'
import Dom50 from '../../templates/icons/Дом 50.jpeg'

const initialState = {
    windowData: [
        {
            id: 1,
            title: 'Sheker',
            authorName: 'TBRN',
            liked: false,
            img: `${Juzz}`
        },
        {
            id: 2,
            title: 'Дом 50',
            authorName: 'NOVЫЙ',
            liked: true,
            img: `${Dom50}`,
        },
        {
            id: 3,
            title: 'Uide',
            authorName: 'TBRN',
            liked: true,
            img: `${Juzz}`
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
