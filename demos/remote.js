import main from "https://raw.githubusercontent.com/garrettmflynn/phaser/main/index.wasl.json" assert {type: "json"}
import phaserInfo from "https://raw.githubusercontent.com/garrettmflynn/phaser/main/src/index.wasl.json" assert {type: "json"}

import mainPkg from 'https://raw.githubusercontent.com/garrettmflynn/phaser/main/package.json'  assert {type: "json"}
import phaserPkg from 'https://raw.githubusercontent.com/garrettmflynn/phaser/main/src/package.json'  assert {type: "json"}
import * as phaser from  'https://raw.githubusercontent.com/garrettmflynn/phaser/main/src/components/phaser/index.js'
import * as config from  'https://raw.githubusercontent.com/garrettmflynn/phaser/main/src/components/config/index.js'
import * as game from  'https://raw.githubusercontent.com/garrettmflynn/phaser/main/src/components/game/index.js'

import * as update from  'https://raw.githubusercontent.com/garrettmflynn/phaser/main/scripts/update.js'
import * as preload from  'https://raw.githubusercontent.com/garrettmflynn/phaser/main/scripts/preload.js'
import * as create from  'https://raw.githubusercontent.com/garrettmflynn/phaser/main/scripts/create.js'

const path = 'https://raw.githubusercontent.com/garrettmflynn/phaser/main/index.wasl.json'

const options = {
    relativeTo: import.meta.url,
    filesystem: {
        'package.json': mainPkg,
        'src/package.json': phaserPkg,
        'src/index.wasl.json': phaserInfo,
        'src/components/phaser/index.js': phaser,
        'src/components/config/index.js': config,
        'src/components/game/index.js': game,
        'scripts/preload.js': preload,
        'scripts/update.js': update,
        'scripts/create.js': create
    }
}

export {
    path,
    main,
    options
}