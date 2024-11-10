import { createSlice } from '@reduxjs/toolkit';
import Alash from '../../templates/icons/алаш.jpg'
import Ilon from '../../templates/icons/илон.webp'
import Korruption from '../../templates/icons/кар.jpg'


const initialState = {
    newsData: [
        {
            id: 1,
            news_title: 'Бірдеме-бірдеме',
            news_logo: `${Alash}`,
            news_author: 'Anna Josie',
            news_created_date: '03-10-2020',
        },
        {
            id: 2,
            news_title: 'На улице',
            news_logo: `${Ilon}`,
            news_author: 'Anna Josie',
            news_created_date: '13-02-2020',

        },
        {
            id: 3,
            news_title: 'На машине',
            news_logo: `${Korruption}`,
            news_author: 'Anna Josie',
            news_created_date: '23-11-2020',
        }],
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
});

export default newsSlice.reducer;
