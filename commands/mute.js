module.exports = {
    name: 'mute',
    description: 'This command mutes everyone in a voice channel.',
    async execute(message, args){
<<<<<<< HEAD
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
=======
        console.log(args);
        var channel_name = args.join(" ");
        console.log(channel_name);
        const vc = message.guild.channels.cache.filter((channel) => channel.name==channel_name);
        console.log(vc);
        for (const [channelID, channel] of vc) {
            for (const [memberID, member] of channel.members) {
                    message.channel.send(`Muting ${member.user.username}`)
                    member.voice.setMute(true)
>>>>>>> 6c14b6183a334ea7cb2cec54e708127ea29ef1b7
            }
          }
    }
}