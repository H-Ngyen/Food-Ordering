import { AppState, Auth0Provider, useAuth0, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode;
};

export default function Auth0ProviderWithNavigate({ children }: Props) {
    const navigate = useNavigate();
    const { getAccessTokenSilently } = useAuth0();
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redireUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if (!domain || !clientId || !redireUri) {
        throw new Error("unable to initialise auth");
    }

    const onRedirectCallback = async (appState?: AppState, user?: User) => {
        const token = await getAccessTokenSilently();
        console.log('token: ', token);
        navigate("/auth-callback");
    };
    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redireUri
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    )
};