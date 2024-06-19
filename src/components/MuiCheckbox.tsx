import { ChangeEvent, useState } from 'react';
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material';
import { BookmarkBorder } from '@mui/icons-material';
import { Bookmark } from '@mui/icons-material';

const MuiCheckbox = () => {
	const [value, setValue] = useState(false);
	const [skills, setSkills] = useState<string[]>([]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.checked);
	};

	const handleSkillChange = (e: ChangeEvent<HTMLInputElement>) => {
		const index = skills.indexOf(e.target.value);
		if (index === -1) {
			setSkills([...skills, e.target.value]);
		} else {
			setSkills(skills.filter((skill) => skill !== e.target.value));
		}
	};

	console.log({ skills });

	return (
		<Box>
			<Box>
				<FormControlLabel
					label='I accept terms and conditions'
					control={
						<Checkbox
							checked={value}
							onChange={handleChange}
						/>
					}
				/>
			</Box>
			<Box>
				<Checkbox
					icon={<BookmarkBorder />}
					checkedIcon={<Bookmark />}
					checked={value}
					onChange={handleChange}
				/>
			</Box>
			<Box>
				<FormControl>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel
							label='HTML'
							control={
								<Checkbox
									size='small'
									color='secondary'
									value='HTML'
									checked={skills.includes('html')}
									onChange={handleSkillChange}
								/>
							}
						/>
						<FormControlLabel
							label='CSS'
							control={
								<Checkbox
									value='CSS'
									checked={skills.includes('css')}
									onChange={handleSkillChange}
								/>
							}
						/>
						<FormControlLabel
							label='JS'
							control={
								<Checkbox
									value='JS'
									checked={skills.includes('js')}
									onChange={handleSkillChange}
								/>
							}
						/>
					</FormGroup>
				</FormControl>
			</Box>
		</Box>
	);
};

export default MuiCheckbox;
