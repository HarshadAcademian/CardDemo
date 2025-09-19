import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Typography, Box, Divider, Button } from '@ellucian/react-design-system/core';
import { ChevronLeft } from '@ellucian/ds-icons/lib';
import dummyData from '../data/dummyData.json';
import PropTypes from 'prop-types';
import { withStyles } from '@ellucian/react-design-system/core/styles';

const styles = () => ({
    root: {
        maxWidth: '95%',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
        overflowX: 'auto'
    },
    headerRow: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px'
    },
    backButton: {
        marginRight: '12px',
        padding: '4px 12px',
        minWidth: 'auto'
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '16px'
    },
    th: {
        border: '1px solid #ccc',
        padding: '8px',
        background: '#f5f5f5',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    td: {
        border: '1px solid #ccc',
        padding: '8px',
        textAlign: 'center',
        whiteSpace: 'nowrap'
    }
});

const ClassSchedule = (props) => {
    const { classes } = props;
    const { id } = useParams();
    const history = useHistory();

    const student = dummyData.find((s) => s.id === id || s.studentId === id);

    if (!student) {
        return (
            <Box className={classes.root}>
                <Typography variant="h3">No student data found.</Typography>
            </Box>
        );
    }

    const goBack = () => {
        history.goBack();
    };

    return (
        <Box className={classes.root}>
            {/* Back button with heading */}
            <Box className={classes.headerRow}>
                <Button
                    className={classes.backButton}
                    color="primary"
                    size="default"
                    variant="contained"
                    onClick={goBack}
                    startIcon={<ChevronLeft />}
                >
                    Back
                </Button>
                <Typography variant="h2">
                    {student.firstName} {student.lastName} - Class Schedule
                </Typography>
            </Box>
            <Divider />

            {student.classSchedule.length === 0 ? (
                <Typography>No classes found.</Typography>
            ) : (
                <Box style={{ overflowX: 'auto' }}>
                    <table className={classes.table}>
                        <thead>
                            <tr>
                                <th className={classes.th}>POT</th>
                                <th className={classes.th}>CRN</th>
                                <th className={classes.th}>Subject</th>
                                <th className={classes.th}>Course</th>
                                <th className={classes.th}>Title</th>
                                <th className={classes.th}>Credits</th>
                                <th className={classes.th}>Primary Instructor</th>
                                <th className={classes.th}>Days</th>
                                <th className={classes.th}>Time</th>
                                <th className={classes.th}>Building</th>
                                <th className={classes.th}>Room</th>
                            </tr>
                        </thead>
                        <tbody>
                            {student.classSchedule.map((cls, index) => (
                                <tr key={index}>
                                    <td className={classes.td}>{cls.POT || '-'}</td>
                                    <td className={classes.td}>{cls.CRN || '-'}</td>
                                    <td className={classes.td}>{cls.subject || (cls.courseId ? cls.courseId.slice(0, 2) : '-')}</td>
                                    <td className={classes.td}>{cls.course || cls.courseId || '-'}</td>
                                    <td className={classes.td}>{cls.title || cls.courseName || '-'}</td>
                                    <td className={classes.td}>{cls.credits || '-'}</td>
                                    <td className={classes.td}>{cls.primaryInstructor || cls.instructor || '-'}</td>
                                    <td className={classes.td}>{cls.days || '-'}</td>
                                    <td className={classes.td}>{cls.time || '-'}</td>
                                    <td className={classes.td}>
                                        {cls.building || (cls.location ? cls.location.split(',')[0] : '-')}
                                    </td>
                                    <td className={classes.td}>
                                        {cls.room || (cls.location ? cls.location.split(',')[1]?.trim() : '-')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Box>
            )}
        </Box>
    );
};

ClassSchedule.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ClassSchedule);
