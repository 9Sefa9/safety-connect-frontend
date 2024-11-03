import React, { useState } from 'react';
import {
    Box, Typography, Button, TextField, Checkbox, Radio, RadioGroup, FormControlLabel,
    FormGroup, Slider, Switch, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, IconButton, Tabs, Tab, AppBar, CircularProgress,
    Card, CardContent, CardActions, Grid, MenuItem, Select, Dialog, DialogActions,
    DialogContent, DialogContentText, DialogTitle, Divider, Badge, Avatar,
    Snackbar, Alert, Tooltip, Chip, Pagination, Drawer, Collapse, Step, StepLabel,
    Stepper
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import mockData from '../../mock/mock-data.json';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTime } from 'luxon';

interface MockData {
    title: string;
    description: string;
}

const Home: React.FC = () => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [tabValue, setTabValue] = useState<number>(0);
    const [sliderValue, setSliderValue] = useState<number>(30);
    const [selectedDate, setSelectedDate] = useState<DateTime | null>(DateTime.now());
    const [selectedTime, setSelectedTime] = useState<DateTime | null>(DateTime.now());
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [collapseOpen, setCollapseOpen] = useState<boolean>(false);
    const [activeStep, setActiveStep] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const steps = ['Step 1', 'Step 2', 'Step 3'];

    const handleDialogOpen = () => setOpenDialog(true);
    const handleDialogClose = () => setOpenDialog(false);
    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => setTabValue(newValue);
    const handleSliderChange = (event: Event, newValue: number | number[]) => setSliderValue(newValue as number);
    const handleSnackbarClose = () => setOpenSnackbar(false);
    const toggleDrawer = () => setDrawerOpen(!drawerOpen);
    const handleCollapseToggle = () => setCollapseOpen(!collapseOpen);
    const handleNextStep = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    // Handle pagination change
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Box className="PageContainer">
            {/* Typographies */}
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="body1">This is body text</Typography>
            <Divider />

            {/* Buttons */}
            <Tooltip title="Show Snackbar">
                <Button variant="contained" onClick={() => setOpenSnackbar(true)}>Show Snackbar</Button>
            </Tooltip>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>
            <Tooltip title="Outlined Button">
                <Button variant="outlined">Outlined Button</Button>
            </Tooltip>
            <Tooltip title="Text Button">
                <Button variant="text">Text Button</Button>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <Divider />

            {/* Form Elements */}
            <TextField label="Text Field" variant="outlined" />
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Checkbox" />
                <FormControlLabel control={<Switch />} label="Switch" />
            </FormGroup>
            <RadioGroup defaultValue="option1">
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
            </RadioGroup>
            <Divider />

            {/* Date and Time Pickers */}
            <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="de">
                <DatePicker
                    label="Date Picker"
                    value={selectedDate}
                    onChange={(newValue) => setSelectedDate(newValue)}
                    slots={{
                        textField: textFieldProps => <TextField {...textFieldProps} />
                    }}
                />
                <TimePicker
                    label="Time Picker"
                    value={selectedTime}
                    onChange={(newValue) => setSelectedTime(newValue)}
                    slots={{
                        textField: textFieldProps => <TextField {...textFieldProps} />
                    }}
                />
            </LocalizationProvider>
            <Divider />

            {/* Select and Slider */}
            <Select value={sliderValue} onChange={(e) => setSliderValue(Number(e.target.value))}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Slider value={sliderValue} onChange={handleSliderChange} aria-labelledby="continuous-slider" />
            <Divider />

            {/* Table */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockData.map((item: MockData) => (
                            <TableRow key={item.title}>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider />

            {/* Pagination */}
            <Pagination count={10} page={page} onChange={handlePageChange} />
            <Divider />

            {/* Tabs */}
            <AppBar position="static">
                <Tabs value={tabValue} onChange={handleTabChange}>
                    <Tab label="Tab 1" />
                    <Tab label="Tab 2" />
                    <Tab label="Tab 3" />
                </Tabs>
            </AppBar>
            {tabValue === 0 && <Typography>Tab 1 Content</Typography>}
            {tabValue === 1 && <Typography>Tab 2 Content</Typography>}
            {tabValue === 2 && <Typography>Tab 3 Content</Typography>}
            <Divider />

            {/* Card */}
            <Card>
                <CardContent>
                    <Typography variant="h5">Card Title</Typography>
                    <Typography variant="body2">Card Content</Typography>
                    <Chip label="Sample Chip" onDelete={() => {}} />
                </CardContent>
                <CardActions>
                    <Button size="small">Action</Button>
                </CardActions>
            </Card>
            <Divider />

            {/* Dialog */}
            <Button variant="contained" onClick={handleDialogOpen}>
                Open Dialog
            </Button>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This is a sample dialog.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Close</Button>
                </DialogActions>
            </Dialog>
            <Divider />

            {/* Progress */}
            <CircularProgress />
            <Divider />

            {/* Grid */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Paper>Grid Item 1</Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper>Grid Item 2</Paper>
                </Grid>
            </Grid>
            <Divider />

            {/* Badges and Avatars */}
            <Badge badgeContent={4} color="primary">
                <Avatar alt="User" />
            </Badge>
            <Divider />

            {/* Drawer */}
            <Button variant="outlined" onClick={toggleDrawer}>Toggle Drawer</Button>
            <Drawer open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250 }}>
                    <Typography variant="h6">Drawer Content</Typography>
                    <Button onClick={toggleDrawer}>Close Drawer</Button>
                </Box>
            </Drawer>
            <Divider />

            {/* Collapse */}
            <Button variant="outlined" onClick={handleCollapseToggle}>
                {collapseOpen ? 'Collapse' : 'Expand'}
            </Button>
            <Collapse in={collapseOpen}>
                <Box sx={{ p: 2, bgcolor: 'lightgray' }}>
                    This is collapsible content.
                </Box>
            </Collapse>
            <Divider />

            {/* Stepper */}
            <Stepper activeStep={activeStep}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Button onClick={handleNextStep}>Next Step</Button>
        </Box>
    );
};

export default Home;
