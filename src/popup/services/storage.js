const NAME = 'collections'

class Storage {
  constructor(chrome) {
    this.$storage = chrome.storage
  }

  reset() {
    return new Promise(resolve => {
      this.$storage.sync.set({[NAME]: []}, () => resolve())
    })
  }

  getAllCollections() {
    return new Promise(resolve => {
      this.$storage.sync.get([NAME], data => resolve(data.collections))
    })
  }

  addCollection({name, urls}) {
    return new Promise(async resolve => {
      console.log(`Add collection ${name} with ${urls.length} base URLs`)

      if (!name || !urls) {
        return
      }

      const collections = await this.getAllCollections()

      if (collections.some(collection => collection.name === name)) {
        console.error('Collection with the same name already exist')
        return
      }

      collections.push({name, urls})

      this.$storage.sync.set({[NAME]: collections}, result => {
        console.log(
          `Success: Addded collection ${name} with ${urls.length} base URLs`,
        )
        resolve(result)
      })
    })
  }

  addLinks({name, urls}) {
    console.log(`Add ${urls.length} new URLs to ${name} collection`)
  }
}

export {Storage as default}
