/*
---                           ---
---     PAGINATION GARBAGE    ---
---                           ---
*/
var currentPage = 0;
function updatePager(){
  $(".pi1 a").text(currentPage+1);
  $(".pi2 a").text(currentPage+2);
  $(".pi3 a").text(currentPage+3);
}

$(".pip").click(function(event){
  event.preventDefault();
  if(currentPage > 0){
    currentPage--;
    importImgs();
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
  importImgs();
  updatePager();
});

$(".pi3").click(function(event){
  event.preventDefault();
  currentPage += 2;
  importImgs();
  updatePager();
});

$(".pin").click(function(event){
  event.preventDefault();
  currentPage++;
  importImgs();
  updatePager();
});


/*
---                           ---
---     IMAGE LOADING SHIT    ---
---                           ---
*/

function fixImg(img){
  var file = img.src;
  file = file.substr(0, file.indexOf("/", 8)) + "/" + file.substr(file.indexOf("/", 8));
  img.src = file;
  console.log("error loading img");
  img.onerror = "";
}

function appendImg(val){
  var file = val.file_url;
  var isVid = (file.includes("mp4") || file.includes("webm") || file.includes("avi") || file.includes("mpg") || file.includes("mpeg"));
  if(!isVid){
    $(".results").append("<a href=\"" + file + "\" class=\"image\"><img src=\"" + file + "\" class=\"img\" onerror=\"fixImg(this)\"/></a>");
  }else{
    var thumb = "thumbnail_" + val.image.split(".")[0] + ".jpg";
    var thumbURL = file.substr(0, file.lastIndexOf("/")).replace("images", "thumbnails") + "/" + thumb;
    $(".results").append("<a href=\"" + file + "\" class=\"image\"><img src=\"" + thumbURL + "\" class=\"img video\"/></a>");
  }
}

function importImgs(){
  var tags = $(".search-tags").val();
  var page = currentPage;
  $(".results").empty();

  $.ajax({
    url: "http://codingneko-eval-test.apigee.net/gelbooru",
    type: "GET",
    data: {
      json: 1,
      q: "index",
      s: "post",
      page: "dapi",
      tags: tags,
      pid: page,
      limit: 15
    },
    timeout: 2000,
    success: function(result){
      $.each(result, function(i, val){
        appendImg(val);
      });
    },
  });
}

importImgs();

$(".search").click(function(){
  currentPage = 0;
  importImgs();
});
