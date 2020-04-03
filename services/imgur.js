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
