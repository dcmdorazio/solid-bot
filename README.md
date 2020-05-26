# solid-bot
Most generic Discord.js bot created with the help of https://discordjs.guide/#before-you-begin

## Uses

* `args-info` provides information about arguments

* `avatar` returns the user's avatar link

* `beep` returns a snide remark about thinking the bot so stupid as to fall for this trick

* `ping` does much the same as `beep`

* `help` gives information about the commands

* `prune` will delete a specified amount of messages


## Make it Yours!

To make this bot yours, simply clone the files and add a `config.json` inside of the main repository. Mine looks like this: 
  ```json
{
    "prefix": "_",
    "token": "<insert token>"
}
```

Be sure to install all the packages listed in `package.json`, `package-lock.json`, and `.eslintrc.json`!

# Startup

## Dev Mode

Dev mode is an easy way to develop your bot without having to restart it every time an update occurs. Install <a href="https://www.npmjs.com/package/nodemon" target="_blank" rel="noopener">nodemon</a> `npm install --save-dev nodemon`, and run `npm run dev` which will run the dev command from `package.json`.


## Hosting

Simply run `npm run start` or `node [main-file-name]`. In this case, substitue `[main-file-name]` with `index.js`.
