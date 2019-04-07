var currentPage = 0;
var searchTags = document.getElementById("search-tags").value;
var postsPerPage = 15;


function updatePager(){
  $(".pi1 a").text(currentPage+1);
  $(".pi2 a").text(currentPage+2);
  $(".pi3 a").text(currentPage+3);
}

$(".pip").click(function(event){
  event.preventDefault();
  if(currentPage > 0){
    currentPage--;
    fetchImages(searchTags, currentPage, 25);
  }else{
    currentPage=0;
  }
  updatePager();
});

$(".pi1").click(function(event){
  event.preventDefault();
  updatePager();
});

$(".pi2").click(function(event){
  event.preventDefault();
  currentPage++;
  fetchImages(searchTags, currentPage, 25);
  updatePager();
});

$(".pi3").click(function(event){
  event.preventDefault();
  currentPage += 2;
  fetchImages(searchTags, currentPage, 25);
  updatePager();
});

$(".pin").click(function(event){
  event.preventDefault();
  currentPage++;
  fetchImages(searchTags, currentPage, 25);
  updatePager();
});

function fetchImages(tags, page, limit){
  fetch("http://codingneko-eval-test.apigee.net/gelbooru?page=dapi&s=post&q=index&json=1&tags=" + tags + "&pid=" + page + "&limit=" + limit).then(function(response){
    return response.json();
  }).then(function(data){
    document.getElementById("results").innerHTML = "";
    document.getElementById("search-tags").value = searchTags;
    data.forEach(jsonImage => {
      let image = new Image(jsonImage.hash, jsonImage.directory);
      image.render(jsonImage.hash);
      document.getElementById(jsonImage.hash).addEventListener("click", function(){
        image.maximize(jsonImage.file_url);
      });
    });
  }).catch(error => {
      document.getElementById("results").innerHTML = "No images were found ";
      console.log();
  });
}

document.getElementById("post-quantity").addEventListener("change", function(){
  postsPerPage = this.value;
  fetchImages(searchTags, currentPage, postsPerPage);
});

fetchImages("", 0, postsPerPage);

document.getElementById("search-form").addEventListener("submit", function(e){  
  e.preventDefault();
  searchTags = document.getElementById("search-tags").value;
  fetchImages(searchTags, currentPage, postsPerPage);
});