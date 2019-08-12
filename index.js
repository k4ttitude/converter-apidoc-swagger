const arrayToTree = require('./util').arrayToTree;
const fs = require('fs');
const inputPath = './apidoc/api_data.json';
const outputPath = './swagger/swagger.json';

let apiData = JSON.parse(fs.readFileSync(inputPath));

let convertData = apiData.reduce((tree, item) => {
    let nodes = item.url.replace(/(^\/+)|(\/+$)/g, '').split(/\//);
    let node;
    let parent = tree;
    while ((node = nodes.shift()) != null) {
        if (!parent[node])
            parent[node] = {};
        parent = parent[node];
    }
    parent = Object.assign(parent, item);
    return tree;
}, {});

// console.log(convertData);
fs.writeFileSync(outputPath, JSON.stringify(convertData));