module.exports = {
    name: 'mute',
    description: 'This command mutes everyone in a voice channel.',
    async execute(message, args){
        const vc = message.guild.channels.cache.filter((channel) => channel.id==args[0]);
        for (const [channelID, channel] of vc) {
            for (const [memberID, member] of channel.members) {
                if(member.voice.mute){
                    message.channel.send(`Unmuting ${member.user.username}`)
                    member.voice.setMute(false)
                }else {
                    message.channel.send(`Muting ${member.user.username}`)
                    member.voice.setMute(true)
                }
            }
          }
    }
}