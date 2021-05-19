//DEEL 1 
//opdracht 1, 2, 3, 4 maak een event-listener vast aan de buttons, console.log het dier en voeg het dier toe aan "spotted animals"

const bigFiveButtons = document.querySelectorAll(".big-five-button");

bigFiveButtons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const buttonHTML = event.target.innerHTML;
        console.log(buttonHTML);

        let newLi = document.createElement("li");
        newLi.classList.add("spotted-animals-list-item");
        
        let ulSpottedAnimals = document.getElementById("spotted-animals-list");
        ulSpottedAnimals.appendChild(newLi)
        newLi.innerHTML = buttonHTML;
    });
});

//DEEL 2   1e element verwijderen uit de lijst met de button

const removeFirstItemButton = document.getElementById("remove-first-item-button");

removeFirstItemButton.addEventListener("click", () => {
    let parentIsUl = document.getElementById("spotted-animals-list");
    let childIsLi = parentIsUl.getElementsByTagName("li")[0]; //document.getElementsByClassName("spotted-animals-list-item")[0];
    console.log("parent:", parentIsUl);
    console.log("child:", childIsLi);
    parentIsUl.removeChild(childIsLi); //same result: childIsLi.remove();
});

//DEEL 3   meerdere elementen verwijderen uit de DOM met een button

const removeAllItemsButton = document.getElementById("remove-all-button");

removeAllItemsButton.addEventListener("click", () => {
    let parentIsUl = document.getElementById("spotted-animals-list");
    let childIsLi = parentIsUl.getElementsByTagName("li")[0];

    parentIsUl.querySelectorAll("*").forEach(spottedAnimal => spottedAnimal.remove());
});
