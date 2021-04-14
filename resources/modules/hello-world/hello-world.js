/*
** ------------------------------------------------------------------------------
** Example
** ------------------------------------------------------------------------------
** Uncomment to use
** ------------------------------------------------------------------------------

const moduleHelloWorld = {
    // Cache elenents and bind events
    boot: function() {
        // Cache elements for reusing
        moduleHelloWorld.section = document.querySelector(".weather-module");

        // Load bounded functions
        moduleHelloWorld.bindings();

        // Run functions if dom content is loaded
        moduleHelloWorld.example('weather-module');
    },

    // Bind events
    bindings: function() {

        // Example click function
        moduleHelloWorld.section.onclick = function(e){
            e.preventDefault();
            moduleHelloWorld.example(e);
        }
    },

    // Example function
    example: function(text) {
        console.log(text);
    }
};

document.addEventListener("DOMContentLoaded", function () {
    moduleHelloWorld.boot();
});

*/