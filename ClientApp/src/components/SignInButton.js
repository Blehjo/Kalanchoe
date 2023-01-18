import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import Button from "react-bootstrap/Button";

export const SignInButton = () => {
    const { instance } = useMsal();

    const handlePopupLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }

    const handleRedirectLogin = (loginType) => {
        if (loginType === "redirect") {
            instance.loginRedirect(loginRequest).catch(e => {
                console.log(e);
            });
        }
    }

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handlePopupLogin("popup")}>Sign in using Popup</Button>
        //<Button variant="secondary" className="ml-auto" onClick={() => handleRedirectLogin("redirect")}>Sign in using Redirect</Button>
    );
}