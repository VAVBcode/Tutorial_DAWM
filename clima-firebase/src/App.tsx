import { useState } from 'react';

import { Grid, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { type SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import useFetchData from './hooks/useFetchData';
import './App.css'

function App() {

  const [cityInput, setCityInput] = useState('');
  const { clima } = useFetchData(cityInput);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCityInput(event.target.value);
  };

  return (
    <Grid container spacing={5} sx={{ justifyContent: 'center', alignItems: 'center' }}>
      {/* Selector */}
      <Grid size={{ xs: 12, md: 3 }}>
        <FormControl fullWidth>
          <InputLabel id="city-select-label">Ciudad</InputLabel>
          <Select
            labelId="city-select-label"
            id="city-simple-select"
            label="Ciudad"
            value={cityInput}
            onChange={handleChange}>
            <MenuItem disabled><em>Seleccione una ciudad</em></MenuItem>
            <MenuItem value={'guayaquil'}>Guayaquil</MenuItem>
            <MenuItem value={'quito'}>Quito</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 12 }}>
        {clima &&
          <>
            <Typography variant="h5" component="div">
              Temperatura: {clima.temperatura}
            </Typography>
            <Typography variant="h5" component="div">
              Humedad: {clima.humedad}
            </Typography>
          </>}
      </Grid>
    </Grid>
  )
}

export default App