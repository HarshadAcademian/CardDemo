import React from 'react';
import PropTypes from 'prop-types';
import {
    Route,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import StudentDetails from './StudentDetails';
import ClassSchedule from './ClassSchedule';
 
const RouterPage = (props) => {
    return (
         <Router basename={props.pageInfo.basePath}>
            <Switch>
                <Route exact path={`/:id`}>
                <StudentDetails {...props} />
            </Route>

            <Route path="/student/:id/schedule">
                    <ClassSchedule {...props} />
                </Route>
            </Switch>
        </Router>
    );
};
 
RouterPage.propTypes = {
    pageInfo: PropTypes.object
};
 
export default RouterPage;