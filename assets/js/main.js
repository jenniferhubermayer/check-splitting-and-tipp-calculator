let tippText = document.querySelector("p#calculatedTipp")
let tippTextH2 = document.querySelector("h2#calculatedTipp")
let totalText = document.querySelector("p#calculatedTotal")
let totalTextH2 = document.querySelector("h2#calculatedTotal")
let splittText = document.querySelector("p#calculatedSplitt")
let splittTextH2 = document.querySelector("h2#calculatedSplitt")

countAmounts = (event) =>{
    event.preventDefault();
    let amountNum = +document.querySelector("#checkAmount").value;
    let peopleNum = +document.querySelector("#numberPeople").value;
    let qualityNum = +document.querySelector("#serviceQuality").value;
    let infoText = document.querySelector("#infoAmount")
    let tippNum = (qualityNum * amountNum) / 100;
    let tippNumEur = ((qualityNum * amountNum) / 100).toLocaleString('de-DE', {style: 'currency', currency: 'EUR' });
    let totalNum = +amountNum + +tippNum;
    let totalNumEur = (+amountNum + +tippNum).toLocaleString('de-DE', {style: 'currency', currency: 'EUR' });
    let splittNumFixed = (totalNum / peopleNum).toFixed();
    let splittNumEur = (totalNum / peopleNum).toLocaleString('de-DE', {style: 'currency', currency: 'EUR' });
    let splittNumEurRounded = (totalNum / peopleNum).toLocaleString('de-DE', {maximumFractionDigits:'0'});
    let endNumEur = (splittNumFixed * peopleNum).toLocaleString('de-DE', {style: 'currency', currency: 'EUR' });

    if (amountNum == 0 || peopleNum == 0){
        tippTextH2.innerText = `Calculated tip:`
        tippText.innerText = `Nothing set yet`;
        totalTextH2.innerText = `Total Amount:`
        totalText.innerText =  `Nothing set yet`;
        splittTextH2.innerText = `Price per person:`
        splittText.innerText =  `Nothing set yet`;
        infoText.innerText = "Please make sure to provide information in each field!";
    }
    else if (peopleNum == 1){
        tippTextH2.innerText = `${qualityNum}% tip:`
        tippText.innerText = `${tippNumEur}`;
        totalTextH2.innerText = `Total Amount:`
        totalText.innerText = `${totalNumEur}`;
        splittTextH2.innerText = "";
        splittText.innerText = "";
        infoText.innerText = "";
    }
    else{
        tippTextH2.innerText = `${qualityNum}% tip:`
        tippText.innerText = `${tippNumEur}`;
        totalTextH2.innerText = `Total Amount:`
        totalText.innerText = `${totalNumEur}`;
        splittTextH2.innerText = `Price per person*:`
        splittText.innerText = `${splittNumEurRounded},00 €`;
        infoText.innerText = `*Since we don't like small change, the price per person is rounded. So the service gets a total of ${endNumEur}. If you don't see it that way, simply split the bill into ${splittNumEur} each.`;
    }
}