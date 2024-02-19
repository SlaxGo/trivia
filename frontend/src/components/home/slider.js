import { useEffect } from 'react';
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
    value: 99,
    label: 'Hard',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderMarks({level, setLevel}) {

  useEffect(() => {
    switch(level) {
      case 0: setLevel("easy"); break;
      case 50: setLevel("medium"); break;
      case 100: setLevel("hard"); break;
  }
  },[level])

  return (
      <Slider
      sx={{
        '& .MuiSlider-thumb': {
            color: "#E8BA64",
        },
        '& .MuiSlider-track': {
            color: "#E8BA64",
            height: "10px",
        },
        '& .MuiSlider-rail': {
            color: "#5C3FCF",
            height: "10px"
        },
        '& .MuiSlider-mark': {
            color: "#5C3FCF",
            height: "10px",
            width: "10px",
            borderRadius: "50%"
        },
        '& .MuiSlider-markLabel': {
          color: "#ffffff",
          fontWeight: "bold"
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
        onChange={(e) => {setLevel(e.target.value)}}
      />
  );
}