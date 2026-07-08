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
        // let sum = 0;
        // const availableProduct = this.getAvailableProducts()
        // if (availableProduct) {
        //     const totalPrice = availableProduct.map((item) => {
        //         sum += item.price
        //     })
        //     return sum
        // }
        // return 0
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
// class Cart {
//     #items = [];
//     discountPercent = 0

//     addItem(item) {
//         let { name, price, quantity } = item
//         const trimName = name.trim().toLowerCase()

//         //name không được rỗng sau khi trim().
//         if (trimName === '') {
//             return {
//                 success: false,
//                 message: 'Name ko được phép trống'
//             }
//         }

//         //price và quantity phải lớn hơn 0.
//         if (price <= 0) {
//             return {
//                 success: false,
//                 message: 'Price phải > 0'
//             }
//         }
//         if (quantity <= 0) {
//             return {
//                 success: false,
//                 message: 'Quantity phải > 0'
//             }
//         }

//         const existingProduct = this.#items.find((item) => item.name.trim().toLowerCase() === trimName)
//         if (existingProduct) {
//             existingProduct.quantity = existingProduct.quantity + quantity;
//             return {
//                 success: true,
//                 message: 'Sản phẩm đã tồn tại, tăng quantity'
//             }
//         }
//         this.#items.push(item)
//         return {
//             success: true,
//             message: 'Thêm vào giỏ hàng thành công'
//         }
//     }

//     removeItem(name) {
//         const target = name.trim().toLowerCase()
//         this.#items = this.#items.filter((item) => item.name.trim().toLowerCase() !== target)
//     }

//     getSubtotal() {
//         return this.#items.reduce((sum, item) => sum + item.price * item.quantity, 0)
//     } 

//     applyCoupon(code) {
//         const normalize = code.trim().toUpperCase();
//         if (normalize.startsWith('SALE')) {
//             const percent = parseInt(normalize.slice(4))
//             this.discountPercent = percent
//             return true
//         }else {
//             return false; 
//         }
//     }

//     checkout() {
//         const subtotal = this.getSubtotal();
//         const discount = subtotal * (this.discountPercent / 100)
//         return {
//             items: this.#items,
//             subtotal,
//             discount,
//             total : subtotal - discount
//         }
//     }

//     getAll() {
//         return this.#items;
//     }
// }


// class VipCart extends Cart {

//     constructor(memberName) {
//         super()
//         this.memberName = memberName
//     }

//     applyCoupon(code) {
//         const applied = super.applyCoupon(code);
//         if(applied) return true

//         const normalized = code.trim().toUpperCase()
//         if(normalized === 'VIP30') {
//             this.discountPercent = 30
//             return true
//         }

//         return false
//     }

//     checkout() {
//         const base = super.checkout()
//         return { 
//             ...base,
//             memberName : this.memberName,
//             cartType: 'VIP'
//         }

//     }

// }

// const cart = new VipCart('Neko');
// cart.addItem({
//     name: "Trà sữa trân châu",
//     price: 30000,
//     quantity: 2,
// });

// cart.addItem({
//     name: "  trà SỮA trân châu  ",
//     price: 30000,
//     quantity: 1,
// });

// cart.addItem({
//     name: "Trà đào",
//     price: 25000,
//     quantity: 1,
// });

// cart.applyCoupon('  sale40  ')
// console.log(cart.checkout())
