class ProductStore {
    #product = []


    addProduct(product) {
        const { id, name, category, price, inStock } = product

        const idDuplicate = this.#product.find((item) => item.id === id)
        if (idDuplicate) {
            return { sucess: false, message: "Trùng ID" }
        }

        if(name.trim() === '') {
            return {sucess: false, message : "Tên trống"}
        }

        if(category.trim() === '') {
            return { sucess: false, message: 'Category trống'}
        }

        if(price < 0 || price === 0) {
            return { sucess : false, message : 'Price phải lớn hơn 0'}
        }

        if(typeof inStock !== 'boolean') {
            return {sucess: false, message : 'inStock phải là boolean'}
        }

        
        this.#product.push({
            id, name, category, price, inStock
        })
        return {
            sucess: true,
            message: 'Thêm sản phẩm thành công'
        }
    }

    getProduct() {
        return this.#product
    }
}

const demo = new ProductStore()
const productMilk = {id: 1, name: 'TH True Milk', category: 'Milk', price: 123, inStock: true}
console.log(demo.addProduct(productMilk))

const productCake = {id: 2, name: 'Tiramisu', category: 'Cake', price: 456, inStock: false}
console.log(demo.addProduct(productCake))

const productDrink = {id: 1, name: 'Smothies', category: 'Drink', price: 123, inStock: true}
console.log(demo.addProduct(productDrink))
console.log(demo.getProduct())