axios.get("http://localhost:3001/arr")
    .then(res => {
        reload(res.data)
    })

axios.get("http://localhost:3001/info")
    .then(res => {
        reload_two(res.data)
    })

axios.get("http://localhost:3001/wrap")
    .then(res => {
        reload_three(res.data)
    })


const reload = (arr) => {
    for (let elem of arr) {
        let item = document.createElement('div')

        let item_img = document.createElement('div')
        let item_img_like = document.createElement('div')

        let item_text = document.createElement('div')
        let item_text_left = document.createElement('div')
        let item_text_right = document.createElement('div')

        item.classList.add('item')

        item_img.classList.add('item_img')
        item_img.style.backgroundImage = `url("${elem.img}")`
        item_img_like.classList.add('item_img_like')

        item_text.classList.add('item_text')
        item_text_left.classList.add('item_text_left')
        item_text_left.innerHTML = elem.title
        item_text_right.classList.add('item_text_right')
        item_text_right.innerHTML = elem.prise

        box.append(item)
        item_img.append(item_img_like)
        item_text.append(item_text_left, item_text_right)
        item.append(item_img, item_text)


        let item_two = document.createElement('div')

        let item_img_two = document.createElement('div')
        let item_img_like_two = document.createElement('div')
        let item_sale = document.createElement('div')

        let item_text_two = document.createElement('div')
        let item_text_left_two = document.createElement('div')
        let item_text_right_two = document.createElement('div')

        let item_text_right_top = document.createElement('div')
        let item_text_right_bottom = document.createElement('div')



        item_two.classList.add('item_two')

        item_img_two.classList.add('item_img_two')
        item_img_two.style.backgroundImage = `url("${elem.img}")`
        item_img_like_two.classList.add('item_img_like_two')
        item_sale.classList.add('item_sale')
        item_sale.innerHTML = 'SALE'


        item_text_two.classList.add('item_text_two')
        item_text_left_two.classList.add('item_text_left_two')
        item_text_left_two.innerHTML = elem.title
        item_text_right_two.classList.add('item_text_right_two')

        item_text_right_top.classList.add('item_text_right_top')
        item_text_right_bottom.classList.add('item_text_right_bottom')
        item_text_right_top.innerHTML = elem.discount
        item_text_right_bottom.innerHTML = elem.prise

        box_two.append(item_two)
        item_img_two.append(item_sale, item_img_like_two)
        item_text_right_two.append(item_text_right_top, item_text_right_bottom)
        item_text_two.append(item_text_left_two, item_text_right_two)
        item_two.append(item_img_two, item_text_two)

        item_img_like_two.onclick = () => {
            item_img_like_two.classList.toggle('item_img_like_active_two')
        }


        item_img_like.onclick = () => {
            item_img_like.classList.toggle('item_img_like_active')
        }
    }
}

const reload_two = (arr) => {
    for (let item of arr) {
        let block = document.createElement('div')
    
        let block_image = document.createElement('div')
        let block_title = document.createElement('div')
        let block_info = document.createElement('div')
        let block_date = document.createElement('div')
    
        block.classList.add('block')
    
        block_image.classList.add('block_image')
        block_image.style.backgroundImage = `url("${item.img}")`
        block_title.classList.add('block_title')
        block_title.innerHTML = item.name
        block_info.classList.add('block_info')
        block_info.innerHTML = item.description
        block_date.classList.add('block_date')
        block_date.innerHTML = item.date
    
    
        block.append(block_image, block_title, block_info, block_date)
        box_three.append(block)
    }
}

const reload_three = (arr) => {
    for (let item of arr) {
        let wrap = document.createElement('div')
    
        let wrap_img = document.createElement('div')
        let wrap_title = document.createElement('div')
        let wrap_description = document.createElement('div')
        let wrap_more = document.createElement('div')
    
        wrap.classList.add('wrap')
    
        wrap_img.classList.add('wrap_img')
    
        wrap_title.classList.add('wrap_title')
        wrap_title.innerHTML = item.title
    
        wrap_description.classList.add('wrap_description')
        wrap_description.innerHTML = item.description
    
        wrap_more.classList.add('wrap_more')
        wrap_more.innerHTML = item.more
    
    
        wrap.append(wrap_img, wrap_title, wrap_description, wrap_more)
        wrapper.append(wrap)
    }
}


let box = document.querySelector('.box')
let box_two = document.querySelector('.box_two')
let box_three = document.querySelector('.box_three')
let wrapper = document.querySelector('.wrapper')

