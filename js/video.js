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
        const buttonContainer=document.createElement("div");
        buttonContainer.innerHTML=`
        <button id="btn-${item.category_id}" class="btn category_btn" onclick="sortCatagory(${item.category_id})">${item.category}</button>
        `;
        
        categoriesContainer.append(buttonContainer)
        
        
    });
};
loadCatagories();

const loadVideos=(searchText =" ")=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((res)=>res.json())
    .then((data)=>displayVideos(data.videos))
    .catch((error)=>console.log(error))

}

const displayVideos=(videos)=>{
    const videoContainer=document.getElementById("video");
    videoContainer.innerHTML="";
    if(videos.length==0){
        videoContainer.classList.remove("grid");
        videoContainer.innerHTML=`
        <div class="max-h-[300px] flex flex-col items-center justify-center gap-2">
        <img src="assets/icon.png" />
        <h2 class="text-center text-xl font-bold">No Content found</h2>
        </div>
        `;
        return;
    }
    else{
        videoContainer.classList.add("grid");
    }
    videos.forEach((item)=>{
        console.log(item)
        const card=document.createElement("div");
        card.classList="card card-compact";
        card.innerHTML=
        `
        <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src=${item.thumbnail}
      alt="Shoes" />
      ${item.others.posted_date?.length==0? "":`<span class="absolute right-2 bottom-2 bg-black text-white">${timeStamp(item.others.posted_date)}</span>`}
      
  </figure>
  <div class="px-0 py-2 flex">
    <div>
    <img class="w-10 h-10 rounded-full object-cover" src=${item.authors[0].profile_picture}/>
    </div>
    <div cl>
    <h2>${item.title}</h2>
    <div class="flex items-center gap-2">
    <p class="text-gray-400">${item.authors[0].profile_name}</p>
    ${item.authors[0].verified===true ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=p9jKUHLk5ejE&format=png" />`:""}
    </div>
    <p> <button onclick="loadDetails('${item.video_id}')" class="btn btn-sm btn-error">Details</button> </p>
    </div>
  </div>

        `;
videoContainer.append(card);

    });
}
loadVideos();