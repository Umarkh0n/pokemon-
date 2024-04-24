const elMain = document.querySelector('.main')
const elList = document.querySelector('.list')
const elModal = document.querySelector('.modal')
const elHeaderLikeIcon = document.querySelector('.header-like-icon')

createCards(pokemons, elList)

function createCards(data, parent) {
    for (let item of data) {
        // create element
        const ListBox = document.createElement('li')
        const newImage = document.createElement('img')
        const newSpan = document.createElement('span')
        const newDownCart = document.createElement('div')
        const newDownCartWords = document.createElement('div')
        const newDownCartName = document.createElement('h3')
        const newDownCartType = document.createElement('p')
        const newDownCartBottom = document.createElement('div')
        const newDownCartWeight = document.createElement('p')
        const newDownCartHeight = document.createElement('p')
        const newDownCartImg = document.createElement('div')
        const newDownCartBtn = document.createElement('button')
        const newDownCartLike = document.createElement('img')
        // /create element

        // setattribute
        ListBox.setAttribute('class', ' border-2 border-black bg-white rounded-xl md:mt-0 mt-4 ')
        newImage.setAttribute('src', item.img)
        newImage.setAttribute('class', 'px-[75px] pt-7.5 pb-17')
        newSpan.setAttribute('class', 'block w-full border border-black')
        newDownCart.setAttribute('class', 'flex justify-between items-start px-7.5 pt-5 pb-[32px]  border-t-stone-950')
        newDownCartBottom.setAttribute('class', 'flex items-center gap-7.5')
        newDownCartLike.setAttribute('src', './image/cart-heart-logo.svg')
        newDownCartLike.setAttribute('class', ' hover:bg-yellow transition active:opacity-50 rounded-full p-2 ')
        newDownCartName.setAttribute('class', 'text-2xl font-bold')
        newDownCartType.setAttribute('class', 'text-xl font-semibold')
        newDownCartWeight.setAttribute('class', 'text-2xl font-bold')
        newDownCartHeight.setAttribute('class', 'text-2xl font-bold')
        // /setattribute

        // textcontent
        newDownCartName.textContent = item.name
        newDownCartType.textContent = item.type
        newDownCartWeight.textContent = item.weight
        newDownCartHeight.textContent = item.height
        // /textcontent

        // append
        ListBox.append(newImage, newSpan, newDownCart)
        newDownCart.append(newDownCartWords, newDownCartImg)
        newDownCartWords.append(newDownCartName, newDownCartType, newDownCartBottom)
        newDownCartBottom.append(newDownCartWeight, newDownCartHeight)
        newDownCartImg.append(newDownCartBtn)
        newDownCartBtn.append(newDownCartLike)
        parent.append(ListBox)
        // /append

        newDownCartBtn.addEventListener("click", () => {

            const oldLikedData = JSON.parse(localStorage.getItem("likedData")) || [];

            localStorage.setItem("likedData", JSON.stringify([
                ...oldLikedData,
                item
            ]))

            newDownCartLike.setAttribute('class', 'bg-red-500 rounded-full p-2')

        })
    }
}



const newModalBox = document.createElement('div')
const newModalXback = document.createElement('button')
const newModalList = document.createElement('ul')
const newModalItem = document.createElement('li')


elModal.setAttribute('class', ' bg-red-200 top-0 absolute p-3 bg-yellow  w-full h-screen')
newModalBox.setAttribute('class', 'flex items-start justify-between')
elModal.style.visibility = 'hidden'


newModalXback.textContent = '✖'


elModal.append(newModalBox)
newModalBox.append(newModalList, newModalXback)
newModalList.append(newModalItem)



elHeaderLikeIcon.addEventListener('click', (e) => {
    const likedData = JSON.parse(localStorage.getItem("likedData")) || [];

    createCards(likedData, elModal)
    elHeaderLikeIcon.setAttribute('class', 'bg-red-500 rounded-full ')
    elModal.style.visibility = 'visible'
    elMain.setAttribute('class', 'hidden')

})

newModalXback.addEventListener('click', () => {
    elHeaderLikeIcon.setAttribute('class', 'bg-transparent  ')
    elModal.style.visibility = 'hidden'
    elMain.setAttribute('class', 'visible')
})