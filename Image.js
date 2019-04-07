class Image{
    constructor(hash, directory){
      this.hash = hash;
      this.directory = directory;
    }
  
    maximize(url){
      let extension = url.split(".");
      extension = extension[extension.length-1];
  
      let container = document.createElement("div");
      container.id = "maximized-container";
      container.onclick = function(e){
        if(e.target !== this){
          return;
        }
        $("#maximized-container").remove();
        $(".blurrable").css("filter", "none");
      }
  
      let centeredContainer = document.createElement("div");
      centeredContainer.id = "centered-container";
  
      let source = document.createElement("a");
      source.target = "_blank";
      source.href = url;
      source.className = "image-button";
      source.innerHTML = "Open original";

      let dl = document.createElement("a");
      dl.href = url;
      dl.className = "image-button";
      dl.innerHTML = "Download original";
      dl.setAttribute("download", "");
  
      if(extension == "webm" || extension == "mp4"){
        let video = document.createElement("video");
        let source = document.createElement("source");
        source.src = url;
        video.id = "maximized-item";
        video.setAttribute("controls", "");
        video.setAttribute("loop", "");
        video.appendChild(source);
        centeredContainer.appendChild(video);
      }else{
        let image = document.createElement("img");
        image.src = url;
        image.id = "maximized-item";
  
        centeredContainer.appendChild(image);
      }
      centeredContainer.appendChild(source);
      centeredContainer.appendChild(dl);
      container.appendChild(centeredContainer);
      document.body.appendChild(container);
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