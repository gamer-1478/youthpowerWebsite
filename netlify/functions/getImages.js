//make a netlify function to send images in image1 folder

const fs = require("fs");

exports.handler = async function (event, context) {
    const images1 = fs.readdirSync("./images1");
    const images = images1.keys().map((filename) => images1(filename));
    return {
        statusCode: 200,
        body: JSON.stringify(images),
    };
};