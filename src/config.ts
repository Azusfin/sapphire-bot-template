import { YAML } from "yaml-schema"
import { readFileSync } from "node:fs"

const yaml = new YAML<Config>({
    type: "object",
    props: {
        token: {
            type: "string",
            length: {
                min: 58,
                max: 60
            }
        },
        prefix: {
            type: "string",
            default: "!",
            length: {
                min: 1
            }
        },
        owners: {
            type: "array",
            default: [],
            element: {
                type: "string",
                length: {
                    min: 17,
                    max: 19
                }
            }
        },
        servers: {
            type: "array",
            default: [],
            element: {
                type: "string",
                length: {
                    min: 17,
                    max: 19
                }
            }
        }
    }
})

const configFile = readFileSync("config.yml", "utf-8")
const config = yaml.parse(configFile)

export = config

interface Config {
    token: string
    prefix: string
    owners: string[]
    servers: string[]
}
