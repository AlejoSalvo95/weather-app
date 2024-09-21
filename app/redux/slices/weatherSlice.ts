import { createSlice } from '@reduxjs/toolkit';

interface WeatherState {
  city: string;
  data: any;
}

const initialState: WeatherState = {
  city: '',
  data: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setCity, setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
