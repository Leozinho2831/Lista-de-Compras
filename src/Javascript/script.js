const formButton = 
    document.querySelector('.js-buttonAddItem');

const notificationContainer = 
    document.querySelector('.js-notificationDelete');
const classNotification = 'js-activeNotification';

const sectionItemsList = 
    document.querySelector('.js-containerPurchase');

const itemsListStorage = localStorage.getItem('sectionItemsList');

if(itemsListStorage){
    sectionItemsList.innerHTML = itemsListStorage;
}

function notificationDelete(event){
    const closeNotification = event.target;

    if(closeNotification){
        closeNotification.parentElement
        .classList.remove(classNotification);
    }
}

function deletePurchase(event){
    const itemRemove = event.target;
    
    if(itemRemove){
        itemRemove.parentElement.remove();
        localStorage.setItem('sectionItemsList', sectionItemsList.innerHTML);
    }

    if(notificationContainer){

        notificationContainer.classList.add(classNotification);

        const timeCloseNotification = 6000;

        setTimeout(() => {
            notificationContainer.classList.remove(classNotification);
        }, timeCloseNotification);

    }
}

function createListItem(){
    const inputAddItem = 
        document.querySelector('.js-inputPurchase');

    const purchaseNew = 
    `
    <label class="container__purchase">
        <div>
            <input
                type="checkbox"
            >
            <p class="text">${inputAddItem.value}</p>
        </div>
        <img src="src/Images/Trash.svg" alt="Deletar" onclick="deletePurchase(event)">
    </label>
    `;
    
    if(inputAddItem.value){
        sectionItemsList.insertAdjacentHTML('afterbegin', purchaseNew);

        inputAddItem.value = '';

        localStorage.setItem('sectionItemsList', sectionItemsList.innerHTML);
    } else {
        alert('coloque um valor no input');
    }
}

if(formButton){
    formButton.onclick = createListItem;
}