const arrayToTree = arr => {
    let tree = {};
    for (let item of arr) {
        let nodes = item.replace(/(^\/+)|(\/+$)/g, '').split(/\//);
        let parent = tree;
        let node;
        while ((node = nodes.shift()) != null) {
            if (!parent[node]) {
                parent[node] = {};
            }
            parent = parent[node];
        }
    }
    return tree;
}

module.exports = { arrayToTree: arrayToTree }