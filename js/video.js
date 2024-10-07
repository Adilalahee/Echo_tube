const loadCatagories=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) =>console.log(error));
};
const displayCatagories=(categories) => {
    const categoriesContainer=document.getElementById("categories");

        categories.forEach((item) => {
        console.log(item);
        const button=document.createElement("button");
        button.classList="btn";
        button.innerText=item.category;
        categoriesContainer.append(button)
        
        
    });
};
loadCatagories();
const loadVideos=()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res)=>res.json())
    .then((data)=>displayVideos(data.videos))
    .catch((error)=>console.log(error))

}
const displayVideos=(videos)=>{
    const videoContainer=document.getElementById("video");
    videos.forEach((item)=>{
        const card=document.createElement("div");
        card.classList="card card-compact";
        card.innerHTML=
        `
        <figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src=${item.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex">
    <img class="w-10 h-10 rounded-full object-cover" src=${item.authors[0].profile_picture}/>
    
  </div>
  
  </div>
        `;
videoContainer.append(card);

    });
}
loadVideos();