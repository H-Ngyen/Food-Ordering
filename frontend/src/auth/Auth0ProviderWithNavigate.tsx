import { Auth0Provider, User, type AppState } from "@auth0/auth0-react";
import type React from "react"

type Props = {
    children: React.ReactNode
};

function Auth0ProviderWithNavigate({children}: Props) {
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

    if(!domain || !clientID || !redirectUri) {
        throw new Error("unable to initialise auth");
    }

    const OnRedirectCallBack = (appState?: AppState, user?: User) => {
        console.log("User " ,user);
    }

    return (
        <Auth0Provider 
            domain={domain} 
            clientId={clientID} 
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={OnRedirectCallBack}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;