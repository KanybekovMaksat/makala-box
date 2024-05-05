import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const statusData = {
  draft: { value: 'draft', title: 'Черновик', color: '#f6a914' },
  pending: { value: 'pending', title: 'Проверка', color: '#3e9dd8' },
  rejected: { value: 'rejected', title: 'Отклонено', color: '#ea4f44' },
  approved: { value: 'approved', title: 'Публиковано', color: '#2a9d99' },
};

const names = Object.values(statusData);

function getStyles(color: string, theme: Theme) {
  return {
    backgroundColor: color,
    fontWeight: theme.typography.fontWeightMedium,
  };
}

interface StatusMenuProps {
  initialStatus: string;
}

export function StatusMenu({ initialStatus }: StatusMenuProps) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string>(initialStatus);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(value);
  };

  return (
    <div>
      <FormControl variant="standard" className="p-0 border-none outline-none">
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => (
            <Chip
              size="small"
              className="rounded text-[white]"
              label={statusData[selected].title}
              style={getStyles(statusData[selected].color, theme)}
            />
          )}
          className="p-none border-none outline-none "
          MenuProps={MenuProps}
        >
          {names.map(
            (status) =>
              status.value !== 'rejected' &&
              status.value !== 'approved' && (
                <MenuItem key={status.value} value={status.value}>
                  {status.title}
                </MenuItem>
              )
          )}
        </Select>
      </FormControl>
    </div>
  );
}
