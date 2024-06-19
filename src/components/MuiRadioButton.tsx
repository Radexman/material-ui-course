import { ChangeEvent, useState } from 'react';
import { Box, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, FormHelperText } from '@mui/material';

const MuiRadioButton = () => {
	const [value, setValue] = useState('');
	console.log({ value });

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<Box>
			<FormControl error>
				<FormLabel id='job-experience-group-label'>Years of experience</FormLabel>
				<RadioGroup
					name='job-experience-group'
					aria-labelledby='job-experience-group-label'
					value={value}
					onChange={handleChange}
					row
				>
					<FormControlLabel
						control={
							<Radio
								size='medium'
								color='secondary'
							/>
						}
						label='0-2'
						value='0-2'
					/>
					<FormControlLabel
						control={
							<Radio
								size='medium'
								color='secondary'
							/>
						}
						label='3-5'
						value='3-5'
					/>
					<FormControlLabel
						control={
							<Radio
								size='medium'
								color='secondary'
							/>
						}
						label='6-10'
						value='6-10'
					/>
				</RadioGroup>
				<FormHelperText>Invalid selection</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default MuiRadioButton;
