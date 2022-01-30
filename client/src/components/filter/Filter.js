import React from 'react'
import './filter.scss'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Filter = () => {
  const [type, setType] = React.useState('');

  const handleType = (event) => {
    setType(event.target.value);
  };

  const [sort, setSort] = React.useState('');

  const handleSort = (event) => {
    setSort(event.target.value);
  };
  return (
  <div className='filter-container'>
    <Box sx={{ minWidth: 120 }} className='box'>
      <FormControl fullWidth id="form1">
        <InputLabel id="demo-simple-select-label">type</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        label="type"
        onChange={handleType}
        >
          <MenuItem value="pdf">pdf</MenuItem>
          <MenuItem value="paper">paper</MenuItem>
          <MenuItem value="summary">summary</MenuItem>
          <MenuItem value="audio">audio</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }} className='box'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">sort</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="sort"
        onChange={handleSort}
        >
          <MenuItem value="latest">latest</MenuItem>
          <MenuItem value="highest">highest</MenuItem>
          <MenuItem value="lowest">lowest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  </div>
  )
}

export default Filter
