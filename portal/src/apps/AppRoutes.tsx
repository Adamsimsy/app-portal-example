import React, { VFC, lazy } from 'react';
import { Route } from "react-router-dom";

export const routes = [
    {
        path: "/app/a",
        component: lazy(() => import('./AppA')),
        name: "App A"
    },
    {
        path: "/app/b",
        component: lazy(() => import('./AppB')),
        name: "App B"
    },
    {
        path: "/app/c",
        component: lazy(() => import('app-portal-xample-app-c')),
        name: "App C"
    }
];

function RouteWithSubRoutes(route: any) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
};

export const AppRoutes: VFC = () => {
    return (
        <div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    );
};