import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Typography, Box, Divider, Button, Grid } from '@ellucian/react-design-system/core';
import { ChevronLeft } from '@ellucian/ds-icons/lib';
import PropTypes from 'prop-types';
import { withStyles } from '@ellucian/react-design-system/core/styles';
import dummyData from '../data/dummyData.json';

const styles = () => ({
    root: {
        maxWidth: '95%',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
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
    section: {
        marginTop: '20px',
        marginBottom: '10px'
    },
    label: {
        fontWeight: 'bold',
        marginRight: '6px'
    },
    value: {
        color: '#444'
    },
    infoRow: {
        marginBottom: '8px'
    },
    scheduleButton: {
        marginTop: '20px'
    }
});

const StudentDetails = (props) => {
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

    const goToSchedule = () => {
        history.push(`/student/${student.id}/schedule`);
    };

    return (
        <Box className={classes.root}>
            {/* Header */}
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
                    {student.firstName} {student.lastName}
                </Typography>
            </Box>
            <Typography variant="body1" style={{ marginBottom: '10px' }}>
                {student.studentId}
            </Typography>
            <Divider />

            {/* Contact Information */}
            <Box className={classes.section}>
                <Typography variant="h3">Contact Information</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Preferred Email:</span>
                            <span className={classes.value}>{student.contactInformation?.preferredEmail || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Primary Phone:</span>
                            <span className={classes.value}>{student.contactInformation?.primaryPhone || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Campus Email:</span>
                            <span className={classes.value}>{student.contactInformation?.campusEmail || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Cellular Phone:</span>
                            <span className={classes.value}>{student.contactInformation?.cellularPhone || '-'}</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Campus Mail:</span>
                            <span className={classes.value}>{student.contactInformation?.campusMail || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Emergency Contact:</span>
                            <span className={classes.value}>{student.contactInformation?.emergencyContactName || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Relationship:</span>
                            <span className={classes.value}>{student.contactInformation?.emergencyContactRelationship || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Phone:</span>
                            <span className={classes.value}>{student.contactInformation?.emergencyContactPhoneNumber || '-'}</span>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Divider />

            {/* Housing Information */}
            <Box className={classes.section}>
                <Typography variant="h3">Housing Information</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Residence Term:</span>
                            <span className={classes.value}>{student.housingInformation?.residenceTerm || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Building:</span>
                            <span className={classes.value}>{student.housingInformation?.building || '-'}</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Room No:</span>
                            <span className={classes.value}>{student.housingInformation?.roomNo || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Phone:</span>
                            <span className={classes.value}>{student.housingInformation?.phone || '-'}</span>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Divider />

            {/* Grade Information */}
            <Box className={classes.section}>
                <Typography variant="h3">Grade Information</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Lifestyle:</span>
                            <span className={classes.value}>{student.gradeInformation?.lifestyle || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Grad Date:</span>
                            <span className={classes.value}>{student.gradeInformation?.gradDate || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Major:</span>
                            <span className={classes.value}>{student.gradeInformation?.major || '-'}</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Arrival Date:</span>
                            <span className={classes.value}>{student.gradeInformation?.arrivalDate || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>ENRL:</span>
                            <span className={classes.value}>{student.gradeInformation?.enrl || '-'}</span>
                        </div>
                        <div className={classes.infoRow}>
                            <span className={classes.label}>Academic Advisor:</span>
                            <span className={classes.value}>{student.gradeInformation?.academicAdvisor || '-'}</span>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <Divider />

            {/* See Class Schedule Button */}
            <Box className={classes.section} style={{ textAlign: 'center' }}>
                <Button
                    className={classes.scheduleButton}
                    variant="contained"
                    color="primary"
                    onClick={goToSchedule}
                >
                    See Class Schedule
                </Button>
            </Box>
        </Box>
    );
};

StudentDetails.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StudentDetails);
