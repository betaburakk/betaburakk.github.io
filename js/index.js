function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_d9taxxl";
  const templateID = "template_bn4spbx";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}







window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
      navbar.style.backgroundColor = "green";
    } else {
      navbar.style.backgroundColor = "blue";
    }
  }



let baslik = document.title;
    window.onblur = () =>
        document.title = "Hey! Beni unuttun.";
    window.onfocus = () =>
        document.title = baslik;


        document.addEventListener('DOMContentLoaded', () => {
          // hljs.initHighlightingOnLoad();
        
          const codeBlock = document.getElementById('code');
          const copyButton = document.getElementById('copy-button');
          const copySuccess = document.getElementById('copy-success');
        
          const copyTextHandler = () => {
            const text = codeBlock.innerText;
        
            // first version - document.execCommand('copy');
            // var element = document.createElement('textarea');
            // document.body.appendChild(element);
            // element.value = text;
            // element.select();
            // document.execCommand('copy');
            // document.body.removeChild(element);
        
            // copySuccess.classList.add('show-message');
            // setTimeout(() => {
            //   copySuccess.classList.remove('show-message');
            // }, 2500);
        
            //   second version - Clipboard API
            navigator.clipboard.writeText(text).then(
              () => {
                copyButton.innerHTML = "Copied!";
                setTimeout(() => {
                  copyButton.innerHTML = "Copy";
                }, 1000);
                // copySuccess.classList.add('show-message');
                // setTimeout(() => {
                //   copySuccess.classList.remove('show-message');
                // }, 2500);
              },
              () => {
                console.log('Error writing to the clipboard');
              }
            );
          };
        
          copyButton.addEventListener('click', copyTextHandler);
        });