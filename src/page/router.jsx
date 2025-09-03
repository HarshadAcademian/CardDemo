// import React from 'react';
// import PropTypes from 'prop-types';
// import { Switch, Route } from 'react-router-dom';

// import GetStudentDataCard from '../cards/GetStudentDataCard';
// import StudentDetails from './StudentDetails';

// const RouterPage = (props) => {
//     return (
//         <Switch>
//             <Route exact path={`/`}>
//                 <GetStudentDataCard {...props} />
//             </Route>

//             <Route path={`/student-details/:id`}>
//                 <StudentDetails {...props} />
//             </Route>
//         </Switch>
//     );
// };

// RouterPage.propTypes = {
//     pageInfo: PropTypes.object
// };

// export default RouterPage;



import React from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
// import Home from './Home';
import GetStudentDataCard from '../cards/GetStudentDataCard';
import StudentDetails from './StudentDetails';
 
// for more information on react router: https://v5.reactrouter.com/web/guides/quick-start
 
const RouterPage = (props) => {
    return (
        <Router basename={props.pageInfo.basePath}>
            <Switch>
                {/* <Route path='/'>
                    <Home {...props} />
                </Route> */}
                <Route exact path={`/:id`}>
                <StudentDetails {...props} />
            </Route>

            {/* <Route path={`/student-details/:id`}>
                <StudentDetails {...props} />
            </Route> */}
            </Switch>
        </Router>
    );
};
 
RouterPage.propTypes = {
    pageInfo: PropTypes.object
};
 
export default RouterPage;
