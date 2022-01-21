function main () {
  logseq.Editor.registerBlockContextMenuItem('Tweet block',
    async ({ uuid }) => {
      const block = await logseq.Editor.getBlock(uuid)
      const blockContent = encodeURIComponent(block.content)
      logseq.App.openExternal('https://twitter.com/intent/tweet?text=' + blockContent)
    })

  logseq.Editor.registerBlockContextMenuItem('Toot block',
    async ({ uuid }) => {
      const block = await logseq.Editor.getBlock(uuid)
      const blockContent = encodeURIComponent(block.content)
      logseq.App.openExternal('https://mastodon.social/share?text=' + blockContent)
    })
}

// bootstrap
logseq.ready(main).catch(console.error)
