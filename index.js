function toggleModal() {
    //Still need to check if form is valid. Could do in another function though.
    console.log("button has been clicked!")
    //Get the display properties from each div
    let cardContainer=document.getElementsByClassName("card-root")
    let successContainer=document.getElementsByClassName("success-container")

    let cardSetting=window.getComputedStyle(cardContainer[0]).getPropertyValue('display');
    let successSetting=window.getComputedStyle(successContainer[0]).getPropertyValue('display');
    if (cardSetting == 'flex') {
        console.log("I should change display properties!");
        cardContainer[0].style.display='none';
        successContainer[0].style.display='flex';
    } else {
    cardContainer[0].style.display='flex';
    successContainer[0].style.display='none';
    }

}