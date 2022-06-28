let tippText = document.querySelector("p#calculatedTipp")
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
    let splittNum = (totalNum / peopleNum).toFixed();
    let endNum = splittNum * peopleNum;
    let splittUglyNumEur = (totalNum / peopleNum).toLocaleString('de-DE', {style: 'currency', currency: 'EUR' });
    if (amountNum == 0 || peopleNum == 0){
        tippText.innerText = `Nothing set yet`;
        totalText.innerText =  `Nothing set yet`;
        splittText.innerText =  `Nothing set yet`;
        infoText.innerText = "";
    }
    else{
        tippText.innerText = `${tippNumEur} (${qualityNum}% of your checks amount)`;
        totalText.innerText = `${totalNumEur}`;
        splittText.innerText = `${splittNum},00 € (rounded*)`;
        infoText.innerText = `*Since we don't like small change, the price per person is rounded. So the service gets a total of ${endNum} €. if you don't see it that way, simply split the bill into ${splittUglyNumEur} each.`;
    }
}