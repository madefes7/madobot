const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.reply("Bilgilerini gösterebilmem için kullanıcının adını girmelisin.")
            .then(x => x.delete(5000))
        }

        const url = `https://instagram.com/${name}/`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Yazdığınız hesabı bulamadım.")
            .then(x => x.delete(5000))
        }
        
        const account = res.graphql.user;

        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTitle(account.full_name ? account.full_name : account.username)
            .setURL(`https://instagram.com/${account.username}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profil bilgisi", stripIndents`**- Kullanıcı adı:** ${account.username}
            **- Tam adı:** ${account.full_name ? account.full_name : 'Yok!'}
            **- Biyografi:** ${account.biography.length == 0 ? "Yok!" : account.biography}
            **- Gönderiler:** ${account.edge_owner_to_timeline_media.count}
            **- Takipçiler:** ${account.edge_followed_by.count}
            **- Takip etme:** ${account.edge_follow.count}
            **- Gizli hesap:** ${account.is_private ? "Evet 🔐" : "Hayır 🔓"}
            **- Onaylı hesap:** ${account.is_verified ? "Evet ✅ " : "Hayır ❌"}`);

        message.channel.send(embed);
        
    }

    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ["insta"],
        permLevel: 0,
        kategori: 'bot'
    }
    
    exports.help = {
        name: 'instagram',
        description: 'İsmi girilen instagram hesabının bilgilerini gösterir.',
        examples: ["instagram discord"],
        usage: 'instagram <kullanıcı>',
        cooldown: 10
    }