import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
const categories = [
  'Все',
  'Comtehno College',
  'International University of Innovation Technology',
  'Kite',
  'Usta Soft',
];

export function FilterSelect() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleCategorySelect = (name: string) => {
    const newSelectedCategories: string[] = selectedCategories.includes(name)
      ? selectedCategories.filter((category) => category !== name)
      : [...selectedCategories, name];
    setSelectedCategories(newSelectedCategories);
  };

  const isCategorySelected = (name: string) => {
    return selectedCategories.includes(name);
  };

  return (
    <Accordion
      expanded={expanded === 'panel2'}
      onChange={handleChange('panel2')}
      className="my-5 shadow-none border-2 border-sc-100 "
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
        className='text-pc-400'
      >
        Организации
      </AccordionSummary>
      <AccordionDetails className="max-h-[300px] overflow-y-auto p-0 break-words">
        {categories.map((name) => (
          <MenuItem
            key={name}
            onClick={() => handleCategorySelect(name)}
            className={`overflow-hidden max-w-[300px] duration-300 flex justify-between p-4 border-b border-solid  ${
              isCategorySelected(name)
                ? 'bg-[#2C9D62] text-pc-100'
                : 'bg-white text-pc-400'
            }`}
          >
            <p className="truncate"> {name}</p>
            {isCategorySelected(name) ? (
              <TaskAltIcon />
            ) : (
              <RadioButtonUncheckedIcon />
            )}
          </MenuItem>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
