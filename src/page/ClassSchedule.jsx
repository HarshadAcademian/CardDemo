import React from 'react';
import { useParams} from 'react-router-dom';
import { Typography, Box, Divider} from '@ellucian/react-design-system/core';
import dummyData from '../data/dummyData.json';
import PropTypes from 'prop-types';
import { withStyles } from '@ellucian/react-design-system/core/styles';

const styles = () => ({
    root: {
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
    },
    heading: {
        marginBottom: '16px'
    },
    classBox: {
        marginBottom: '12px',
        padding: '12px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: '#f9f9f9'
    },
    backButton: {
        marginBottom: '20px'
    }
});

const ClassSchedule = (props) => {
    const { classes } = props;
    const { id } = useParams();

    const student = dummyData.find((s) => s.id === id);

    if (!student) {
        return (
            <Box className={classes.root}>
                <Typography variant="h3">No student data found.</Typography>
            </Box>
        );
    }

    return (
        <Box className={classes.root}>
            {/* <Button
    variant="outlined"
    className={classes.backButton}
    as={Link}
    to={`/student/${student.id}`} // match updated StudentDetails route
>
    Back to Student Details
</Button> */}


            <Typography variant="h2" className={classes.heading}>
                {student.firstName} {student.lastName} - Class Schedule
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />

            {student.classSchedule.length === 0 ? (
                <Typography>No classes found.</Typography>
            ) : (
                student.classSchedule.map((cls) => (
                    <Box key={cls.courseId} className={classes.classBox}>
                        <Typography variant="body1"><strong>Course ID:</strong> {cls.courseId}</Typography>
                        <Typography variant="body1"><strong>Course Name:</strong> {cls.courseName}</Typography>
                        <Typography variant="body1"><strong>Days:</strong> {cls.days}</Typography>
                        <Typography variant="body1"><strong>Time:</strong> {cls.time}</Typography>
                        <Typography variant="body1"><strong>Location:</strong> {cls.location}</Typography>
                    </Box>
                ))
            )}
        </Box>
    );
};

ClassSchedule.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClassSchedule);
