class Image{
    constructor(hash, directory, tags, url){
      this.hash = hash;
      this.directory = directory;
      this.tags = tags
      this.url = url;
    }
  
    maximize(){
      document.getElementById("tag-list").innerHTML = "";
      if(document.getElementById("maximized-item") !== null) document.getElementById("maximized-item").remove();
      $("#maximized-container").show();
      let extension = this.url.split(".");
      extension = extension[extension.length-1];
  
      let container = document.getElementById("maximized-container");
      container.onclick = function(e){
        if(e.target !== this){
          return;
        }
        $("#maximized-container").hide();
        $(".blurrable").css("filter", "none");
      }
  
      let centeredContainer = document.getElementById("centered-container");

      document.getElementById("source-button").href = this.url;

      document.getElementById("download-button").href = this.url;

      this.tags.split(" ").forEach(tag => {
        let tagDiv = document.createElement('p');
        tagDiv.innerHTML = tag;
        tagDiv.classList = "tag";
        document.getElementById("tag-list").appendChild(tagDiv);
      });
  
      if(extension == "webm" || extension == "mp4"){
        let video = document.createElement("video");
        let source = document.createElement("source");
        source.src = this.url;
        video.id = "maximized-item";
        video.setAttribute("controls", "");
        video.setAttribute("loop", "");
        video.appendChild(source);
        centeredContainer.prepend(video);
      }else{
        let image = document.createElement("img");
        image.src = this.url;
        image.id = "maximized-item";
  
        centeredContainer.prepend(image);
      }
      $(".blurrable").css("filter", "blur(3px)");
    }
  
    render(id){
      let image = document.createElement("img");
      image.src = "https://gelbooru.com/thumbnails/" + this.directory + "/thumbnail_" + this.hash + ".jpg";
      image.classList = "thumbnail";
      image.id = id;
      document.getElementById("results").appendChild(image);
    }
  }