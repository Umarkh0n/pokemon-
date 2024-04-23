const elList = document.querySelector('.list')




for (let item of pokemons) {
    
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
     
    const newTitle = document.createElement('p')
    const cartList = document.createElement('ul')
    const cartItem = document.createElement('li')
    const newBtnBookmark = document.createElement('button')



    ListBox.setAttribute('class', ' border-2 border-black bg-white rounded-xl')
    newImage.setAttribute('src', item.img)
    newImage.setAttribute('class', 'px-[75px] pt-7.5 pb-17')
    newSpan.setAttribute('class', 'block w-full border border-black')
    newDownCart.setAttribute('class', 'flex justify-between items-start px-7.5 pt-5 pb-[32px]  border-t-stone-950')
    newDownCartBottom.setAttribute ('class', 'flex items-center gap-7.5')
    newDownCartLike.setAttribute ('src', './image/cart-heart-logo.svg')
    newDownCartLike.setAttribute ('class', ' hover:bg-[#FFD845] transition active:opacity-50 rounded-full p-1 ')
    newDownCartName.setAttribute ('class', 'text-2xl font-bold')
    newDownCartType.setAttribute ('class', 'text-xl font-semibold')
    newDownCartWeight.setAttribute ('class', 'text-2xl font-bold')
    newDownCartHeight.setAttribute ('class', 'text-2xl font-bold')
    

    


    
    newDownCartName.textContent = item.name
    newDownCartType.textContent = item.type
    newDownCartWeight.textContent =  item.weight 
    newDownCartHeight.textContent = item.height





    elList.append(ListBox)
    ListBox.append(newImage, newSpan, newDownCart)
    newDownCart.append(newDownCartWords, newDownCartImg )
    newDownCartWords.append(newDownCartName, newDownCartType, newDownCartBottom)
    newDownCartBottom.append(newDownCartWeight, newDownCartHeight)
    newDownCartImg.append(newDownCartBtn)
    newDownCartBtn.append(newDownCartLike)

}