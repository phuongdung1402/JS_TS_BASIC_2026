// class ProductStore {
//     #product = []
//     addProduct(product) {
//         const { id, name, category, price, inStock } = product

//         const idDuplicate = this.#product.find((item) => item.id === id)
//         if (idDuplicate) {
//             return { success: false, message: "No push... Trùng ID" }
//         }

//         if (name.trim() === '') {
//             return { success: false, message: "No push... Tên trống" }
//         }

//         if (category.trim() === '') {
//             return { success: false, message: 'No push... Category trống' }
//         }

//         if (price <= 0) {
//             return { success: false, message: 'No push... Price phải lớn hơn 0' }
//         }

//         if (typeof inStock !== 'boolean') {
//             return { success: false, message: 'No push... inStock phải là boolean' }
//         }


//         this.#product.push({
//             id, name, category, price, inStock
//         })
//         return {
//             success: true,
//             message: 'Thêm sản phẩm thành công'
//         }
//     }

//     findByName(keyword) {
//         const keywordNormalized = keyword.trim().toLowerCase()
//         return this.#product.find((item) => item.name.trim().toLowerCase().includes(keywordNormalized)) || null
//     }

//     filterByCategory(category) {
//         const categoryNormalized = category.trim().toLowerCase()
//         return this.#product.filter((item) => item.category.trim().toLowerCase() === categoryNormalized)
//     }

//     getAvailableProducts() {
//         const availableList = this.#product.filter((item) => item.inStock === true)
//         return availableList
//     }

//     getTotalInventoryValue() {
//         // let sum = 0;
//         // const availableProduct = this.getAvailableProducts()
//         // if (availableProduct) {
//         //     const totalPrice = availableProduct.map((item) => {
//         //         sum += item.price
//         //     })
//         //     return sum
//         // }
//         // return 0

//         return this.getAvailableProducts().reduce((sum, item) => sum+item.price, 0)
//     }

//     getProduct() {
//         return this.#product
//     }
// }

// class DiscountProductStore extends ProductStore {
//     discountRate = 0

//     constructor(discountRate) {
//         super()
//         this.discountRate = discountRate
//     }

//     getTotalInventoryValue() {
//         const original = super.getTotalInventoryValue()
//         return original - original * this.discountRate
//     }

//     getDiscountInfo() {
//         const originalTotal = super.getTotalInventoryValue();
//         const discountAmout = originalTotal * this.discountRate
//         const finalTotal = originalTotal - discountAmout
//         return {
//             originalTotal,
//             discountRate : this.discountRate,
//             discountAmout,
//             finalTotal
//         }
//     }
// }

// const store = new DiscountProductStore(0.1)

// store.addProduct({
//     id: "p01",
//     name: "  iPhone 15 Pro  ",
//     category: "phone",
//     price: 29990000,
//     inStock: true,
// });

// store.addProduct({
//     id: "p02",
//     name: "MacBook Air",
//     category: "laptop",
//     price: 24990000,
//     inStock: true,
// });

// store.addProduct({
//     id: "p03",
//     name: "AirPods Pro",
//     category: "audio",
//     price: 5990000,
//     inStock: false,
// });

// store.addProduct({
//     id: "p01",
//     name: "Duplicate",
//     category: "phone",
//     price: 1000,
//     inStock: true,
// });

// console.log(store.getProduct())
// console.log(store.findByName("iphone"))
// console.log(store.filterByCategory("  PHONE  "));
// console.log(store.getAvailableProducts());
// console.log(store.getDiscountInfo(0.1));

//-------------------------------------------------------------------------------------------------------------------
class Cart {
    #items = []

    addItem(item) {
        let { name, price, quantity } = item
        const nameNormalize = name.trim().toLowerCase()

        if (nameNormalize === '') {
            return {
                success: false,
                message: 'Name ko được phép trống'
            }
        }

        if (price <= 0) {
            return {
                success: false,
                message: 'Price phải > 0'
            }
        }
        if (quantity <= 0) {
            return {
                success: false,
                message: 'Quantity phải > 0'
            }
        }

        // if(this.#items.find((item)=> item.name.trim().toLowerCase() === nameNormalize)) {
        //     item.quantity = item.quantity + 1
        //     return {
        //         message: 'Sản phẩm đã tồn tại, tăng quantity'
        //     }
        // }

        const existingProduct = this.#items.find((item) => item.name.trim().toLowerCase() === nameNormalize)
        if (existingProduct) {
            existingProduct.quantity++;
            return {
                success: false,
                message: 'Sản phẩm đã tồn tại, tăng quantity'
            }
        }
        this.#items.push(item)
        return {
            success: true,
            message: 'Thêm vào giỏ hàng thành công'
        }

    }

    removeItem(name) {
        name = name.trim().toLowerCase()
        // const product = this.#items.find((item) => item.name.trim().toLowerCase() === name)
        // if(product) {
        //     this.#items.pop(product)
        // }

        this.#items = this.#items.filter((item) => item.name.trim().toLowerCase() !== name)
    }

    getSubtotal() {
        return this.#items.reduce((sum, item) => sum + item.price, 0)
    }

    applyCoupon(code) {
        code = code.trim().toUpperCase();
        if (code.startWith('SALE')) {
            // code = code.slice(4)
            // const discount = parseInt(code)
            // return this.getSubtotal() - (this.getSubtotal() / 100)
            return true
        }else {
            return false; 
        }
    }

    checkout() {
        return {  product : this.#items,
            subtotal : this.getSubtotal()

        }
    }

    getAll() {
        return this.#items;
    }


}


// Tạo class con VipCart extends Cart:

// Constructor nhận memberName.
// Override applyCoupon(code):
// Gọi super.applyCoupon(code) trước.
// Nếu coupon thường không hợp lệ, chấp nhận thêm mã "VIP30" để giảm 30%.
// Override checkout():
// Gọi super.checkout() để lấy hóa đơn gốc.
// Thêm memberName và cartType: "VIP" vào object kết quả.

class VipCart extends Cart {

    constructor(memberName) {
        super()
        this.memberName = memberName
    }

    applyCoupon(code) {
        let code = code.trim().toUpperCase()
        let coupon = super.applyCoupon()
        let discount
        if(coupon===true) {
            code = code.slice(4)
            discount = parseInt(code)
            return this.getSubtotal() - (this.getSubtotal() * (discount / 100))
        }
        if(coupon=== false && code === 'VIP30') {
            return this.getSubtotal() - (this.getSubtotal() * 0.3 )
        }
        if(coupon === false) {
            return 'Mã ko hợp lệ'
        }
    }

}

const cart = new Cart();
cart.addItem({
    name: "Trà sữa trân châu",
    price: 30000,
    quantity: 2,
});

cart.addItem({
    name: "  trà SỮA trân châu  ",
    price: 30000,
    quantity: 1,
});

cart.addItem({
    name: "Trà đào",
    price: 25000,
    quantity: 1,
});

cart.applyCoupon('  vip30  ')

