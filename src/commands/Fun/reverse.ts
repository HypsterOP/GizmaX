import Eris from "eris";
import { Command as CMD, Client } from "../../";

export default class Command implements CMD {
    constructor() { }
    
    help = {
        name: "reverse",
        description: "Reverse command",
        aliases: []
    }

    async run(client: Client, message: Eris.Message, args: string[]) {
        const msg = args.join(" ");
        if(msg.includes('@')) return message.channel.createMessage({ content: `Yo yo, lets slow down those pings huehue.` })
        if (!msg) return message.channel.createMessage({ content: "Please specify a message to reverse!"});

        return message.channel.createMessage({ content: msg.split("").reverse().join("")});
    }
}