// declare global WWT object
var wwt;

// settings variables
var bShowUI = false;
var bShowFigures = false;
var bShowCrosshairs = false;
var bshowConstellationBoundaries = false;


// create function to initialise wwt and fire ready event
function init_wwt() {
    wwt = wwtlib.WWTControl.initControl('wwtcanvas');
        wwt.add_ready(wwtReady);
}

// Function to setup the initial default settings of the engine
function wwtReady() {
    wwt.loadImageCollection("http://www.worldwidetelescope.org/COMPLETE/wwtcomplete.wtml");

    // default settings
    wwt.settings.set_showConstellationFigures(bShowFigures);
    wwt.settings.set_showCrosshairs(bShowCrosshairs);
    wwt.settings.set_showConstellationBoundries(bshowConstellationBoundaries);
    wwt.hideUI(!bShowUI);
    wwt.setBackgroundImageByName('Digitized Sky Survey (Color)')
}

// Calls init_wwt when HTML DOM is loaded
window.addEventListener('load', init_wwt);
