let smartphone = ({
    name: "Iphone-12",
    brand: "Apple",
    price: 1299,
    discount: 1300 * 5 / 100,//скидка  10%
    color: "Gold",
    iphone11: {
        name: "Iphone-11",
        brand: "Apple",
        price: 800,
        discount: 800 * 5 / 100,//скидка 5%
        color: "White",
    },
    iphone10: {
        name: "Iphone-10",
        brand: "Apple",
        price: 700,
        color: "Gold",
        discount: 0,

    }

}
)
let fridge = ({
    name: "Samsung",
    brand: "Samsung",
    price: 500,
    discount: 500 * 5 / 100,//скидка 5%
    color: "white",
    premier: {
        name: "Premier",
        brand: "Premier",
        price: 300,
        discount: 300 * 10 / 100,//скидка 10%
        color: "grey"
    },
    shivaki: {
        name: "Shivaki",
        brand: "Shivaki",
        price: 400,
        color: "white",
        discount: 0,
    }

})
let notebook = ({
    name: "RedmiBook",
    brand: "Redmi",
    price: 800,
    discount: 800 * 15 / 100,//скидка 15%,
    HP: {
        name: "HP",
        brand: "HP PAVILON GAMING",
        price: 1000,
        discount: 1000 * 5 / 100,//скидка 5%,
    },
    Acer: {
        name: "Acer",
        brand: "Acer Predator",
        price: 1200,
        color: "black",
        discount: 0,


    }
})
let televisor = ({
    name: "SmartA300",
    brand: "Samsung",
    price: 700,
    discount: 700 * 20 / 100,//скидка 20$ 
    Sony: {
        name: "Sony",
        brand: "Sony",
        price: 600,
        discount: 600 * 10 / 100,// скидка 10%

    },
    Lg: {
        name: "LG",
        brand: "Smart",
        price: 700,
        discount: 0,

    }
})
let videocard = ({
    name: "GTX1660TI",
    brand: "ASUS",
    price: 600,
    discount: 600 * 10 / 100,//скидка 10%
    GTX1050TI: {
        name: "GTX1050TI",
        brand: "ASUS",
        price: 400,
        discount: 400 * 5 / 100,//скидка 5%

    },
    RTX3070: {
        name: "RTX3070",
        brand: "Gigabayte",
        price: 1500,
        discount: 0,

    }
})
let count = {
    repaet: {}, //цифры из инпута 
    price: {},
    result: {},
    discount: {},
    newPrice: {},
    heart: {},
    search: {}


}

let heartWhite = document.querySelector(".heart_white_icon")
let heartBlue = document.querySelector(".heart_blue_icon")
likeNumber = document.querySelector(".like__number") // лайки
addTrolley = document.querySelector(".add__trolley") // кнопка добавить в корзину
trolleyNumber = document.querySelector(".trolley__number") //номер с инпута
let totalPrice = document.querySelector(".total__price") //прайс
let totalCashback = document.querySelector(".total__cashback")//кэшбек
let sunshine = document.querySelector("ion-icon") //иконка
let body = document.querySelector("body") // тело сатйа
let links = document.querySelectorAll("a")//все ссылки
let likeIcon = document.querySelector(".like") //иконка лайка
let TrolleyIcon = document.querySelector(".trolley")//иконка корзины
let calc = document.querySelector(".calc")
let itemCatalog = document.querySelectorAll(".first_page_item")// элементы первый страницы
// let smartphoneTitle = document.querySelectorAll(".Smartphone__title")
let pageSubtitle = document.querySelectorAll(".page__subtitle")
let garantSubtitle = document.querySelectorAll(".garant")

let hideHeart = (i) => { //скрываем лайк
    i.style.display = "none"
}
hideHeart(heartBlue)

let addLike = (clickWhite, showblue) => //Показать лайк
    clickWhite.onclick = () => {
        likeNumber.innerHTML++
        showblue.style.display = "block"
    }
addLike(heartWhite, heartBlue)

let removeLike = (clickBlue, hideBlue) => {//Cкрыть лайк
    clickBlue.onclick = () => {
        likeNumber.innerHTML--
        hideBlue.style.display = "none"
    }
}
removeLike(heartBlue, heartBlue)

sunshine.onclick = () => { //смена темы

    sunshine.classList.toggle("active")
    body.classList.toggle("body_active")
    for (let item of links) {
        item.classList.toggle("link_active")
    }
}
let title1 = document.querySelectorAll(".second_page_title")//имя товара
let SecondPgItm = document.querySelector(".second_page_item")
let nootebookPg = document.querySelector(".title2")
let PhonePrice = document.querySelectorAll(".phone__price")
SecondPgPhoto = document.querySelectorAll(".second_page_photo")
let NewItem = document.createElement("div") //Новые элементы
let NewItem2 = document.createElement("div")
let NewTitle2 = document.createElement("p")
let NewTitle = document.createElement("p")
let NewSubtitle = document.createElement("p")
let NewSubtitle2 = document.createElement("p")
let NewPrice = document.createElement("p")
let NewPrice2 = document.createElement("p")
let NewTrolley = document.createElement("p")
let NewTrolley2 = document.createElement("p")
let NewPhoto = document.createElement("img")
let NewPhoto2 = document.createElement("img")
let NewHeart = document.createElement("img")
let NewHeartBlue = document.createElement("img")
let NewHeart2 = document.createElement("img")
let NewHeartBlue2 = document.createElement("img")
let NewCalc = document.createElement("div")
let NewInpMin = document.createElement("button")
let NewInpPls = document.createElement("button")
let NewInp = document.createElement("input")

console.log(SecondPgItm);
let SecondPage = document.querySelector(".second_page_phone")//Отцовский блок


//инпуты 
let countInp = document.querySelector(".inp_number"),
    countMinus = document.querySelector(".inp_minus"),
    countPlus = document.querySelector(".inp_plus");



let i = 0 //Итератор
let plus = (arr, index, click, inp, add) => { // функция плюс 
    click.onclick = () => {
        event.preventDefault()
        inp.value++//цифра из инпута прибавляется на +1
        trolleyNumber.innerHTML++ // корзинка прибавляется на +1 
        count.repaet[0] = inp.value // количество кликов с инпута сохраняется в переменную 
        i++ //Итератор увеличивается на 1
        add.innerHTML = count.repaet[0] + " товаров " + count.repaet[0] + " с гарантией"//товары  
        let resultPlus = count.repaet[0] * arr// переменная с кликами умножается на цену товара 
        totalPrice.innerHTML = " Общий чек товаров " + resultPlus + "$"// результат умножение ( динамический меняется на странице)
        let resultPlus2 = count.repaet[0] * index
        totalCashback.innerHTML = " Общий кэшбек " + resultPlus2 + "$"
        count.discount[0] = resultPlus2 // кэшбек сохраняется в переменную 
        count.result[0] = resultPlus // общая сумма сохраняется в переменную 
        console.log(count.result[0]);
    }
}
let minus = (arr, index, click, inp, classList1, classList2, add) => {//функция минус
    click.onclick = () => {
        event.preventDefault()
        trolleyNumber.innerHTML--
        inp.value--
        count.repaet[0] = inp.value//количество кликов сохраняется в count
        i--
        add.innerHTML = count.repaet[0]-- + " товаров " + i + " с гарантией "
        let resultMinus = count.result[0] -= arr
        totalPrice.innerHTML = " Общий чек товаров " + resultMinus + "$"
        let resultMinus2 = count.discount[0] -= index
        totalCashback.innerHTML = " Общий кэшбек " + resultMinus2 + "$"
        if (inp.value == 0) {
            classList1.classList.toggle("add__trolley_active")
            classList2.classList.toggle("calc_active")
        }
    }
}
let trolleyFunc = (calculator, Trolley, itemPrice, itemDiscount, inpNumber,add2) => { //функция добавление в корзинку 
    calculator.classList.toggle("calc_active")
    Trolley.classList.toggle("add__trolley_active")
    i++
    inpNumber.value = 1
    trolleyNumber.innerHTML = 1
    add2.innerHTML = i + " товаров " + 1 + "c гарантией" 
   totalPrice.innerHTML = " Общий чек товаров " + itemPrice + "$"
    totalCashback.innerHTML = " Общий кэшбек " + itemDiscount + "$"
       
}




let smartphonePage = () => {
    NewItem.classList.add("second_page_item")
    NewItem2.classList.add("second_page_item")
    NewTitle.classList.add("second_page_title")
    NewTitle2.classList.add("second_page_title")
    NewSubtitle.classList.add("page__subtitle")
    NewSubtitle2.classList.add("page__subtitle")
    NewPrice.classList.add("phone__price")
    NewPrice2.classList.add("phone__price")
    NewTrolley.classList.add("add__trolley")
    NewTrolley2.classList.add("add__trolley")
    NewPhoto.classList.add("second_page_photo")
    NewPhoto2.classList.add("second_page_photo")
    NewHeart.classList.add("heart_white_icon")
    NewHeartBlue.classList.add("heart_blue_icon")
    NewHeartBlue2.classList.add("heart_blue_icon")
    NewHeart2.classList.add("heart_white_icon")
    NewTitle.innerHTML = smartphone.iphone11.name
    NewTitle2.innerHTML = smartphone.iphone10.name
    NewSubtitle.innerHTML = "с гарантией"
    NewSubtitle2.innerHTML = "без гарантии"
    NewPrice.innerHTML = "$" + smartphone.iphone11.price
    NewPrice2.innerHTML = "$" + smartphone.iphone10.price
    NewTrolley.innerHTML = "Добавить в корзину"
    NewTrolley2.innerHTML = "Добавить в корзину"
    nootebookPg.innerHTML = "Смартфоны"

    for (let item of PhonePrice) {
        item.innerHTML = "$" + smartphone.price
    }
    for (let item of title1) {
        item.innerHTML = smartphone.name
    }
    for (let item of SecondPgPhoto) {
        item.src = './images/iphone_12pro_gold.jpg'
    }
    NewPhoto.src = './images/Iphone-11 Pro.jpg' //Картинки
    NewPhoto2.src = './images/Iphone-10 Pro.jpg'
    NewHeart.src = './icons/heart-white.png'
    NewHeartBlue.src = "./icons/heart-blue.png"
    NewHeartBlue2.src = "./icons/heart-blue.png"
    NewHeart2.src = './icons/heart-white.png'
    SecondPage.append(NewItem, NewItem2)//Добавляет пустой блок
    NewItem.prepend(NewTitle, NewSubtitle, NewPrice, NewTrolley, NewPhoto, NewHeart, NewHeartBlue,)
    NewItem2.prepend(NewTitle2, NewSubtitle2, NewPrice2, NewTrolley2, NewPhoto2, NewHeart2, NewHeartBlue2,)
    addTrolley.onclick = () => {
        trolleyFunc(calc, addTrolley, smartphone.price, smartphone.discount, countInp,pageSubtitle[0])
    }
    NewTrolley.onclick = () => { //Iphone 11 
        let NewCalc = document.createElement("div")
        let NewInpMin = document.createElement("button")
        let NewInpPls = document.createElement("button")
        let NewInp = document.createElement("input")
        NewCalc.classList.add("calc")
        NewInpMin.classList.add("inp_minus")
        NewInpPls.classList.add("inp_plus")
        NewInp.classList.add("inp_number")
        NewCalc.style.marginTop = "70px"
        NewInpMin.style.marginLeft = "15px"
        NewInpPls.style.marginLeft = "5px"
        NewInp.style.marginLeft = "5px"
        NewInp.value = 0
        NewInpMin.innerHTML = "-"
        NewInpPls.innerHTML = "+"
        NewItem.prepend(NewCalc)
        NewCalc.prepend(NewInpMin, NewInp, NewInpPls)
        minus(smartphone.iphone11.price, smartphone.iphone11.discount, NewInpMin, NewInp, NewTrolley, NewCalc, pageSubtitle[0])
        plus(smartphone.iphone11.price, smartphone.iphone11.discount, NewInpPls, NewInp, pageSubtitle[0])
        trolleyFunc(NewCalc, NewTrolley, smartphone.iphone11.price, smartphone.iphone11.discount, NewInp,pageSubtitle[0])
      
    }
    NewTrolley2.onclick = () => {//Iphone 10 
        let NewCalc2 = document.createElement("div")
        let NewInpMin2 = document.createElement("button")
        let NewInpPls2 = document.createElement("button")
        let NewInp2 = document.createElement("input")
        NewCalc2.classList.add("calc")
        NewInpMin2.classList.add("inp_minus")
        NewInpPls2.classList.add("inp_plus")
        NewInp2.classList.add("inp_number")
        NewCalc2.style.marginTop = "70px"
        NewInpMin2.style.marginLeft = "15px"
        NewInpPls2.style.marginLeft = "5px"
        NewInp2.style.marginLeft = "5px"
        NewInp2.value = 0
        NewInpMin2.innerHTML = "-"
        NewInpPls2.innerHTML = "+"
        NewItem2.prepend(NewCalc2)
        NewCalc2.prepend(NewInpMin2, NewInp2, NewInpPls2)
        minus(smartphone.iphone10.price, smartphone.iphone10.discount, NewInpMin2, NewInp2, NewTrolley2, NewCalc2, pageSubtitle[0])
        plus(smartphone.iphone10.price, smartphone.iphone10.discount, NewInpPls2, NewInp2, pageSubtitle[0])
        trolleyFunc(NewCalc2, NewTrolley2, smartphone.iphone10.price, smartphone.iphone10.discount, NewInp2,pageSubtitle[0])


    }

    //функции для смартфона 
    minus(smartphone.price, smartphone.discount, countMinus, countInp, addTrolley, calc, pageSubtitle[0])
    plus(smartphone.price, smartphone.discount, countPlus, countInp, pageSubtitle[0])
    smartFunc()
    //для новых элементов
    hideHeart(NewHeartBlue)
    addLike(NewHeart, NewHeartBlue)
    removeLike(NewHeartBlue, NewHeartBlue)
    hideHeart(NewHeartBlue2)
    addLike(NewHeart2, NewHeartBlue2)
    removeLike(NewHeartBlue2, NewHeartBlue2)
}

itemCatalog[0].onclick = () => { //Смартфоны 
    smartphonePage()
}



let notebookPage = () => {

    NewItem.classList.add("second_page_item")
    NewItem2.classList.add("second_page_item")
    NewTitle.classList.add("second_page_title")
    NewTitle2.classList.add("second_page_title")
    NewSubtitle.classList.add("page__subtitle")
    NewSubtitle2.classList.add("page__subtitle")
    NewPrice.classList.add("phone__price")
    NewPrice2.classList.add("phone__price")
    NewTrolley.classList.add("add__trolley")
    NewTrolley2.classList.add("add__trolley")
    NewPhoto.classList.add("second_page_photo")
    NewPhoto2.classList.add("second_page_photo")
    NewHeart.classList.add("heart_white_icon")
    NewHeartBlue.classList.add("heart_blue_icon")
    NewHeartBlue2.classList.add("heart_blue_icon")
    NewHeart2.classList.add("heart_white_icon")
    NewTitle.innerHTML = notebook.HP.name
    NewTitle2.innerHTML = notebook.Acer.name
    NewSubtitle.innerHTML = "с гарантией"
    NewSubtitle2.innerHTML = "без гарантии"
    NewPrice.innerHTML = "$" + notebook.HP.price
    NewPrice2.innerHTML = "$" + notebook.Acer.price
    NewTrolley.innerHTML = "Добавить в корзину"
    NewTrolley2.innerHTML = "Добавить в корзину"
    nootebookPg.innerHTML = "Ноутбуки"

    for (let item of PhonePrice) {
        item.innerHTML = "$" + notebook.price
    }
    for (let item of title1) {
        item.innerHTML = notebook.name
    }
    for (let item of SecondPgPhoto) {
        item.src = './images/notebook.jpg'
    }
    NewPhoto.src = './images/HP.jpg' //Картинки
    NewPhoto2.src = './images/Acer.jpg'
    NewHeart.src = './icons/heart-white.png'
    NewHeartBlue.src = "./icons/heart-blue.png"
    NewHeartBlue2.src = "./icons/heart-blue.png"

    NewHeart2.src = './icons/heart-white.png'
    SecondPage.append(NewItem, NewItem2)//Добавляет пустой блок
    NewItem.prepend(NewTitle, NewSubtitle, NewPrice, NewTrolley, NewPhoto, NewHeart, NewHeartBlue,)
    NewItem2.prepend(NewTitle2, NewSubtitle2, NewPrice2, NewTrolley2, NewPhoto2, NewHeart2, NewHeartBlue2)
    addTrolley.onclick = () => { //Добавить товар
        trolleyFunc(calc, addTrolley, notebook.price, notebook.discount, countInp,pageSubtitle[1])


    }
    NewTrolley.onclick = () => { //HP
        let NewCalc = document.createElement("div")
        let NewInpMin = document.createElement("button")
        let NewInpPls = document.createElement("button")
        let NewInp = document.createElement("input")
        NewCalc.classList.add("calc")
        NewInpMin.classList.add("inp_minus")
        NewInpPls.classList.add("inp_plus")
        NewInp.classList.add("inp_number")
        NewCalc.style.marginTop = "70px"
        NewInpMin.style.marginLeft = "15px"
        NewInpPls.style.marginLeft = "5px"
        NewInp.style.marginLeft = "5px"
        NewInp.value = 0
        NewInpMin.innerHTML = "-"
        NewInpPls.innerHTML = "+"
        NewItem.prepend(NewCalc)
        NewCalc.prepend(NewInpMin, NewInp, NewInpPls)
        minus(notebook.HP.price, notebook.HP.discount, NewInpMin, NewInp, NewTrolley, NewCalc, pageSubtitle[1])
        plus(notebook.HP.price, notebook.HP.discount, NewInpPls, NewInp, pageSubtitle[1])
        trolleyFunc(NewCalc, NewTrolley, notebook.HP.price, notebook.HP.discount, NewInp,pageSubtitle[1])


    }
    NewTrolley2.onclick = () => {//Acer
        event.preventDefault()
        let NewCalc2 = document.createElement("div")
        let NewInpMin2 = document.createElement("button")
        let NewInpPls2 = document.createElement("button")
        let NewInp2 = document.createElement("input")
        NewCalc2.classList.add("calc")
        NewInpMin2.classList.add("inp_minus")
        NewInpPls2.classList.add("inp_plus")
        NewInp2.classList.add("inp_number")
        NewCalc2.style.marginTop = "70px"
        NewInpMin2.style.marginLeft = "15px"
        NewInpPls2.style.marginLeft = "5px"
        NewInp2.style.marginLeft = "5px"
        NewInp2.value = 0
        NewInpMin2.innerHTML = "-"
        NewInpPls2.innerHTML = "+"
        NewItem2.prepend(NewCalc2)
        NewCalc2.prepend(NewInpMin2, NewInp2, NewInpPls2)
        minus(notebook.Acer.price, notebook.Acer.discount, NewInpMin2, NewInp2, NewTrolley2, NewCalc2, pageSubtitle[1])
        plus(notebook.Acer.price, notebook.Acer.discount, NewInpPls2, NewInp2, pageSubtitle[1])
        trolleyFunc(NewCalc2, NewTrolley2, notebook.Acer.price, notebook.Acer.discount, NewInp2,pageSubtitle[1])
    }

    //функции для ноутбука
    minus(notebook.price, notebook.discount, countMinus, countInp, addTrolley, calc, pageSubtitle[1])
    plus(notebook.price, notebook.discount, countPlus, countInp, pageSubtitle[1])
    noteFunc()
    //для новых элементов
    hideHeart(NewHeartBlue)
    addLike(NewHeart, NewHeartBlue)
    removeLike(NewHeartBlue, NewHeartBlue)
    hideHeart(NewHeartBlue2)
    addLike(NewHeart2, NewHeartBlue2)
    removeLike(NewHeartBlue2, NewHeartBlue2)
}

itemCatalog[1].onclick = () => {
    notebookPage()
}


let fridgePage = () => { //Холодильники
    NewItem.classList.add("second_page_item")
    NewItem2.classList.add("second_page_item")
    NewTitle.classList.add("second_page_title")
    NewTitle2.classList.add("second_page_title")
    NewSubtitle.classList.add("page__subtitle")
    NewSubtitle2.classList.add("page__subtitle")
    NewPrice.classList.add("phone__price")
    NewPrice2.classList.add("phone__price")
    NewTrolley.classList.add("add__trolley")
    NewTrolley2.classList.add("add__trolley")
    NewPhoto.classList.add("second_page_photo")
    NewPhoto2.classList.add("second_page_photo")
    NewHeart.classList.add("heart_white_icon")
    NewHeartBlue.classList.add("heart_blue_icon")
    NewHeartBlue2.classList.add("heart_blue_icon")
    NewHeart2.classList.add("heart_white_icon")
    NewTitle.innerHTML = fridge.premier.name
    NewTitle2.innerHTML = fridge.shivaki.name
    NewSubtitle.innerHTML = "с гарантией"
    NewSubtitle2.innerHTML = "без гарантии"
    NewPrice.innerHTML = "$" + fridge.premier.price
    NewPrice2.innerHTML = "$" + fridge.shivaki.price
    NewTrolley.innerHTML = "Добавить в корзину"
    NewTrolley2.innerHTML = "Добавить в корзину"
    nootebookPg.innerHTML = "Холодильники"

    for (let item of PhonePrice) {
        item.innerHTML = "$" + fridge.price
    }
    for (let item of title1) {
        item.innerHTML = fridge.name
    }
    for (let item of SecondPgPhoto) {
        item.src = './images/201034-400400.jpg'
    }
    NewPhoto.src = './images/Premier.jpg' //Картинки
    NewPhoto2.src = './images/Shivaki.jpg'
    NewHeart.src = './icons/heart-white.png'
    NewHeartBlue.src = "./icons/heart-blue.png"
    NewHeartBlue2.src = "./icons/heart-blue.png"

    NewHeart2.src = './icons/heart-white.png'
    SecondPage.append(NewItem, NewItem2)//Добавляет пустой блок
    NewItem.prepend(NewTitle, NewSubtitle, NewPrice, NewTrolley, NewPhoto, NewHeart, NewHeartBlue,)
    NewItem2.prepend(NewTitle2, NewSubtitle2, NewPrice2, NewTrolley2, NewPhoto2, NewHeart2, NewHeartBlue2)
    addTrolley.onclick = () => { //Добавить товар
        trolleyFunc(calc, addTrolley, fridge.price, fridge.discount, countInp,pageSubtitle[2])




    }
    NewTrolley.onclick = () => { //premier
        let NewCalc = document.createElement("div")
        let NewInpMin = document.createElement("button")
        let NewInpPls = document.createElement("button")
        let NewInp = document.createElement("input")
        NewCalc.classList.add("calc")
        NewInpMin.classList.add("inp_minus")
        NewInpPls.classList.add("inp_plus")
        NewInp.classList.add("inp_number")
        NewCalc.style.marginTop = "70px"
        NewInpMin.style.marginLeft = "15px"
        NewInpPls.style.marginLeft = "5px"
        NewInp.style.marginLeft = "5px"
        NewInp.value = 0
        NewInpMin.innerHTML = "-"
        NewInpPls.innerHTML = "+"
        NewItem.prepend(NewCalc)
        NewCalc.prepend(NewInpMin, NewInp, NewInpPls)
        minus(fridge.premier.price, fridge.premier.discount, NewInpMin, NewInp, NewTrolley, NewCalc, pageSubtitle[2])
        plus(fridge.premier.price, fridge.premier.discount, NewInpPls, NewInp, pageSubtitle[2])
        trolleyFunc(NewCalc, NewTrolley, fridge.premier.price, fridge.premier.discount, NewInp,pageSubtitle[2])

    }
    NewTrolley2.onclick = () => {//Shivaki
        let NewCalc2 = document.createElement("div")
        let NewInpMin2 = document.createElement("button")
        let NewInpPls2 = document.createElement("button")
        let NewInp2 = document.createElement("input")
        NewCalc2.classList.add("calc")
        NewInpMin2.classList.add("inp_minus")
        NewInpPls2.classList.add("inp_plus")
        NewInp2.classList.add("inp_number")
        NewCalc2.style.marginTop = "70px"
        NewInpMin2.style.marginLeft = "15px"
        NewInpPls2.style.marginLeft = "5px"
        NewInp2.style.marginLeft = "5px"
        NewInp2.value = 0
        NewInpMin2.innerHTML = "-"
        NewInpPls2.innerHTML = "+"
        NewItem2.prepend(NewCalc2)
        NewCalc2.prepend(NewInpMin2, NewInp2, NewInpPls2)
        minus(fridge.shivaki.price, fridge.shivaki.discount, NewInpMin2, NewInp2, NewTrolley2, NewCalc2, pageSubtitle[2])
        plus(fridge.shivaki.price, fridge.shivaki.discount, NewInpPls2, NewInp2, pageSubtitle[2])
        trolleyFunc(NewCalc2, NewTrolley2, fridge.shivaki.price, fridge.shivaki.discount, NewInp2,pageSubtitle[2])


    }

    //функции для Холодильника
    minus(fridge.price, fridge.discount, countMinus, countInp, addTrolley, calc, pageSubtitle[2])
    plus(fridge.price, fridge.discount, countPlus, countInp, pageSubtitle[2])
    fridFunc()
    //для новых элементов
    hideHeart(NewHeartBlue)
    addLike(NewHeart, NewHeartBlue)
    removeLike(NewHeartBlue, NewHeartBlue)
    hideHeart(NewHeartBlue2)
    addLike(NewHeart2, NewHeartBlue2)
    removeLike(NewHeartBlue2, NewHeartBlue2)
}


itemCatalog[2].onclick = () => {//Холодильники 
    fridgePage()
}



let televisorPage = () => {
    NewItem.classList.add("second_page_item")
    NewItem2.classList.add("second_page_item")
    NewTitle.classList.add("second_page_title")
    NewTitle2.classList.add("second_page_title")
    NewSubtitle.classList.add("page__subtitle")
    NewSubtitle2.classList.add("page__subtitle")
    NewPrice.classList.add("phone__price")
    NewPrice2.classList.add("phone__price")
    NewTrolley.classList.add("add__trolley")
    NewTrolley2.classList.add("add__trolley")
    NewPhoto.classList.add("second_page_photo")
    NewPhoto2.classList.add("second_page_photo")
    NewHeart.classList.add("heart_white_icon")
    NewHeartBlue.classList.add("heart_blue_icon")
    NewHeartBlue2.classList.add("heart_blue_icon")
    NewHeart2.classList.add("heart_white_icon")
    NewTitle.innerHTML = televisor.Sony.name
    NewTitle2.innerHTML = televisor.Lg.name
    NewSubtitle.innerHTML = "с гарантией"
    NewSubtitle2.innerHTML = "без гарантии"
    NewPrice.innerHTML = "$" + televisor.Sony.price
    NewPrice2.innerHTML = "$" + televisor.Lg.price
    NewTrolley.innerHTML = "Добавить в корзину"
    NewTrolley2.innerHTML = "Добавить в корзину"
    nootebookPg.innerHTML = "Телевизоры"

    for (let item of PhonePrice) {
        item.innerHTML = "$" + televisor.price
    }
    for (let item of title1) {
        item.innerHTML = televisor.name
    }
    for (let item of SecondPgPhoto) {
        item.src = './images/Televisor.jpg'
    }
    NewPhoto.src = './images/Sony-televisor.jpg' //Картинки
    NewPhoto2.src = './images/LG-televisor.jpg'
    NewHeart.src = './icons/heart-white.png'
    NewHeartBlue.src = "./icons/heart-blue.png"
    NewHeartBlue2.src = "./icons/heart-blue.png"

    NewHeart2.src = './icons/heart-white.png'
    SecondPage.append(NewItem, NewItem2)//Добавляет пустой блок
    NewItem.prepend(NewTitle, NewSubtitle, NewPrice, NewTrolley, NewPhoto, NewHeart, NewHeartBlue,)
    NewItem2.prepend(NewTitle2, NewSubtitle2, NewPrice2, NewTrolley2, NewPhoto2, NewHeart2, NewHeartBlue2)
    addTrolley.onclick = () => { //Добавить товар
        trolleyFunc(calc, addTrolley, televisor.price, televisor.discount, countInp,pageSubtitle[3])

    }
    NewTrolley.onclick = () => { //Sony
        let NewCalc = document.createElement("div")
        let NewInpMin = document.createElement("button")
        let NewInpPls = document.createElement("button")
        let NewInp = document.createElement("input")
        NewCalc.classList.add("calc")
        NewInpMin.classList.add("inp_minus")
        NewInpPls.classList.add("inp_plus")
        NewInp.classList.add("inp_number")
        NewCalc.style.marginTop = "70px"
        NewInpMin.style.marginLeft = "15px"
        NewInpPls.style.marginLeft = "5px"
        NewInp.style.marginLeft = "5px"
        NewInp.value = 0
        NewInpMin.innerHTML = "-"
        NewInpPls.innerHTML = "+"
        NewItem.prepend(NewCalc)
        NewCalc.prepend(NewInpMin, NewInp, NewInpPls)
        minus(televisor.Sony.price, televisor.Sony.discount, NewInpMin, NewInp, NewTrolley, NewCalc, pageSubtitle[3])
        plus(televisor.Sony.price, televisor.Sony.discount, NewInpPls, NewInp, pageSubtitle[3])
        trolleyFunc(NewCalc, NewTrolley, televisor.Sony.price, televisor.Sony.discount, NewInp,pageSubtitle[3])

    }
    NewTrolley2.onclick = () => {//lG
        let NewCalc2 = document.createElement("div")
        let NewInpMin2 = document.createElement("button")
        let NewInpPls2 = document.createElement("button")
        let NewInp2 = document.createElement("input")
        NewCalc2.classList.add("calc")
        NewInpMin2.classList.add("inp_minus")
        NewInpPls2.classList.add("inp_plus")
        NewInp2.classList.add("inp_number")
        NewCalc2.style.marginTop = "70px"
        NewInpMin2.style.marginLeft = "15px"
        NewInpPls2.style.marginLeft = "5px"
        NewInp2.style.marginLeft = "5px"
        NewInp2.value = 0
        NewInpMin2.innerHTML = "-"
        NewInpPls2.innerHTML = "+"
        NewItem2.prepend(NewCalc2)
        NewCalc2.prepend(NewInpMin2, NewInp2, NewInpPls2)
        minus(televisor.Lg.price, televisor.Lg.discount, NewInpMin2, NewInp2, NewTrolley2, NewCalc2, pageSubtitle[3])
        plus(televisor.Lg.price, televisor.Lg.discount, NewInpPls2, NewInp2, pageSubtitle[3])
        trolleyFunc(NewCalc2, NewTrolley2, televisor.Lg.price, televisor.Lg.discount, NewInp2,pageSubtitle[3])


    }

    //функции для Телевизоров
    minus(televisor.price, televisor.discount, countMinus, countInp, addTrolley, calc, pageSubtitle[3])
    plus(televisor.price, televisor.discount, countPlus, countInp, pageSubtitle[3])
    teleFunc()
    //для новых элементов
    hideHeart(NewHeartBlue)
    addLike(NewHeart, NewHeartBlue)
    removeLike(NewHeartBlue, NewHeartBlue)
    hideHeart(NewHeartBlue2)
    addLike(NewHeart2, NewHeartBlue2)
    removeLike(NewHeartBlue2, NewHeartBlue2)
}

itemCatalog[3].onclick = () => { //Телевизоры
    televisorPage()
}


let videocardPage = () => {
    NewItem.classList.add("second_page_item")
    NewItem2.classList.add("second_page_item")
    NewTitle.classList.add("second_page_title")
    NewTitle2.classList.add("second_page_title")
    NewSubtitle.classList.add("page__subtitle")
    NewSubtitle2.classList.add("page__subtitle")
    NewPrice.classList.add("phone__price")
    NewPrice2.classList.add("phone__price")
    NewTrolley.classList.add("add__trolley")
    NewTrolley2.classList.add("add__trolley")
    NewPhoto.classList.add("second_page_photo")
    NewPhoto2.classList.add("second_page_photo")
    NewHeart.classList.add("heart_white_icon")
    NewHeartBlue.classList.add("heart_blue_icon")
    NewHeartBlue2.classList.add("heart_blue_icon")
    NewHeart2.classList.add("heart_white_icon")
    NewTitle.innerHTML = videocard.GTX1050TI.name
    NewTitle2.innerHTML = videocard.RTX3070.name
    NewSubtitle.innerHTML = "с гарантией"
    NewSubtitle2.innerHTML = "без гарантии"
    NewPrice.innerHTML = "$" + videocard.GTX1050TI.price
    NewPrice2.innerHTML = "$" + videocard.RTX3070.price
    NewTrolley.innerHTML = "Добавить в корзину"
    NewTrolley2.innerHTML = "Добавить в корзину"
    nootebookPg.innerHTML = "Телевизоры"

    for (let item of PhonePrice) {
        item.innerHTML = "$" + videocard.price
    }
    for (let item of title1) {
        item.innerHTML = videocard.name
    }
    for (let item of SecondPgPhoto) {
        item.src = './images/videocard.jpg'
    }
    NewPhoto.src = './images/GTX1050TI.jpg' //Картинки
    NewPhoto2.src = './images/RTX3070.jpg'
    NewHeart.src = './icons/heart-white.png'
    NewHeartBlue.src = "./icons/heart-blue.png"
    NewHeartBlue2.src = "./icons/heart-blue.png"

    NewHeart2.src = './icons/heart-white.png'
    SecondPage.append(NewItem, NewItem2)//Добавляет пустой блок
    NewItem.prepend(NewTitle, NewSubtitle, NewPrice, NewTrolley, NewPhoto, NewHeart, NewHeartBlue,)
    NewItem2.prepend(NewTitle2, NewSubtitle2, NewPrice2, NewTrolley2, NewPhoto2, NewHeart2, NewHeartBlue2)
    addTrolley.onclick = () => { //Добавить товар
        trolleyFunc(calc, addTrolley, videocard.price, videocard.discount, countInp,pageSubtitle[4])


    }
    NewTrolley.onclick = () => { //GTX-1050 TI 
        let NewCalc = document.createElement("div")
        let NewInpMin = document.createElement("button")
        let NewInpPls = document.createElement("button")
        let NewInp = document.createElement("input")
        NewCalc.classList.add("calc")
        NewInpMin.classList.add("inp_minus")
        NewInpPls.classList.add("inp_plus")
        NewInp.classList.add("inp_number")
        NewCalc.style.marginTop = "70px"
        NewInpMin.style.marginLeft = "15px"
        NewInpPls.style.marginLeft = "5px"
        NewInp.style.marginLeft = "5px"
        NewInp.value = 0
        NewInpMin.innerHTML = "-"
        NewInpPls.innerHTML = "+"
        NewItem.prepend(NewCalc)
        NewCalc.prepend(NewInpMin, NewInp, NewInpPls)
        minus(videocard.GTX1050TI.price, videocard.GTX1050TI.discount, NewInpMin, NewInp, NewTrolley, NewCalc, pageSubtitle[4])
        plus(videocard.GTX1050TI.price, videocard.GTX1050TI.discount, NewInpPls, NewInp, pageSubtitle[4])
        trolleyFunc(NewCalc, NewTrolley, videocard.GTX1050TI.price, videocard.GTX1050TI.discount, NewInp,pageSubtitle[4])

    }
    NewTrolley2.onclick = () => {//RTX-3070 
        let NewCalc2 = document.createElement("div")
        let NewInpMin2 = document.createElement("button")
        let NewInpPls2 = document.createElement("button")
        let NewInp2 = document.createElement("input")
        NewCalc2.classList.add("calc")
        NewInpMin2.classList.add("inp_minus")
        NewInpPls2.classList.add("inp_plus")
        NewInp2.classList.add("inp_number")
        NewCalc2.style.marginTop = "70px"
        NewInpMin2.style.marginLeft = "15px"
        NewInpPls2.style.marginLeft = "5px"
        NewInp2.style.marginLeft = "5px"
        NewInp2.value = 0
        NewInpMin2.innerHTML = "-"
        NewInpPls2.innerHTML = "+"
        NewItem2.prepend(NewCalc2)
        NewCalc2.prepend(NewInpMin2, NewInp2, NewInpPls2)
        minus(videocard.RTX3070.price, videocard.RTX3070.discount, NewInpMin2, NewInp2, NewTrolley2, NewCalc2, pageSubtitle[4])
        plus(videocard.RTX3070.price, videocard.RTX3070.discount, NewInpPls2, NewInp2, pageSubtitle[4])
        trolleyFunc(NewCalc2, NewTrolley2, videocard.RTX3070.price, videocard.RTX3070.discount, NewInp2,pageSubtitle[4])


    }
    //функции для Видокарты
    minus(televisor.price, televisor.discount, countMinus, countInp, addTrolley, calc, pageSubtitle[4])
    plus(televisor.price, televisor.discount, countPlus, countInp, pageSubtitle[4])
    videoFunc()
    //для новых элементов
    hideHeart(NewHeartBlue)
    addLike(NewHeart, NewHeartBlue)
    removeLike(NewHeartBlue, NewHeartBlue)
    hideHeart(NewHeartBlue2)
    addLike(NewHeart2, NewHeartBlue2)
    removeLike(NewHeartBlue2, NewHeartBlue2)
}

itemCatalog[4].onclick = () => {//Видеокарты
    videocardPage()
}


let categoryItem = document.querySelectorAll(".category__item")//элементы с лева 
//поиск 
let priceInp = document.querySelectorAll(".price__item")
let donebtn = document.querySelector(".done")
smartFunc = () =>{
    donebtn.onclick = () => {
        event.preventDefault()
        if (priceInp[0].value >= smartphone.iphone10.price) {//700$
            NewItem.classList.add("hide")
            SecondPgItm.classList.add("hide")
            if (priceInp[1].value >= smartphone.iphone11.price) {//800$
                NewItem.classList.remove("hide")
                if (priceInp[1].value >= smartphone.price) {//1299$
                    SecondPgItm.classList.remove("hide")
                }
            }
    
        } if (priceInp[0].value >= smartphone.iphone11.price) {
            SecondPgItm.classList.add("hide")
            NewItem2.classList.add("hide")
            NewItem.classList.remove("hide")
    
            if (priceInp[1].value >= smartphone.price) {
                NewItem2.classList.add("hide")
                NewItem.classList.remove("hide")
                SecondPgItm.classList.remove("hide")
                alert("ss")
    
            } if (priceInp[0].value >= smartphone.price){
                NewItem2.classList.remove("hide")
                NewItem.classList.remove("hide")
                SecondPgItm.classList.remove("hide")
                
            }
              
    
        }
  
    }
    NewItem2.classList.remove("hide")
    NewItem.classList.remove("hide")
    SecondPgItm.classList.remove("hide")

}



noteFunc = () =>{
    donebtn.onclick = () => {
        event.preventDefault()
        if (priceInp[0].value >= notebook.price) {//800$
            NewItem.classList.add("hide")
            NewItem2.classList.add("hide")

            if (priceInp[1].value >= notebook.HP.price) {//
                NewItem.classList.remove("hide")

                if (priceInp[1].value >= notebook.Acer.price) {
                    NewItem2.classList.remove("hide")
                }
            }

        } if (priceInp[0].value >= notebook.HP.price) {
            NewItem.classList.remove("hide")
            NewItem2.classList.remove("hide")
            SecondPgItm.classList.add("hide")

        }

    }
    NewItem2.classList.remove("hide")
    NewItem.classList.remove("hide")
    SecondPgItm.classList.remove("hide")


}


fridFunc = () =>{
    donebtn.onclick = () => {
        event.preventDefault()
        if (priceInp[0].value >= fridge.premier.price) {
            SecondPgItm.classList.add("hide")
            NewItem2.classList.add("hide")

        } if (priceInp[1].value >= fridge.shivaki.price) {
            NewItem2.classList.remove("hide")

        } if (priceInp[1].value >= fridge.price) {
            NewItem2.classList.remove("hide")
            NewItem.classList.remove("hide")
            SecondPgItm.classList.remove("hide")

        } if (priceInp[0].value >= fridge.shivaki.price) {
            NewItem.classList.add("hide")
            NewItem2.classList.remove("hide")


        } if (priceInp[0].value >= fridge.price) {
            NewItem2.classList.remove("hide")
            NewItem.classList.remove("hide")
            SecondPgItm.classList.remove("hide")

        }
    }
    NewItem2.classList.remove("hide")
    NewItem.classList.remove("hide")
    SecondPgItm.classList.remove("hide")

}

teleFunc = () =>{//функция для телефона 
    donebtn.onclick = () => {
        event.preventDefault()
        if (priceInp[0].value >= televisor.Sony.price) {
            SecondPgItm.classList.add("hide")
            NewItem2.classList.add("hide")

            if (priceInp[1].value >= televisor.Lg.price) {
                SecondPgItm.classList.remove("hide")
                NewItem2.classList.remove("hide")

            } if (priceInp[0].value >= televisor.Lg.price) {
                NewItem.classList.add("hide")
                SecondPgItm.classList.remove("hide")
                NewItem2.classList.remove("hide")


            }
        }
    }
    NewItem2.classList.remove("hide")
    NewItem.classList.remove("hide")
    SecondPgItm.classList.remove("hide")

} 

videoFunc = () =>{//функция для видеокарты 
    donebtn.onclick = () => {
        event.preventDefault()
        if (priceInp[0].value >= videocard.GTX1050TI.price) {
            SecondPgItm.classList.add("hide")
            NewItem2.classList.add("hide")

            if (priceInp[1].value >= videocard.price) {
                SecondPgItm.classList.remove("hide")
                if (priceInp[1].value >= videocard.RTX3070.price) {
                    NewItem2.classList.remove("hide")
                    NewItem.classList.remove("hide")
                    SecondPgItm.classList.remove("hide")

                }
            }
        }
    }
    NewItem2.classList.remove("hide")
    NewItem.classList.remove("hide")
    SecondPgItm.classList.remove("hide")

}






categoryItem[0].onclick = () => { //Сматфоны левая
    event.preventDefault()
    smartphonePage()
    clearInp()
    smartFunc()
}
categoryItem[1].onclick = () => { //Ноутбуки левая
    event.preventDefault()
    notebookPage()
    clearInp()
    noteFunc()



}
categoryItem[2].onclick = () => { //Холодильники левая
    event.preventDefault()
    fridgePage()
    clearInp()
    fridFunc()
 

}
categoryItem[3].onclick = () => { //Телевизоры левая
    event.preventDefault()
    televisorPage()
    clearInp()
    teleFunc()

}
categoryItem[4].onclick = () => { //Видеокарты левая
    event.preventDefault()
    videocardPage()
    clearInp()
    videoFunc()



}
let clearInp = () => {//Очистка инпутов 
    priceInp[0].value = ""
    priceInp[1].value = ""
}


// window.onload = () => {
//     let input = document.querySelector('.search__item');

//     input.oninput = function () {
//         let value = this.value.trim();
//         // let list = document.querySelector('.second_page_item');
//         if(input.innerText.search(value)==smartphone.name){
//             SecondPgItm.classList.add("hide")
//             NewItem.classList.add("hide")

//         }
//     }
// }

//         value ? list.forEach(elem => {
//             elem.innerText.search(value) == -1 ? elem.classList.add('hide') : elem.classList.remove('hide');
//         }) : list.forEach(elem => {
//             elem.classList.remove('hide');
//         });
//     };
// };