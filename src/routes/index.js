import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/Login';

import ListStudents from '~/pages/Students/List';
import AddStudent from '~/pages/Students/Add';
import EditStudent from '~/pages/Students/Edit';
import ListSubscriptions from '~/pages/Subscriptions/List';
import AddSubscription from '~/pages/Subscriptions/Add';
import EditSubscription from '~/pages/Subscriptions/Edit';
import ListEnrollments from '~/pages/Enrollments/List';
import AddEnrollment from '~/pages/Enrollments/Add';
import EditEnrollment from '~/pages/Enrollments/Edit';
import HelpRequests from '~/pages/HelpRequests';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/students" exact component={ListStudents} isPrivate />
      <Route path="/students/add" exact component={AddStudent} isPrivate />
      <Route path="/students/edit" exact component={EditStudent} isPrivate />

      <Route
        path="/subscriptions"
        exact
        component={ListSubscriptions}
        isPrivate
      />
      <Route
        path="/subscriptions/add"
        exact
        component={AddSubscription}
        isPrivate
      />
      <Route
        path="/subscriptions/edit"
        exact
        component={EditSubscription}
        isPrivate
      />

      <Route path="/enrollments" exact component={ListEnrollments} isPrivate />
      <Route
        path="/enrollments/add"
        exact
        component={AddEnrollment}
        isPrivate
      />
      <Route
        path="/enrollments/edit"
        exact
        component={EditEnrollment}
        isPrivate
      />

      <Route path="/requests" component={HelpRequests} isPrivate />
    </Switch>
  );
}
