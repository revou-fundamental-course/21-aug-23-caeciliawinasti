
    let nama = prompt("Halo, siapakah nama Anda?", "Guest");
    document.getElementById("nama").innerHTML = nama
    if (nama == null || nama == "") {
        alert = "nama tidak boleh kosong"
    } 
 
    
    var slideIndex = 1

    setInterval(function(){
        plusIndex(1)
    }, 3000)

    function plusIndex(index) {
        showImage(slideIndex += index)
    }

    function showImage(index) {
        var imgList = document.getElementsByClassName("autoSlide")
        var i;
        if (index > imgList.length) {slideIndex = 1}
        if (index < 1) {slideIndex = imgList.lenght}

        for(i=0; i < imgList.length; i++) {
            imgList[i].style.display = "none"
        }
        imgList[slideIndex -1].style.display = "block"
    }
    

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUi(name, birthDate, gender, messages);

    return false
}

function setSenderUi(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}