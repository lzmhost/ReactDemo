module.exports = function() {
  return {
      "userName": "Test User",
      "selectedMenus": ["1"],
      "openMenus": ["5", "13", "18"],
      "menuItems": [{
          "text": "Home", "key": "1", "url": "/"
      }, {
          "text": "Work Order", "key": "2"
      }, {
          "text": "Winder", "key": "3"
      }, {
          "text": "Solutions", "key": "4"
      }, {
          "text": "Statistic & Report", "key": "5",
          "items": [{
              "text": "Monthly Report", "key": "6"
          }, {
              "text": "Successful Rate", "key": "7"
          }, {
              "text": "Malfunction Type", "key": "8"
          }, {
              "text": "Component Failure", "key": "9"
          }, {
              "text": "Life Analysis for OTA & Local Spare Part", "key": "10"
          }, {
              "text": "Life Analysis for OTA & Local Spare Part", "key": "11"
          }, {
              "text": "Life Analysis for Repair Spare part", "key": "12"
          }]
      }, {
          "text": "Master Data", "key": "13",
          "items": [{
              "text": "Basic Definition", "key": "14"
          }, {
              "text": "Parts", "key": "15"
          }, {
              "text": "Maintenance Plan", "key": "16"
          }, {
              "text": "Project Order", "key": "17"
          }]
      }, {
          "text": "System Admin", "key": "18",
          "items": [{
              "text": "Countries", "key": "19", "url": "/countrylist"
          }, {
              "text": "Customers", "key": "20"
          }, {
              "text": "Workshop", "key": "21"
          }, {
              "text": "Users", "key": "22"
          }, {
              "text": "Role", "key": "23"
          }, {
              "text": "Assign Rights", "key": "24"
          }]
      }]
  }

}