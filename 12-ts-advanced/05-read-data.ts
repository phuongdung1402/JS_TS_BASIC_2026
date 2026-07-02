import { transform } from "typescript";
import { getTestDataSimple } from "./04-ts-datatest";

const fullDataSimple = getTestDataSimple('customers','full')
console.log(fullDataSimple);

const customerForSearch = getTestDataSimple('customers', 'full', {
    overrides: {company: 'Auto PW for search'}
})
console.log(customerForSearch);

const vietNamAddress = getTestDataSimple('customers, "addressDataset', {
    transform: (address) => address.filter((address)=> address.country === 'VN')
})
console.log(vietNamAddress);


