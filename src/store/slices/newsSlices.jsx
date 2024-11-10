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
            news_text: "Alash-Orda (qaz. Alash orda) nemese Alash avtonomıasy (qaz. Alash avtonomıasy)-azamattyq soǵys jyldarynda bolǵan Alash-Orda ýaqytsha Halyq Keńesiniń basqarýymen ózin-ózi jarıalaǵan Qazaq memlekettik bilimi. Avtonomıa 1917 jyly 5-13 jeltoqsanda Orynborda ótken ekinshi jalpyqazaq (túpnusqada-jalpy qyrǵyz) sezimen quryldy jáne 1920 jyly 5 naýryzda Qyrǵyz ólkesin basqarý jónindegi bólshevıkter revolúsıalyq komıtetimen taratyldy, biraq is júzinde 1919 jyldyń jazynda ómir súrýin toqtatty. Avtonomıanyń astanasy Alash-qala (qazirgi Semeı) dep atalatyn Semeı qalasy boldy. Ol ózin Ýaqytsha úkimettiń basqarýymen Reseı Respýblıkasynyń avtonomıasy dep sanady, 1918 jyldan bastap-Ýaqytsha Búkilreseılik Úkimettiń basqarýymen Reseı memleketi, keıinirek-Reseıdiń joǵarǵy bıleýshisi[3][4][5]."
        },
        {
            id: 2,
            news_title: 'На улице',
            news_logo: `${Ilon}`,
            news_author: 'Anna Josie',
            news_created_date: '13-02-2020',
            news_text: "Ilon Mask-kásipker, jer betindegi eń baı adam. Ol qazir 51 jasta jáne onyń baılyǵy 260 mıllıard dollarǵa baǵalanady.Bolashaqta bul planetadaǵy alǵashqy trıllıoner bolýǵa barlyq múmkindigi bar Mask.Órshil kásipker kólik jáne ınternet ındýstrıasyn Ózgertýdi, Marsty otarlaýdy, adamdardy neırochıptermen emdeýdi, sondaı- aq adamdarǵa zıan keltirmesten ártúrli robottar jasaýdy josparlap otyr."

        },
        {
            id: 3,
            news_title: 'На машине',
            news_logo: `${Korruption}`,
            news_author: 'Anna Josie',
            news_created_date: '23-11-2020',
            news_text: 'Qazaqstandaǵy sybaılas jemqorlyq qazirgi Qazaqstannyń problemasy bolyp tabylady, ol eldiń ekonomıkalyq jáne saıası damýyn tejeıdi. 2019 jyldyń qorytyndysy boıynsha Qazaqstan reıtıńte 180 eldiń tiziminde 113-orynǵa ıe bolyp, 100-den 34-orynǵa ıe boldy, al 2020 jyly 180 eldiń ishinen 94-orynǵa ıe bolyp, 100-den 38-orynǵa ıe boldy[1], al bir jyl buryn Transparency International Qazaqstanǵa 124-orynǵa ıe boldy (ol birneshe basqa eldermen bólisti) sybaılas jemqorlyq deńgeıi boıynsha. Ol kezde Qazaqstannyń jalpy baly 100-den 31-ge teń boldy (30-dan tómen bal "keń taralǵan sybaılas jemqorlyqty"bildiredi)[2]. Burynǵy prezıdent Nazarbaev sybaılas jemqorlyqqa "qasıetti soǵys" jarıalady jáne memleket pen qoǵamnyń barlyq deńgeılerinde sybaılas jemqorlyqpen kúresý úshin "sybaılas jemqorlyqqa qarsy 10 shara"qabyldaýǵa buıryq berdi. 2014 jyldyń qorytyndysy boıynsha Qazaqstan Transparency International nusqasy boıynsha sybaılas jemqorlyqty qabyldaý deńgeıi boıynsha álemniń 175 eliniń ishinen 126-shy oryndy ıelendi[4][5],[4][6].'

        }],
    isNewsPageOpen: false,

};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        openNewsWindow(state) {
            state.isNewsPageOpen = true;
        },
        closeNewsWindow(state) {
            state.isNewsPageOpen = false;
        },
    },
});
export const { openNewsWindow, closeNewsWindow } = newsSlice.actions
export default newsSlice.reducer;
