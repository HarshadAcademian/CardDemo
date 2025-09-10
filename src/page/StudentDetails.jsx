import React from 'react';
import { Typography, Box, Divider, Button } from '@ellucian/react-design-system/core';
import { useParams, useHistory } from 'react-router-dom';
import dummyData from '../data/dummyData.json'; 
import PropTypes from 'prop-types';
import { withStyles } from "@ellucian/react-design-system/core/styles";

const styles = () => ({
    root: {
        color: "black",
        maxWidth: '600px',
        margin: '30px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    },
    sectionHeading: {
        borderBottom: "2px solid #000",
        paddingBottom: "4px",
        display: "inline-block",
        marginBottom: "12px"
    },
    infoRow: {
        marginBottom: '10px'
    },
    button: {
        marginTop: '16px'
    }
});

const StudentDetails = (props) => {
    const { classes } = props;
    const { id } = useParams(); // get id from URL
    const history = useHistory();

    const student = dummyData.find((s) => s.id === id);

    if (!student) {
        return (
            <Box style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h3">No student data found.</Typography>
            </Box>
        );
    }

    const goToSchedule = () => {
    history.push(`/student/${student.id}/schedule`);
};


    return (
        <Box className={classes.root}>
            <Typography variant="h2" style={{ marginBottom: '12px' }}>
                {student.firstName} {student.lastName}
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />

            <Box className={classes.infoRow}><Typography variant="body1"><strong>ID:</strong> {student.id}</Typography></Box>
            <Box className={classes.infoRow}><Typography variant="body1"><strong>Email:</strong> {student.email}</Typography></Box>
            <Box className={classes.infoRow}><Typography variant="body1"><strong>Date of Birth:</strong> {student.dob}</Typography></Box>
            <Box className={classes.infoRow}><Typography variant="body1"><strong>Major:</strong> {student.major}</Typography></Box>
            <Box className={classes.infoRow}><Typography variant="body1"><strong>Class Level:</strong> {student.classLevel}</Typography></Box>
            <Box className={classes.infoRow}><Typography variant="body1"><strong>GPA:</strong> {student.gpa}</Typography></Box>
            <Box className={classes.infoRow}><Typography variant="body1"><strong>Phone:</strong> {student.phone}</Typography></Box>
            <Box className={classes.infoRow}><Typography variant="body1"><strong>Address:</strong> {student.address}</Typography></Box>

            <Button className={classes.button} variant="contained" onClick={goToSchedule}>
                See Class Schedule
            </Button>
        </Box>
    );
}

StudentDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StudentDetails);
