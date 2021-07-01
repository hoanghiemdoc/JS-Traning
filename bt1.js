let clickInput = document.getElementById("click");

clickInput.addEventListener("click", () => {
    let setItem = document.getElementById("input").value;
    document.getElementById("appear").innerHTML = setItem;
    document.getElementById("input").value = "";

});
