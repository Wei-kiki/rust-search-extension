class CrateDocSearch extends DocSearch {

    constructor(name, version, searchIndex) {
        super(name, searchIndex);
        this._path = `https://docs.rs/${name}/${version}/`;
    }

    get rootPath() {
        return this._path;
    }
}

class CrateDocSearchManager {
    constructor() {
        this.cachedCrateSearcher = null;
        this.allCrateSearcher = null;
    }

    initAllCrateSearcher() {
        let searchIndex = {};
        Object.keys(CrateDocSearchManager.getCrates()).forEach(crateName => {
            searchIndex = Object.assign(searchIndex, CrateDocSearchManager.getCrateSearchIndex(crateName));
        });
        this.allCrateSearcher = new CrateDocSearch("~", "*", searchIndex);
    }

    search(query) {
        query = query.replace("@", "").trim();
        let [crateName, keyword] = query.split(" ");

        let searcher = null;
        if (this.cachedCrateSearcher && this.cachedCrateSearcher.name === crateName) {
            searcher = this.cachedCrateSearcher;
        } else {
            let crates = CrateDocSearchManager.getCrates();
            let crate = crates[crateName];
            if (crate) {
                let searchIndex = CrateDocSearchManager.getCrateSearchIndex(crateName);
                searcher = new CrateDocSearch(crateName, crate.version, searchIndex);

                this.cachedCrateSearcher = searcher;
            } else {
                let list = Object.entries(crates).map(([name, crate]) => {
                    crate["name"] = name;
                    return crate;
                });

                list = list.filter(item => !crateName || item.name.toLowerCase().indexOf(crateName) > -1)
                    .sort((a, b) => a.name.localeCompare(b.name));
                list.unshift({
                    content: crateName, // Non-empty value is required for content, so maybe give it a crate name.
                    description: `Following ${list.length} crate(s) were added by you, select one to search their docs exclusively.`
                });
                return list;
            }
        }

        let results = searcher.search(keyword);
        // Push result footer.
        results.push({
            content: searcher.getSearchUrl(keyword),
            description: `Input keyword to search ${c.match(crateName)}'s docs...`,
        });
        return results;
    }

    // Search all saved crates docs collectively.
    searchAll(query) {
        if (!this.allCrateSearcher) {
            this.initAllCrateSearcher();
        }
        let keyword = query.replace("~", "").trim();
        return this.allCrateSearcher.search(keyword);
    }

    static getCrates() {
        return JSON.parse(localStorage.getItem("crates") || "{}");
    }

    static getCrateSearchIndex(name) {
        return JSON.parse(localStorage.getItem(`@${name}`));
    }

    static addCrate(name, version, searchIndex) {
        localStorage.setItem(`@${name}`, JSON.stringify(searchIndex));
        let doc = searchIndex[name]["doc"];
        let crates = CrateDocSearchManager.getCrates();
        crates[name] = {version, doc, time: Date.now()};
        localStorage.setItem("crates", JSON.stringify(crates));
    }

    static removeCrate(name) {
        let crates = CrateDocSearchManager.getCrates();
        delete crates[name];
        localStorage.setItem("crates", JSON.stringify(crates));
        localStorage.removeItem(`@${name}`);
    }
}