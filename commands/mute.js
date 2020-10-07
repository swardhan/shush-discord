module.exports = {
    name: 'mute',
    description: 'This command mutes everyone in a voice channel.',
    async execute(message, args){
        console.log(args);
        var channel_name = args.join(" ");
        console.log(channel_name);
        const vc = message.guild.channels.cache.filter((channel) => channel.name==channel_name);
        console.log(vc);
        for (const [channelID, channel] of vc) {
            for (const [memberID, member] of channel.members) {
                    message.channel.send(`Muting ${member.user.username}`)
                    member.voice.setMute(true)
            }
          }
    }
}