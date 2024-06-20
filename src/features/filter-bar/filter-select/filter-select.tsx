import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  Tooltip,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { categoryQueries } from '~entities/category';

// export function FilterSelect({ selectedCategoryIds, setSelectedCategoryIds }) {
//   const {
//     data: categories,
//     isLoading,
//     isError,
//   } = categoryQueries.useGetCategoryQuery();

//   const [expanded, setExpanded] = useState<string | false>(false);

//   const handleChange = (panel: string) => (_, isExpanded: boolean) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   const handleCategorySelect = (id: number) => {
//     const newSelectedCategoryIds: number[] = selectedCategoryIds.includes(id)
//       ? selectedCategoryIds.filter((categoryId) => categoryId !== id)
//       : [...selectedCategoryIds, id];
//     setSelectedCategoryIds(newSelectedCategoryIds);
//   };

//   const isCategorySelected = (id: number) => {
//     return selectedCategoryIds.includes(id);
//   };

//   return (
//     <Accordion
//       expanded={expanded === 'panel2'}
//       onChange={handleChange('panel2')}
//       className="my-5 shadow-none border-2 border-sc-100 "
//     >
//       <AccordionSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel2bh-content"
//         id="panel2bh-header"
//         className="text-pc-400"
//       >
//         Категории
//       </AccordionSummary>
//       <AccordionDetails className="max-h-[300px] overflow-y-auto p-0 break-words">
//         {categories?.data?.map((category) => (
//           <div key={category.id}>
//             <MenuItem
//               onClick={() => handleCategorySelect(category.id)}
//               className={`overflow-hidden md:max-w-[300px] duration-300 flex justify-between p-4 border-b border-solid ${
//                 isCategorySelected(category.id)
//                   ? 'bg-second-100/80 text-pc-100'
//                   : 'bg-white text-pc-400'
//               }`}
//             >
//               <p className="truncate font-bold text-[black]">
//                 {' '}
//                 {category.name}
//               </p>
//               {isCategorySelected(category.id) ? (
//                 <TaskAltIcon />
//               ) : (
//                 <RadioButtonUncheckedIcon />
//               )}
//             </MenuItem>
//             {category.children && category.children.length > 0 && (
//               <div className="">
//                 {category.children.map((child) => (
//                   <MenuItem
//                     key={child.id}
//                     onClick={() => handleCategorySelect(child.id)}
//                     className={`overflow-hidden md:max-w-[300px] duration-300 flex justify-between p-4 border-b border-solid  ${
//                       isCategorySelected(child.id)
//                         ? 'bg-second-100/80 text-pc-100'
//                         : 'bg-white text-pc-400'
//                     }`}
//                   >
//                     {child.name.length >= 23 ? (
//                       <Tooltip title={child.name}>
//                         <p className="truncate"> {child.name}</p>
//                       </Tooltip>
//                     ) : (
//                       <p className="truncate"> {child.name}</p>
//                     )}

//                     {isCategorySelected(child.id) ? (
//                       <TaskAltIcon />
//                     ) : (
//                       <RadioButtonUncheckedIcon />
//                     )}
//                   </MenuItem>
//                 ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </AccordionDetails>
//     </Accordion>
//   );
// }
export function FilterSelect({ selectedCategoryIds, setSelectedCategoryIds }) {
  const {
    data: categories,
    isLoading,
    isError,
  } = categoryQueries.useGetCategoryQuery();

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const isCategorySelected = (id: number) => {
    return selectedCategoryIds.includes(id);
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
        className="text-pc-400"
      >
        Категории
      </AccordionSummary>
      <AccordionDetails className="max-h-[300px] overflow-y-auto p-0 break-words">
        {categories?.data?.map((category) => (
          <div key={category.id}>
            <MenuItem
              onClick={() => setSelectedCategoryIds(category.id)}
              className={`overflow-hidden md:max-w-[300px] duration-300 flex justify-between p-4 border-b border-solid ${
                isCategorySelected(category.id)
                  ? 'bg-second-100/80 text-pc-100'
                  : 'bg-white text-pc-400'
              }`}
            >
              <p className="truncate font-bold text-[black]">
                {category.name}
              </p>
              {isCategorySelected(category.id) ? (
                <TaskAltIcon />
              ) : (
                <RadioButtonUncheckedIcon />
              )}
            </MenuItem>
            {category.children && category.children.length > 0 && (
              <div className="">
                {category.children.map((child) => (
                  <MenuItem
                    key={child.id}
                    onClick={() => setSelectedCategoryIds(child.id)}
                    className={`overflow-hidden md:max-w-[300px] duration-300 flex justify-between p-4 border-b border-solid  ${
                      isCategorySelected(child.id)
                        ? 'bg-second-100/80 text-pc-100'
                        : 'bg-white text-pc-400'
                    }`}
                  >
                    {child.name.length >= 23 ? (
                      <Tooltip title={child.name}>
                        <p className="truncate"> {child.name}</p>
                      </Tooltip>
                    ) : (
                      <p className="truncate"> {child.name}</p>
                    )}
                    {isCategorySelected(child.id) ? (
                      <TaskAltIcon />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                  </MenuItem>
                ))}
              </div>
            )}
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}
