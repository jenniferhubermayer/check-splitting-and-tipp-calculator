let tippText = document.querySelector("p#calculatedTipp")
let tippTextH2 = document.querySelector("h2#calculatedTipp")
let totalText = document.querySelector("p#calculatedTotal")
let splittText = document.querySelector("p#calculatedSplitt")

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
        tippText.innerText = `Nothing set yet`;
        totalText.innerText =  `Nothing set yet`;
        splittText.innerText =  `Nothing set yet`;
        infoText.innerText = "";
    }
    else{
        tippTextH2.innerText = `${qualityNum}% tip:`
        tippText.innerText = `${tippNumEur}`;
        totalText.innerText = `${totalNumEur}`;
        splittText.innerText = `${splittNumEurRounded},00 €`;
        infoText.innerText = `*Since we don't like small change, the price per person is rounded. So the service gets a total of ${endNumEur}. if you don't see it that way, simply split the bill into ${splittNumEur} each.`;
    }
}