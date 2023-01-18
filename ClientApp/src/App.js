import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { loginRequest } from './authConfig';
import { ProfileData } from "./utils/profileData";
import { callMsGraph } from "./utils/graph";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <AuthenticatedTemplate>
                <Routes>
                    {AppRoutes.map((route, index) => {
                        const { element, ...rest } = route;
                        return <Route key={index} {...rest} element={element} />;
                    })}
                </Routes>
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                    <Routes>
                        {AppRoutes.map((route, index) => {
                            const { element, ...rest } = route;
                            return <Route key={index} {...rest} element={element} />;
                        })}
                    </Routes>
                </UnauthenticatedTemplate>
            </Layout>
        );
    }
}
