import "@sapphire/plugin-logger/register"
import { BotClient } from "./lib/BotClient"
import { token } from "./config"

const client = new BotClient()
void client.login(token)
