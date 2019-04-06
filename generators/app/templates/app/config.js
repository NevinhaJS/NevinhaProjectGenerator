export default {
    pages: {
        "SimpleOne": { 
            "screen": "stacked", 
            "settings": 
            { 
                "nextScreen": "SimpleTwo", 
                "statusBar": { //can be null
                    "backgroundColor": "#6a51ae",
                    "textColor": "#fff",
                    "title": "Show some thing", //can be null
                    "backIcon": false
                },
                "mainNavigation": { //can be null
                    "color": "#fff",
                    "backgroundColor": "#6a51ae"
                },
                "numero": 1, 
                "pageName": "Clique no botão para ir a próxima página" 
            }
        },
        "SimpleTwo": { 
            "screen": "tab", 
            "settings": 
            { 
                "nextScreen": "SimpleTwo", 
                "mainNavigation": { //can be null
                    "color": "#fff",
                    "backgroundColor": "#6a51ae"
                },
                "tabBar": {
                    "activeTintColor": "#fff",
                    "inactiveTintColor": "gray",
                    "size": 25,
                    "showLabel": false,
                    "backgroundColor": 'red'
                },
                "numero": 1, 
                "pageName": "Clique no botão para ir a próxima página",
            } 
        }
    }
}