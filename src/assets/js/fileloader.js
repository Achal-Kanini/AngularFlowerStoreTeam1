function encodeImageFileAsURL() {
   // var srcData='';
    var filesSelected = document.getElementById("inputFileToLoad").files;
    // console.log(filesSelected);
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];

      var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64

        var newImage = document.createElement('img');
        newImage.src = srcData;

        document.getElementById("imgTest").innerHTML = newImage.outerHTML;
        // alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        // console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        // console.log("New Image src is "+newImage.src);
        // console.log("New SrcData src is "+);
        // fileReader.readAsDataURL(fileToLoad);
        // return srcData;
        var base64 = btoa(fileLoadedEvent.target.result);
        console.log("bas64 is "+base64);
        // return fileLoadedEvent;
        

      }
      fileReader.readAsDataURL(fileToLoad);
      return fileToLoad;
 
    }
    //return srcData;
  }