module.exports = {
    name: 'toggle',
    description: 'This command unmutes everyone in a voice channel.',
    async execute(message, args){
        console.log(args);
        var channel_name = args.join(" ");
        console.log(channel_name);
        const vc = message.guild.channels.cache.filter((channel) => channel.name==channel_name);
        console.log(vc);
        for (const [channelID, channel] of vc) {
            for (const [memberID, member] of channel.members) {
                if(member.voice.mute){
                    message.channel.send(`Unmuting Everyone in ${channel.name}`)
                    member.voice.setMute(false)
                }else {
                    message.channel.send(`Muting Everyone in ${channel.name}`)
                    member.voice.setMute(true)
                }
            }
          }
    }
}