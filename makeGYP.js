const fs = require("fs")
const ADDONS_PATH = `./src/addons`
const addonsFolder = fs.readdirSync(ADDONS_PATH)
const sources = []
addonsFolder.map((file) => {
  if (file.includes(".cpp")) {
    sources.push(`${ADDONS_PATH}/${file}`)
  }
})

// Making gyp file
const stringifiedAddons = JSON.stringify({
  targets: [
    {
      target_name: "addons",
      sources,
    },
  ],
})
fs.writeFileSync("./binding.gyp", stringifiedAddons)
