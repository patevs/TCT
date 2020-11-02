
/**
 *  config.js
 */

const expandHomeDir = require('expand-home-dir');

var config = {

    // Use this to have a different animal say a message in the big box.
    // regex: if TTC_SAY_BOX is a filePath, return that path
    //parrot | bunny | llama | cat | yeoman | mario | ironman | minions | panda`
    say: /(\w[~\/])/.test(process.env.TTC_SAY_BOX)
        ? process.env.TTC_SAY_BOX : (process.env.TTC_SAY_BOX || 'parrot').toLowerCase(),

    // Directories in which to run git-standup on for a list of your recent commits.
    repos: (process.env.TTC_REPOS || '~/code').split(',').map(p => expandHomeDir(p)),

    // Directory-depth to look for git repositories.
    depth: (process.env.TTC_REPOS_DEPTH || 1),

    // Where to check the weather for.
    // It's using weather.service.msn.com behind the curtains.
    weather: process.env.TTC_WEATHER || 'Auckland',

    // Set to false if you're an imperial savage. <3
    celsius: (process.env.TTC_CELSIUS || 'true') === 'true',

    terminal_title: (process.env.TTC_TERMINAL_TITLE === 'false' ? null : 'TCT'),
    // ! emoji not supported on windows
    //terminal_title: (process.env.TTC_TERMINAL_TITLE === 'false' ? null : '✨💖 tiny care terminal 💖✨'),

    updateInterval: parseFloat(process.env.TTC_UPDATE_INTERVAL) || 20,

    // Pomodoro Settings
    runningDuration: process.env.TTC_POMODORO || 20,
    breakDuration: process.env.TTC_BREAK || 5,

};

module.exports = config;


// EOF

