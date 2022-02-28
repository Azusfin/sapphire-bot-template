import { SapphireClient } from "@sapphire/framework"

export class BotClient extends SapphireClient {
    constructor() {
        super({
            intents: []
        })
    }
}
