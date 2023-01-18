import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handlePopupLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/" // redirects the top level app after logout
            });
        }
    }

    const handleRedirectLogout = (logoutType) => {
        if (logoutType === "redirect") {
            instance.logoutRedirect({
                postLogoutRedirectUri: "/",
            });
        }
    }

    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handlePopupLogout("popup")}>Sign out using Popup</Button>
        //<Button variant="secondary" className="ml-auto" onClick={() => handleRedirectLogout("redirect")}>Sign out using Redirect</Button>
    );
}