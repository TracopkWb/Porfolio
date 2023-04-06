
const inputPhoneNumber = document.getElementById("phoneNumber");

inputPhoneNumber.addEventListener("keyup", getInput);

function getInput(e) {
    e.preventDefault;
    console.log(inputPhoneNumber)
    if(inputPhoneNumber.textLength !== 0){
        console.log(inputPhoneNumber.value);
        var formattedInputValue = formatPhoneNumber(inputPhoneNumber.value);
    };
    
  };

  function formatPhoneNumber(value){
    if(!value) return value;

  };


  function showFile() {
    var file = document.getElementById("pic-input").files[0];
    console.log(file)
    console.log(file.name)
    var image = document.getElementById("dogPic"); 
    var reader = new FileReader();

    reader.addEventListener("load", ()=>{
        image.src=reader.result;
        console.log(reader.result)
        console.log(image);      
    });
    if(file){
        reader.readAsDataURL(file);
        }
    }

