
# tct | tiny-care-terminal

A dashboard for your terminal. Forked from: [`notwaldorf/tiny-care-terminal`](https://github.com/notwaldorf/tiny-care-terminal)

> This is a little dashboard that tries to take care of you when you're using your terminal. It tells you cute, self care things, and tries not to stress you out.

----

## Install & Run

Install using either `npm` or `yarn`:

```bash
# move into project directory
cd tct
# install with npm
npm install
# OR install with yarn
yarn
```

Run the application with the following command:

```bash
npm start
# OR
yarn start
```
You can exit the dashboard by pressing `esc` or `q`. The dash updates every 20 minutes or you can refresh the dashboard manually by pressing `r`.  

### 🍅 Pomodoro Mode

You can press 'p' to switch parrot box to pomodoro mode.

Other commands while in pomodoro mode:

```
    s - start/pause/resume pomodoro
    e - stop pomodoro
    u - update pomodoro duration
    b - update break time
```

To change default pomodoro and break durations set following variables in minutes (these should be numbers):

```
TTC_POMODORO=...
TTC_BREAK=...
```


----

