const elList = document.querySelector('.list')




for (let item of pokemons) {
    
    const ListBox = document.createElement('li')
    const newImage = document.createElement('img')
    const newDownCart = document.createElement('div')
     
    const newTitle = document.createElement('p')
    const cartList = document.createElement('ul')
    const cartItem = document.createElement('li')
    const newBtnBookmark = document.createElement('button')



    ListBox.setAttribute('class', ' rounded-md')
    newImage.setAttribute('src', item.img)
    newImage.setAttribute('class', 'px-[75px] pt-7.5 pb-17')

    
    newTitle.setAttribute('class', 'mb-4 text-white text-xl')
    cartList.setAttribute('class', 'list-disc pl-8')
    cartItem.setAttribute('class', 'text-white')
    newBtnBookmark.setAttribute('class', 'bg-red-500 text-white px-3 py-1.5 rounded-md text-base mt-2 hover:bg-red-600 transition')




    newTitle.textContent = item.title
    cartItem.textContent = item.genres
    newBtnBookmark.textContent = "Bookmark"





    elList.append(ListBox)
    ListBox.append(newImage, newDownCart)
    newDownCart.append(newTitle, cartList, newBtnBookmark)
    cartList.append(cartItem)
}