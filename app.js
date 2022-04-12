const form = document.querySelector('#searchForm')
const body = document.querySelector("body");

form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params:{q:searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(res.data);
    removeImages();
    makeImages(res.data);
    form.elements.query.value ='';
})


const removeImages=()=>{
    const ims = body.getElementsByTagName("img");
    for(let i=0; i<ims.length;i++)
    {
        body.removeChild(ims[i])
        i--;
    }
}


const makeImages=(shows)=>{
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement("img");
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}