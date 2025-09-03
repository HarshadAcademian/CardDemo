import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import StudentDetails from './StudentDetails';
 
const RouterPage = (props) => {
    return (
         <Router basename={props.pageInfo.basePath}>
            <Switch>
                <Route exact path={`/:id`}>
                <StudentDetails {...props} />
            </Route>
            </Switch>
        </Router>
    );
};
 
RouterPage.propTypes = {
    pageInfo: PropTypes.object
};
 
export default RouterPage;