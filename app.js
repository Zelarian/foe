// Universal constants
frametime = 0.050; // Used for time updates
windowWidth  = 1260;
windowHeight = 700;

APP_NAME = "Fall of Eden";
VERSION_MAJOR = 0;
VERSION_MINOR = 3;
VERSION_SUBSCRIPT = "j2";
VERSION_NAME = "Terry the thief: Saving fixed";

SAVE_VERSION = 16;
// Save version 1: Initial
// Save version 2: Added inventory
// Save version 3: Fixed clitcock restoration + height, weigth
// Save version 4: Fixed kiakai race
// Save version 5: Growth added to stats
// Save version 6: Changed Kiakai attitude
// Save version 7: Added Rosalin, moved a bunch of save flags
// Save version 8: Fixed weird Fera bug
// Save version 9: Adjusted breast sizes
// Save version 10: Rosalin eyes
// Save version 11: Jobs
// Save version 12: Job fix "Figther"
// Save version 13: Krawitz
// Save version 14: Miranda herm fix
// Save version 15: Twins met flag
// Save version 16: Jeanne met flag


VERSION_STRING = APP_NAME + " " + VERSION_MAJOR + "." + VERSION_MINOR + VERSION_SUBSCRIPT + ": " + VERSION_NAME;

HEADER_FONT  = "bold 30pt Calibri";
BUTTON_FONT  = "14pt Impact";
SMALL_FONT   = "16pt Calibri";
DEFAULT_FONT = "20pt Calibri";
LARGE_FONT   = "26pt Calibri";

Unit = {
	metric   : 0,
	american : 1
}

var MEASUREUNIT = Unit.metric;
//var MEASUREUNIT = Unit.american;

var DEBUG = false;

var RENDER_PICTURES = true;
