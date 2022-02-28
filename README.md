**[sapphire](https://npmjs.com/package/@sapphire/framework) bot template**

### File Hierarchy
- `package.json` - configuration file for project
- `config_example.yml` - example of config file
- `config.yml` - configuration file for bot
- `src/index.ts` - entry point
- `src/config.ts` - configuration file relational mapping
- `src/listeners/**` - event listeners
- `src/commands/**` - bot commands
- `src/preconditions/**` - command preconditions
- `src/lib/**` - other things

### Configurations
Bot configurations (token, prefix, ...etc) are put in `config.yml` (YAML),
you may look at `config_example.yml` for an example of the config file

- Go to `src/config.ts` to add more configurations
- Go to `src/commands/**` to create more commands
- Go to `src/listeners/**` to listen for more events
- Go to `src/lib/**` to add other things (eg. Database)

### Startup
Run in command line

- `npm run build`
- `npm start`

## Do what you want as you like :)
