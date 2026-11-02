
const applications = {
    app1: {
        name: "Application 1",
        url: "app-hello-world.azurewebsites.net"
    },

    app2: {
        name: "Application 2",
        url: "https://saintsandmasters.com/"
    },

    app3: {
        name: "Application 3",
        url: "https://portal.azure.com/"
    }
};

const selector = document.getElementById("appSelector");
const appFrame = document.getElementById("appFrame");

selector.addEventListener("change", function () {

    const selectedApp = selector.value;

    if (selectedApp && applications[selectedApp]) {

        appFrame.src = applications[selectedApp].url;

    } else {

        appFrame.src = "about:blank";

    }

});
