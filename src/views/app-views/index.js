import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content" />}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/home`} component={lazy(() => import(`./home`))} />
        <Route exact path={`${APP_PREFIX_PATH}/general/clients/clientlist`} component={lazy(() => import(`./general/clients/clientlist`))} />
        <Route exact path={`${APP_PREFIX_PATH}/general/clients/clientlist/:user_id`} component={lazy(() => import(`./general/clients/clientlist/[user_id]`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/home`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);