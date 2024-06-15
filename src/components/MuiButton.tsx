import { useState } from 'react';
import { MouseEvent } from 'react';
import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
	const [formats, setFormats] = useState<string | null>(null);

	console.log({ formats });

	const handleFormatChange = (e: MouseEvent<HTMLElement>, updatedFormats: string) => {
		setFormats(updatedFormats);
	};

	return (
		<Stack spacing={4}>
			<Stack
				spacing={2}
				direction='row'
			>
				<Button
					variant='text'
					href='https://google.com'
				>
					Text
				</Button>
				<Button variant='contained'>Contained</Button>
				<Button variant='outlined'>Outlined</Button>
			</Stack>
			<Stack
				spacing={2}
				direction='row'
			>
				<Button
					variant='contained'
					color='primary'
				>
					Primary
				</Button>
				<Button
					variant='outlined'
					color='secondary'
				>
					Secondary
				</Button>
				<Button
					variant='contained'
					color='error'
				>
					Error
				</Button>
				<Button
					variant='contained'
					color='warning'
				>
					Warning
				</Button>
				<Button
					variant='contained'
					color='info'
				>
					Info
				</Button>
				<Button
					variant='contained'
					color='success'
				>
					Success
				</Button>
			</Stack>
			<Stack
				display='block'
				spacing={2}
				direction='row'
			>
				<Button
					variant='contained'
					size='small'
				>
					Small
				</Button>
				<Button
					variant='contained'
					size='medium'
				>
					Medium
				</Button>
				<Button
					variant='contained'
					size='large'
				>
					Large
				</Button>
			</Stack>
			<Stack
				spacing={2}
				direction='row'
			>
				<Button
					variant='contained'
					startIcon={<SendIcon />}
					disableRipple
					onClick={() => alert('Hello')}
				>
					Send
				</Button>
				<Button
					variant='contained'
					endIcon={<SendIcon />}
					disableElevation
				>
					Send
				</Button>
				<IconButton
					aria-label='button'
					color='success'
					size='small'
				>
					<SendIcon />
				</IconButton>
			</Stack>
			<Stack direction='row'>
				<ButtonGroup
					variant='text'
					orientation='vertical'
					size='small'
					color='secondary'
					arial-label='alignment button group'
				>
					<Button
						variant='contained'
						onClick={() => alert('Left clicked')}
					>
						Left
					</Button>
					<Button
						variant='contained'
						onClick={() => alert('Center clicked')}
					>
						Center
					</Button>
					<Button
						variant='contained'
						onClick={() => alert('Right clicked')}
					>
						Right
					</Button>
				</ButtonGroup>
			</Stack>
			<Stack direction='row'>
				<ToggleButtonGroup
					aria-label='text formatting'
					value={formats}
					onChange={handleFormatChange}
					color='success'
					size='small'
					orientation='vertical'
					exclusive
				>
					<ToggleButton
						value='bold'
						aria-label='bold'
					>
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton
						value='italic'
						aria-label='italic'
					>
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton
						value='underlined'
						aria-label='underlined'
					>
						<FormatUnderlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
