import data from './data.js';

let container = document.getElementById('container');
let mainModal = document.getElementById('main-modal');

data.forEach((e)=>{
    let div = document.createElement('div');
    div.innerHTML = `
        <div class="uk-card uk-card-hover uk-card-default uk-padding uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="${e.img_url}" alt="${e.alt}" uk-cover>
                <canvas width="600" height="250"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">${e.title}</h3>
                    <p><b>Description</b>: ${e.short_desc} </p>
                    <div uk-lightbox class="uk-margin">
                        <button class="uk-button uk-button-default uk-margin-small-right uk-margin-small-top" type="button" uk-toggle="target: #modal-close-default${e.id}">Read More</button>
                        <a class="uk-button uk-button-primary uk-margin-small-right uk-margin-small-top" href="${e.vid_url}" data-caption="">Demo</a>
                        <button id="purchase-btn" class="uk-button uk-button-secondary uk-margin-small-right uk-margin-small-top" >Purchase</button>
                    </div> 
                </div>
            </div>
        </div>
    `;
    container.appendChild(div);

    let modalDiv = document.createElement('div');
    modalDiv.innerHTML = `
    <div id="modal-close-default${e.id}" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <button class="uk-modal-close-default" type="button" uk-close></button>
            <h2 class="uk-modal-title">Description</h2>
            <p>${e.long_desc}</p>
        </div>
    </div>
    `;
    mainModal.appendChild(modalDiv);
})

let purchaseBtn = document.getElementById('purchase-btn');
purchaseBtn.addEventListener("click",()=>{
    alert('clicked');
})

console.log(data);