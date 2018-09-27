module.exports = function (nodes) {
    const news = [];
    let allSame = 0;

    nodes.forEach(function (node, index) {
        if (index === 0) {
            allSame = node.weight;
        } else {
            if (allSame && allSame !== node.weight) {
                allSame = false;
                return false;
            }
        }
    });

    nodes.forEach(function (node) {
        for (let i = 0; i < node.weight; i++) {
            news.push(node);
            if (allSame) {
                break
            }
        }
    });
    return news;
};