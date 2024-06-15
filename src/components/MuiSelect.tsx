import { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

const MuiSelect = () => {
	const [countries, setCountries] = useState<string[]>([]);

	return (
		<Box width='250px'>
			<TextField
				label='Select country'
				color='secondary'
				select
				value={countries}
				onChange={(e) => {
					const value = e.target.value;
					setCountries(typeof value === 'string' ? value.split(',') : value);
				}}
				fullWidth
				SelectProps={{
					multiple: true,
				}}
				helperText='Please select your country'
				error
			>
				<MenuItem value='IN'>India</MenuItem>
				<MenuItem value='US'>United States</MenuItem>
				<MenuItem value='PL'>Poland</MenuItem>
			</TextField>
		</Box>
	);
};

export default MuiSelect;
