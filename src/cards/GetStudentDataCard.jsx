import React, { useState } from 'react';
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    TextField,
    Typography,
    Box
} from '@ellucian/react-design-system/core';
import PropTypes from "prop-types";
import { withStyles } from "@ellucian/react-design-system/core/styles";
import { useCardControl } from '@ellucian/experience-extension-utils';
import dummyData from '../data/dummyData.json';
import { spacing40 } from "@ellucian/react-design-system/core/styles/tokens";


const styles = () => ({
  card: {
    marginRight: spacing40,
    marginLeft: spacing40,
  },
});

 function GetStudentDataCard() {
    const [searchType, setSearchType] = useState('id');
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const { navigateToPage } = useCardControl();

    const handleSearch = (value) => {
        setQuery(value);

        if (!value.trim()) {
            setResults([]);
            return;
        }

        let found = [];
        if (searchType === 'id') {
            found = dummyData.filter(student => student.id.startsWith(value.trim()));
        } else if (searchType === 'lastname') {
            found = dummyData.filter(student =>
                student.lastName.toLowerCase().startsWith(value.trim().toLowerCase())
            );
        }

        setResults(found);
    };

    const handleClick = (student) => {
        console.log("clicked");
        navigateToPage({
            route: `/${student.id}`,
            state: { student }
        });
    };

    return (
        <Box
            style={{
                maxWidth: '420px',
                margin: '0 auto',
                padding: '16px',
                overflow: 'hidden'
            }}
        >
            <FormControl component="fieldset" fullWidth>
                <FormLabel>Search By</FormLabel>
                <RadioGroup
                    row
                    value={searchType}
                    onChange={(e) => {
                        setSearchType(e.target.value);
                        setResults([]);
                        setQuery('');
                    }}
                >
                    <FormControlLabel value="id" control={<Radio />} label="ID" />
                    <FormControlLabel value="lastname" control={<Radio />} label="Last Name" />
                </RadioGroup>
            </FormControl>

            <Box style={{ marginTop: '16px' }}>
                <TextField
                    label={`Enter ${searchType === 'id' ? 'ID' : 'Last Name'}`}
                    variant="outlined"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                    fullWidth
                />
            </Box>

            <Box style={{ marginTop: '20px' }}>
                {results.length > 0 && (
                    <>
                        <Typography variant="h4">Search Results:</Typography>
                        {results.map((student) => (
                            <Box
                                key={student.id}
                                onClick={() => handleClick(student)}
                                role="button"
                                tabIndex={0}
                                style={{
                                    marginBottom: '12px',
                                    padding: '12px',
                                    border: '1px solid #ccc',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    transition: 'background 0.2s'
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        handleClick(student);
                                    }
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.background = '#f7f7f7')}
                                onMouseOut={(e) => (e.currentTarget.style.background = 'white')}
                            >
                                <Typography><strong>ID:</strong> {student.id}</Typography>
                                <Typography><strong>Name:</strong> {student.firstName} {student.lastName}</Typography>
                            </Box>
                        ))}
                    </>
                )}

                {query && results.length === 0 && (
                    <Typography>No student found</Typography>
                )}
            </Box>
        </Box>
    );
}
GetStudentDataCard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(GetStudentDataCard);
