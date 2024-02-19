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
      size="300px"
        aria-label="Custom marks"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={50}
        valueLabelDisplay="off"
        marks={marks}
      />
  );
}