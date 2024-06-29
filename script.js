let shareIcon = document.getElementById("share-icon");
let footer = document.getElementById("footer");

shareIcon.addEventListener("click", () => {
  footer.style.background = "hsl(217, 19%, 35%)";
  footer.style.borderRadius = "0 0 10px 10px";
  shareIcon.style.background = "hsl(212, 23%, 69%)";
  shareIcon.style.color = "white";
  shareIcon.style.width = "10px";
  shareIcon.style.padding = "10px";

  footer.innerHTML = `<div class="footer-container">
                            <div class="socials-container">
                                <p>SHARE </p>
                                <img src="./images/icon-facebook.svg"/>
                                <img src="./images/icon-twitter.svg"/>
                                <img src="./images/icon-pinterest.svg"/>
                            </div>
                            <img  class="share-icon" src="./images/icon-share.svg"/>
                      </div>`;
});
