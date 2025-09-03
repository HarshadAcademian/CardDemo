import React from 'react';
import { Typography, Box, Divider } from '@ellucian/react-design-system/core';
import { useParams } from 'react-router-dom';
import dummyData from '../data/dummyData.json'; // import your dummy data

const StudentDetails = (props) => {
    const {classes} = props;
    const { id } = useParams(); // get id from URL
    const student = dummyData.find((s) => s.id === id);

    if (!student) {
        return (
            <Box style={{ padding: '20px' }}>
                <Typography variant="h3">No student data found.</Typography>
            </Box>
        );
    }

    return (
        <Box
            style={{
                maxWidth: '500px',
                margin: '20px auto',
                padding: '20px',
                border: '1px solid #ddd',
                borderRadius: '12px',
                background: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
            }}
        >
            <Typography variant="h2" style={{ marginBottom: '12px' }}>
                {student.firstName} {student.lastName}
            </Typography>
            <Divider style={{ marginBottom: '16px' }} />

            <Typography variant="body1"><strong>ID:</strong> {student.id}</Typography>
            <Typography variant="body1"><strong>Email:</strong> {student.email}</Typography>
            <Typography variant="body1"><strong>Program:</strong> {student.program}</Typography>
            <Typography variant="body1"><strong>Year:</strong> {student.year}</Typography>
        </Box>
    );
}


StudentDetails.propTypes = {
  classes: PropTypes.object.isRequired
};
 
export default withStyles(styles)(StudentDetails);
 