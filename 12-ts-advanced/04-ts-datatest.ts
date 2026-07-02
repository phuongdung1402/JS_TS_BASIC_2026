// const menuCatalog = {
//     drinks : {
//         coffee: {name: "Ca phe sua", price : 3000},
//         tea : {name: "Tra dao", price : 2400},
//         juice : {name : "Nuoc ep cam", price: 5000}
//     },
//     food : {
//         bread: {name: "Banh mi", price : 2000},
//         rice: {name: "com tam", price : 6000}
//     }
// } as const

// function getMenu<N extends keyof typeof menuCatalog, K extends keyof (typeof menuCatalog)[N]>(nameSpace: N, key: K) {
//     return menuCatalog[nameSpace][key]
// }

// const coffee = getMenu('drinks', 'coffee')
// coffee.name

import customers from "./customers.json" with {type: "json"}

function loadDataByEnv<T>(base: T, dev: T) : T {
    //process.env
    let env="dev"
    switch(env) {
        case 'dev': 
        case 'development' :
            return dev;
        
        default:
            //nếu ko truyền môi trường
            return base;
    }
}


type DataEntry = {
    description?: string;

    data: unknown
}

const testDataCatalog = {
    customers : loadDataByEnv(customers, customersDev)
}

type TestDataCatalog = typeof testDataCatalog;

type TestDataNamespace = keyof typeof testDataCatalog;

type TestDataKey<N extends TestDataNamespace> = keyof TestDataCatalog[N]
type CustomerKeys = TestDataKey<"customers">
type TestDataValue<N extends TestDataNamespace, K extends TestDataKey<N>> = (TestDataCatalog[N][K] & DataEntry)["data"]

function cloneData<T> (data: T) {
    if(typeof structuredClone !== 'undefined') {

    //structuredClone() ( chỉ tồn tại trên nodeJS 17+)
    return structuredClone(data)
    }

    //cách dùng khi chưa có structureClone
    return JSON.parse(JSON.stringify(data))
}

//override
//Object.assign() : merge 2 object lại với nhau
//asign dùng cho obj , ko dùng cho array
const original = {
    company: "Auto minimal",
    address: {
        city: "HCM"
    }
}

const overrides = {
    address: {
        city: "HN"
    }
}

Object.assign(original, overrides);

//Transform - Biến đổi data

export function getTestDataSimple<
//N là namespace ng dùng truyền vào
N extends TestDataNamespace,
K extends TestDataKey<N>>(nameSpace: N, key : K, options? : { overrides?: Partial<TestDataValue<N, K>>; 
    transform?: (data: TestDataValue<N, K>) => TestDataValue<N, K>
},): TestDataValue<N, K> {
    //B1 : Kiểm tra namespace có tồn tại ko
    const nameSpaceData = testDataCatalog[nameSpace];
    if(!nameSpace) {
        throw new Error(`Namespace ${nameSpace} ko tồn tại`)
    }

    //B2 : Kiểm tra key
    const entry = nameSpaceData[key] as TestDataCatalog[N][K] & DataEntry
    if(!entry) {
        throw new Error(`Key ${String(key)} ko tồn tại`)
    }

    //B3.Clone data
    let results = cloneData(entry.data) as TestDataValue<N, K>

    //B4. Apply overrides
    if(options?.overrides) {
        if(Array.isArray(results)) {
            throw new Error("Khong the dung override cho array")
        }

        if(typeof results !=='object' || results === null){
            throw new Error("Override ko thể dùng cho string, number, boolean (check primitive type)")
        }

        Object.assign(results, options.overrides)
    }

    //B5. Apply transform 
    if(options?.transform) {
        results = options.transform(results)
    }
    return results
} 