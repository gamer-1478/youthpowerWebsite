export const Photos = async () => { 
    return await fetch("https://yp-website-api.herokuapp.com/images")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        return data;
    });
}