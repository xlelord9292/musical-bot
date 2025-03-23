let configCache: any = null

export async function getConfig() {
  if (configCache) {
    return configCache
  }

  try {
    const config = {
      botName: "Musical",
      botDescription:
        "The ultimate Discord music bot with high-quality audio and easy-to-use commands. Completely free with no premium restrictions!",
      botInviteUrl:
        "https://discord.com/oauth2/authorize?client_id=1085342308934889592&permissions=4954768590961&integration_type=0&scope=bot+applications.commands",
      supportServerUrl: "https://discord.gg/PhjnJygSGv",
      discordInviteUrl: "https://discord.gg/PhjnJygSGv",

      features: {
        premiumEnabled: false, 
        djRolesEnabled: true,
        playlistsEnabled: true,
        lyricsEnabled: true,
        effectsEnabled: true,
      },

      serverCount: 41,
      totalPlays: 1245789,
      uptime: 99.9,

      theme: {
        primaryColor: "#ff3131",
        secondaryColor: "#4a2e6f",
        accentColor: "#ff3131",
      },

      social: {
        twitter: "https://twitter.com/musical",
        github: "https://github.com/musical",
        discord: "https://discord.gg/PhjnJygSGv",
      },
    }

    configCache = config
    return config
  } catch (error) {
    console.error("Failed to load config:", error)
    throw error
  }
}

