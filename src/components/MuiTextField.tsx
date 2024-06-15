import { useState } from 'react';
import { InputAdornment, Stack, TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
	const [value, setValue] = useState('');

	return (
		<Stack spacing={2}>
			<Stack
				direction='row'
				spacing={2}
			>
				<TextField
					label='name'
					variant='outlined'
				/>
				<TextField
					label='name'
					variant='filled'
				/>
				<TextField
					label='name'
					variant='standard'
				/>
			</Stack>
			<Stack
				direction='row'
				spacing={2}
			>
				<TextField
					label='Small secondary'
					size='small'
					color='secondary'
				/>
			</Stack>
			<Stack
				direction='row'
				spacing={2}
			>
				<TextField
					label='Form input'
					required
					value={value}
					onChange={(e) => setValue(e.target.value)}
					error={!value}
					helperText={!value ? 'Required' : 'Do not share your password with anyone'}
					size='small'
					color='secondary'
				/>
				<TextField
					label='Password'
					type='password'
					size='small'
					color='error'
					disabled
				/>
				<TextField
					label='Read only'
					size='small'
					inputProps={{ readOnly: true }}
				/>
			</Stack>
			<Stack
				direction='row'
				spacing={2}
			>
				<TextField
					label='Amount'
					InputProps={{
						startAdornment: <InputAdornment position='start'>$</InputAdornment>,
					}}
				/>
				<TextField
					label='Weight'
					InputProps={{
						endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
					}}
				/>
				<TextField
					label='Visibility'
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<VisibilityIcon />
							</InputAdornment>
						),
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default MuiTextField;
