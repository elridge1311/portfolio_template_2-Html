var mod;

function mo(a){
   mod =a;

   var modal = document.getElementById("myModal"+mod);

   var img = document.getElementById("myImg"+mod);

   var modalImg = document.getElementById("img"+mod);

  img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;

  setTimeout(function () {
    pause();
  }, 2000);

  function pause(){
    modal.style.display = "none";
  }

 }
}