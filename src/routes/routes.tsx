// Routes.tsx
import React from 'react';
import {Switch, Route, RouteComponentProps, withRouter} from 'react-router'
import {useRoutePropagation} from '@shopify/app-bridge-react';

function Routes(props: RouteComponentProps) {
  const {location} = props;

  useRoutePropagation(location);

  return (
    <>
      <Switch>
        <Route exact path="/">
        { /* other routes */ }
      </Switch>
    </>
  );
}

export default withRouter(Routes);
