function timeStamp(time){
    if(time>31536000){
        const year=parseInt(time/31536000);
        let remainingDay=parseInt(time%365);
        const hours=parseInt(remainingDay/86400);
        return`${year} year ${remainingDay} day ${hours} hour ago`;

    }
    else{
        const hour=parseInt(time/3600);
        let remainingSecond= time % 3600;
        const minute=parseInt(remainingSecond/60);
        remainingSecond=remainingSecond%60;
        return `${hour} hour ${minute} minute ${remainingSecond} ago`;
    }
   
}
const sortCatagory=(id)=>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
        removeActiveclass();
        const activebtn=document.getElementById(`btn-${id}`);
        activebtn.classList.add("active");
        displayVideos(data.category)
    })
    .catch((error) =>console.log(error));
};
const removeActiveclass=()=>{
    const buttons=document.getElementsByClassName("category_btn");
    console.log(buttons)
    for(let btn of buttons){
        btn.classList.remove("active");
    }
}
const loadDetails=async(videoid)=>{
    console.log(videoid);
    const uri=`https://openapi.programming-hero.com/api/phero-tube/video/${videoid}`;
    const res=await fetch(uri);
    const data=await res.json();
    displayDetails(data.video);
}
const displayDetails=(video)=>{
console.log(video)
const detailContainer=document.getElementById('modalContent');
detailContainer.innerHTML=`
<img src="${video.thumbnail}" />
<p>${video.description}</p>
`;
document.getElementById('showModalData').click();
}
document.getElementById('search_input').addEventListener('keyup',(e)=>{
    loadVideos(e.target.value);

})