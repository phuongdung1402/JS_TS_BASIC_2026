class ProductStore {
    #product = []
    addProduct(product) {
        const { id, name, category, price, inStock } = product

        const idDuplicate = this.#product.find((item) => item.id === id)
        if (idDuplicate) {
            return { success: false, message: "No push... Trùng ID" }
        }

        if (name.trim() === '') {
            return { success: false, message: "No push... Tên trống" }
        }

        if (category.trim() === '') {
            return { success: false, message: 'No push... Category trống' }
        }

        if (price <= 0) {
            return { success: false, message: 'No push... Price phải lớn hơn 0' }
        }

        if (typeof inStock !== 'boolean') {
            return { success: false, message: 'No push... inStock phải là boolean' }
        }


        this.#product.push({
            id, name, category, price, inStock
        })
        return {
            success: true,
            message: 'Thêm sản phẩm thành công'
        }
    }

    findByName(keyword) {
        const keywordNormalized = keyword.trim().toLowerCase()
        return this.#product.find((item) => item.name.trim().toLowerCase().includes(keywordNormalized)) || null
    }

    filterByCategory(category) {
        const categoryNormalized = category.trim().toLowerCase()
        return this.#product.filter((item) => item.category.trim().toLowerCase() === categoryNormalized)
    }

    getAvailableProducts() {
        const availableList = this.#product.filter((item) => item.inStock === true)
        return availableList
    }

    getTotalInventoryValue() {
        // let sum = 0;
        // const availableProduct = this.getAvailableProducts()
        // if (availableProduct) {
        //     const totalPrice = availableProduct.map((item) => {
        //         sum += item.price
        //     })
        //     return sum
        // }
        // return 0

        return this.getAvailableProducts().reduce((sum, item) => sum+item.price, 0)
    }

    getProduct() {
        return this.#product
    }
}

class DiscountProductStore extends ProductStore {
    discountRate = 0

    constructor(discountRate) {
        super()
        this.discountRate = discountRate
    }

    getTotalInventoryValue() {
        const original = super.getTotalInventoryValue()
        return original - original * this.discountRate
    }

    getDiscountInfo() {
        const originalTotal = super.getTotalInventoryValue();
        const discountAmout = originalTotal * this.discountRate
        const finalTotal = originalTotal - discountAmout
        return {
            originalTotal,
            discountRate : this.discountRate,
            discountAmout,
            finalTotal
        }
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
console.log(store.findByName("iphone"))
console.log(store.filterByCategory("  PHONE  "));
console.log(store.getAvailableProducts());
console.log(store.getDiscountInfo(0.1));