import {
    SlashCommandBuilder,
    SlashCommandOptionsOnlyBuilder,
    SlashCommandSubcommandsOnlyBuilder,
    ContextMenuCommandBuilder
} from "@discordjs/builders"
import { ApplicationCommandRegistry, RegisterBehavior } from "@sapphire/framework"
import { servers } from "../config"

export function registerChatInputCommand(
    registry: ApplicationCommandRegistry,
    builder: (builder: SlashCommandBuilder) => (
        | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
        | SlashCommandBuilder
        | SlashCommandOptionsOnlyBuilder
        | SlashCommandSubcommandsOnlyBuilder
    ),
    idHints?: string[]
): void {
    registry.registerChatInputCommand(builder, {
        idHints,
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite
    })

    if (servers.length) {
        registry.registerChatInputCommand(builder, {
            idHints,
            guildIds: servers,
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite
        })
    }
}

export function registerContextMenuCommand(
    registry: ApplicationCommandRegistry,
    builder: (builder: ContextMenuCommandBuilder) => ContextMenuCommandBuilder,
    idHints?: string[]
): void {
    registry.registerContextMenuCommand(builder, {
        idHints,
        behaviorWhenNotIdentical: RegisterBehavior.Overwrite
    })

    if (servers.length) {
        registry.registerContextMenuCommand(builder, {
            idHints,
            guildIds: servers,
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite
        })
    }
}
