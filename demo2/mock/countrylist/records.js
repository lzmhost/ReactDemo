module.exports = function() {

    let Mock = require('mockjs');
    let datas = Mock.mock({
        "array|15": [{
            "key": '@word',
            "no": '@word',
            "code": '@word',
            "countryname": '@county',
            "customer": '@cname',
            "workshop": '@word',
            "engineer": '@cname',
            "active|1": true,
        }]
    });

    return {
        "records": datas.array,
        "total": 120
    }

}


