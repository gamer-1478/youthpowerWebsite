//send one image

const fs = require("fs");

exports.handler = async function (event, context) {
    //get file name from query string
    const { name } = event.queryStringParameters;
    //read file
    const image = fs.readFileSync(`
    ./images1/${name}`);
    //return image
    return {
        statusCode: 200,
        body: image.toString("base64"),
        headers: {
            "Content-Type": "image/jpeg",
        },
        isBase64Encoded: true,
    };
};