module.exports = function() {

    let recordsGenerator = require('./records');
    let pagingResult = recordsGenerator();

    return {
        "btnCreateVisible": true,
        "btnRefreshVisible": true,
        "btnDeleteVisible": true,
        "total": pagingResult.total,
        "records": pagingResult.records
    }

}


