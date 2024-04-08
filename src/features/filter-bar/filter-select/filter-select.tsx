import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const categories = [
  'Все',
  'Программирование',
  'Гуманитарий',
  'Дизайн',
  'Front-End',
  'Стартапам',
  'Искусственный интеллект',
  'Психология',
  'Все',
  'Программирование',
  'Гуманитарий',
  'Дизайн',
  'Front-End',
  'Стартапам',
  'Искусственный интеллект',
  'Психология',
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
      className="my-5 shadow-none border-2 border-sc-100 before:bg-pc-100"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        Организации
      </AccordionSummary>
      <AccordionDetails className="max-h-[300px] overflow-y-auto p-0">
        {categories.map((name) => (
          <MenuItem
            key={name}
            onClick={() => handleCategorySelect(name)}
            className={`flex justify-between p-3 border-b border-solid ${
              isCategorySelected(name)
                ? 'bg-[#2C9D62] text-pc-100'
                : 'bg-white text-[gray]'
            }`}
          >
            {name}
            {isCategorySelected(name) && <CheckIcon />}
          </MenuItem>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
