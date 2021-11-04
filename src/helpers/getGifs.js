export const getGifs = async (category) => {
    //peticion http
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=UjB1qd0G8sizQyb38MPxNtu5CtQyAYPx`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })
    return gifs;

}