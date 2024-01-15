import { createTheme, ThemeProvider } from '@mui/material/styles';

export const auroraTheme = createTheme({
  palette: {
    mode: 'aurora',
    sidebar: {
        main: 'linear-gradient(to bottom, #182830, #285868, #308890, #70b8c8)', 
    },
    background: {
        main: '#0E1518',
        card: '#182830',
        button: '#308890',
        buttonHover: '#70b8c8',

        //aurora boreau
        temaAurora1: '#0E1518',
        temaAurora2: '#182830',
        temaAurora3: '#285868',
        temaAurora4: '#308890',
        temaAurora5: '#70b8c8',
        //deep ocean
        temaDO1: '#0d1321',
        temaDO2: '#1d2d44',
        temaDO3: '#3e5c76',
        temaDO4: '#748cab',
        temaDO5: '#f0ebd8',
        //urban
        temaurban1: '#8a9c9b',
        temaurban2: '#1e2b32',
        temaurban3: '#a06a25',
        temaurban4: '#e48f0f',
        temaurban5: '#030609',
        //night
        temanight1: '#0b1333',
        temanight2: '#191622',
        temanight3: '#3a317d',
        temanight4: '#5344a0',
        temanight5: '#a364b8',
    },
    border: {
        main: '#70b8c8'
    },
    txt: {
        main: '#fff',
        select: '#70b8c8',
    }
  },
});

export const deepTheme = createTheme({
  palette: {
    mode: 'deep ocean',
    sidebar: {
        main: 'linear-gradient(to top, #0d1321, #1d2d44, #3e5c76)', 
    },
    background: {
        main: '#3e5c76',
        card: '#1d2d44',
        button: '#748cab',
        buttonHover: '#0d1321',

        //deep ocean
        temaDO1: '#0d1321',
        temaDO2: '#1d2d44',
        temaDO3: '#3e5c76',
        temaDO4: '#748cab',
        temaDO5: '#f0ebd8',

        //aurora boreau
        temaAurora1: '#0E1518',
        temaAurora2: '#182830',
        temaAurora3: '#285868',
        temaAurora4: '#308890',
        temaAurora5: '#70b8c8',
        //urban
        temaurban1: '#8a9c9b',
        temaurban2: '#1e2b32',
        temaurban3: '#a06a25',
        temaurban4: '#e48f0f',
        temaurban5: '#030609',
        //night
        temanight1: '#0b1333',
        temanight2: '#191622',
        temanight3: '#3a317d',
        temanight4: '#5344a0',
        temanight5: '#a364b8',
    },
    border: {
        main: '#f0ebd8'
    },
    txt: {
        main: '#f0ebd8',
        select: '#748cab',
    }
  },
});

export const urbanTheme = createTheme({
  palette: {
    mode: 'aurora',
    sidebar: {
        main: 'linear-gradient(to top, #8a9c9b, #1e2b32, #030609)', 
    },
    background: {
        main: '#030609',
        card: '#182830',
        button: '#a06a25',
        buttonHover: '#e48f0f',
        
        //urban
        temaurban1: '#8a9c9b',
        temaurban2: '#1e2b32',
        temaurban3: '#a06a25',
        temaurban4: '#e48f0f',
        temaurban5: '#030609',


        //aurora boreau
        temaAurora1: '#0E1518',
        temaAurora2: '#182830',
        temaAurora3: '#285868',
        temaAurora4: '#308890',
        temaAurora5: '#70b8c8',
        //deep ocean
        temaDO1: '#0d1321',
        temaDO2: '#1d2d44',
        temaDO3: '#3e5c76',
        temaDO4: '#748cab',
        temaDO5: '#f0ebd8',
        //night
        temanight1: '#0b1333',
        temanight2: '#191622',
        temanight3: '#3a317d',
        temanight4: '#5344a0',
        temanight5: '#a364b8',
    },
    border: {
        main: '#e48f0f'
    },
    txt: {
        main: '#fff',
        select: '#e48f0f',
    }
  },
});

export const nightTheme = createTheme({
  palette: {
    mode: 'aurora',
    sidebar: {
        main: 'linear-gradient(to bottom, #0b1333, #191622, #191622, #5344a0)', 
    },
    background: {
        main: '#191622',
        card: '#0b1333',
        button: '#3a317d',
        buttonHover: '#5344a0',

        //night
        temanight1: '#0b1333',
        temanight2: '#191622',
        temanight3: '#3a317d',
        temanight4: '#5344a0',
        temanight5: '#a364b8',

        //aurora boreau
        temaAurora1: '#0E1518',
        temaAurora2: '#182830',
        temaAurora3: '#285868',
        temaAurora4: '#308890',
        temaAurora5: '#70b8c8',
        //deep ocean
        temaDO1: '#0d1321',
        temaDO2: '#1d2d44',
        temaDO3: '#3e5c76',
        temaDO4: '#748cab',
        temaDO5: '#f0ebd8',
        //urban
        temaurban1: '#8a9c9b',
        temaurban2: '#1e2b32',
        temaurban3: '#a06a25',
        temaurban4: '#e48f0f',
        temaurban5: '#030609',
    },
    border: {
        main: '#70b8c8'
    },
    txt: {
        main: '#fff',
        select: '#a364b8',
    }
  },
});

export { ThemeProvider };