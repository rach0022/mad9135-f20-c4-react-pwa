import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'

// based on this link: https://dev.to/woile/simplest-react-hook-component-for-pwa-install-button-2die
const InstallBanner = () => {
    // supportPWA will be used to check if the user can use PWA installation on their device and
    // the deffered prompt will be the basic prompt for install that we will store away for later use
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [defferedPrompt, setDefferedPrompt] = useState(null);
    // get a reference to useHistory to get the length (the number of pages the user visits)
    const history = useHistory()

    console.log(history, history.length)
    useEffect(() => {
        // create a handler function callback that will call the supplied event
        const handler = ev => {
            ev.preventDefault();
            setSupportsPWA(true);
            setDefferedPrompt(ev);
        };
        // set the handler on the listernr for the before install prompt
        // becuase if that fires we know the devices supports PWA's and we can store that prompt
        window.addEventListener("beforeinstallprompt", handler);

        // after the function ends fire the callback to remove the eventlistener for the PWA prompt
        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const handleInstallClick = ev => {
        // stop the buttons normal functionality and if we have a deffered prompt set we can launch its prompt
        // which will be the window asking to install the app
        ev.preventDefault();
        if (!defferedPrompt) {
            return;
        }
        // fire off the prompt from our stored deffered prompt
        defferedPrompt.prompt();
    };

    // Check if the app supports pwa, if the user has visited atleast 3 pages and if we are in standalone mode
    // becuase if we are in standalone mode it means the user has installed the app
    if (!supportsPWA || history.length < 3 || window.matchMedia('(display-mode: standalone)').matches) {
        // return no install button if one of these conditions passes
        return null;
    }

    // return the install button with the callback function if we fail all of the above conditions
    return (
        <div className="container">
            <button
                className="btn waves-effect waves-light deep-blue"
                aria-label="Install Cocktail App"
                title="Install Random Cocktail App"
                onClick={handleInstallClick}
            >
                Install
                </button>
        </div>
    );
};

export default InstallBanner;

