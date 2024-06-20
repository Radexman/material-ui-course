import { Box, FormControlLabel, Switch } from '@mui/material';
import { ChangeEvent, useState } from 'react';

const MuiSwitch = () => {
	const [checked, setChecked] = useState(false);

	console.log({ checked });

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	return (
		<Box>
			<FormControlLabel
				label='Dark mode'
				control={
					<Switch
						size='small'
						checked={checked}
						onChange={handleChange}
					/>
				}
			/>
		</Box>
	);
};

export default MuiSwitch;
