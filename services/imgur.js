// const request = require("request");

// exports.getImage = function(search, page = 1) {
//   return new Promise((resolve, reject) => {});
// };

// const fetch = require("node-fetch")

// const term = "cats"
// const url = `https://api.imgur.com/3/gallery/search/top/1/?q=${term}`
// const IMGUR_API_CLIENT = "b067d5cb828ec5a" 

// exports.getImage = function(search) {
//     fetch(url, {headers: {Authorization: `Client-ID ${IMGUR_API_CLIENT}`}})
//     // .then((res) => {
//         // return res.json()
//     // })
//       .then(json => {
//         return json
//       })
// };



    const request = require('request');
    exports.getImage = function(search) {

    return new Promise((resolve, reject) => {
        let options = {
        url: `https://api.imgur.com/3/gallery/search/?q=${search}&q_type=png&q_size_px=150`,
        headers: { Authorization: 'Client-ID b067d5cb828ec5a' },
        json: true,
        };

        function getPics(err, response, body) {
            body = body.data.filter(image => {
               return image.type !== undefined
            })
            .map(image => {
                    if (image.type == undefined) {
                        return {
                    } 
                }
                    return {
                        url: image.link,
                    };
                });
            resolve(body)
        }
        request(options, getPics);
        });
    };
