import * as React from 'react';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: 'Easy',
  },
  {
    value: 50,
    label: 'Medium',
  },
  {
    value: 100,
    label: 'Hard',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderMarks() {
  return (
      <Slider
      sx={{
        '& .MuiSlider-thumb': {
            color: "yellow"
        },
        '& .MuiSlider-track': {
            color: "yellow"
        },
        '& .MuiSlider-rail': {
            color: "red"
        },
        '& .MuiSlider-mark': {
            color: "green"
        },
        '& .MuiSlider-active': {
            color: "green"
        }
    }}
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={50}
        valueLabelDisplay="off"
        marks={marks}
      />
  );
}