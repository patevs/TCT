
# tct | tiny-care-terminal

A dashboard for your terminal. Forked from: [`notwaldorf/tiny-care-terminal`](https://github.com/notwaldorf/tiny-care-terminal)

> This is a little dashboard that tries to take care of you when you're using your terminal. It tells you cute, self care things, and tries not to stress you out.

----

## Features

- The last tweets from [@tinycarebot](https://twitter.com/tinycarebot), [@selfcare_bot](https://twitter.com/selfcare_bot) and [@magicrealismbot](https://twitter.com/magicrealismbot). The first two tend to tweet reminders about taking breaks, drinking water and looking outside, and the latter tells you strange, whimsical stories. If you don't like these bots, they're configurable!

- Your `git` commits from today and the last 7 days. When I get stressed out because I think I haven't done anything, it turns out that I only think about big and serious commits, and forget about all the tiny amounts of work I've actually done throughout. Hopefully this will help you too <3

- The weather, because you might get rained on.

----

## Configure Environment

All the settings the dashboard looks at are in the sample file `sample.env`. This file isn't used by the dashboard, it just lists the environment variables that you can copy in your `rc` files:

- `TTC_BOTS` are the 3 twitter bots to check, comma separated. The first entry in this list will be displayed in the big party parrot box.

- `TTC_SAY_BOX = parrot | bunny | llama | cat | yeoman | mario | ironman | minions | panda`, to party with a different parrot (or, more specifically: to have a different animal say a message in the big box). You can create your own custom art(.ansi file) [here](https://gauravchl.github.io/ansi-art/webapp/) and download and supply it's absolute path to render it within box. (eg: `TTC_SAY_BOX='/Users/om/desktop/cat.ansi'`)

- `TTC_REPOS`, a comma separated list of repos to look at for `git` commits.

- `TTC_REPOS_DEPTH` is the max directory-depth to look for git repositories in the directories defined with `TTC_REPOS` (by default 1). Note that the deeper the directory depth, the slower the results will be fetched.

- `TTC_WEATHER`, the location to check the weather for. A zipcode doesn't always work, so if you can, use a location first (so prefer `Paris` over `90210`)

- `TTC_CELSIUS` (by default true)

- `TTC_APIKEYS` -- set this to false if you don't want to use Twitter API keys and want to scrape the tweets instead.

- `TTC_UPDATE_INTERVAL`, set this to change the update frequency in minutes, default is 20 minutes.

- `TTC_TERMINAL_TITLE` -- set this to false if you don't want the terminal title to be changed on startup.

### Set up Twitter API keys

The dashboard has two alternatives for reading tweets: using your API keys or scraping. API keys is preferred (because lol scraping), but if you're really not into that, then skip the next section and read the bit about setting `TTC_APIKEYS`

You need [Twitter API keys](https://apps.twitter.com/) for the tweets to work. It should be pretty easy to create a new app, and get these 4 values. After you've set them up, set these env variables (see the [`sample.env`](sample.env) for an example):

```
TTC_CONSUMER_KEY='...'
TTC_CONSUMER_SECRET='...'
TTC_ACCESS_TOKEN='...'
TTC_ACCESS_TOKEN_SECRET='...'
```

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
npm run start
# OR
yarn run start
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

