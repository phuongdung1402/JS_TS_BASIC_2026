class ProductStore {
    #product = []


    addProduct(product) {
        const { id, name, category, price, inStock } = product

        const idDuplicate = this.#product.find((item) => item.id === id)
        if (idDuplicate) {
            return { sucess: false, message: "No push... Trùng ID" }
        }

        if (name.trim() === '') {
            return { sucess: false, message: "No push... Tên trống" }
        }

        if (category.trim() === '') {
            return { sucess: false, message: 'No push... Category trống' }
        }

        if (price < 0 || price === 0) {
            return { sucess: false, message: 'No push... Price phải lớn hơn 0' }
        }

        if (typeof inStock !== 'boolean') {
            return { sucess: false, message: 'No push... inStock phải là boolean' }
        }


        this.#product.push({
            id, name, category, price, inStock
        })
        return {
            sucess: true,
            message: 'Thêm sản phẩm thành công'
        }
    }

    findByName(keyword) {
        const keywordNormalize = keyword.trim()
        const result = this.#product.find((item) => item.name === keywordNormalize)
        if (result) {
            return result
        } else {
            return 0
        }
    }

    filterByCategory(category) {
        const categoryList = this.#product.filter((item) => item.category === category.trim())
        return categoryList
    }

    getAvailableProducts() {
        const availableList = this.#product.filter((item) => item.inStock === true)
        return availableList
    }

    getTotalInventoryValue() {
        let sum = 0;
        const availableProduct = this.getAvailableProducts()
        if (availableProduct) {
            const totalPrice = availableProduct.map((item) => {
                sum += item.price
            })
            return sum
        }
        return 0
    }

    getProduct() {
        return this.#product
    }
}

class DiscountProductStore extends ProductStore {
    // discountRate
    constructor(discountRate) {
        super()
        discountRate = discountRate
    }

    getTotalInventoryValue() {
        //super()
        const firstPrice = super.getTotalInventoryValue()
        const discountAmount = (firstPrice * this.discountPrice) / 100
        const finalTotal = firstPrice - discountAmount
        return finalTotal
    }

    getDiscountInfo() {
        console.log(this.getTotalInventoryValue())
        console.log(this.discountRate)
        console.log(this.discountAmount)
        console.log(this.finalTotal)
    }


}


const store = new DiscountProductStore(0.1)

store.addProduct({
    id: "p01",
    name: "  iPhone 15 Pro  ",
    category: "phone",
    price: 29990000,
    inStock: true,
});

store.addProduct({
    id: "p02",
    name: "MacBook Air",
    category: "laptop",
    price: 24990000,
    inStock: true,
});

store.addProduct({
    id: "p03",
    name: "AirPods Pro",
    category: "audio",
    price: 5990000,
    inStock: false,
});

store.addProduct({
    id: "p01",
    name: "Duplicate",
    category: "phone",
    price: 1000,
    inStock: true,
});

//console.log(store.getProduct())
//console.log(store.findByName("MacBook Air  "))
//console.log(store.filterByCategory(" phone "));
//console.log(store.getAvailableProducts());
console.log(store.getDiscountInfo());