// create deepCopy function

// function getType(value) {
//     if (Array.isArray(value)) {
//         return 'array';
//     }
//     if (value === null) {
//         return 'null';
//     }
//     if (typeof value === 'object') {
//         return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
//     }
//     return typeof value;
// }
//
//
// const deepCopy = (target) => {
//     let copyTarget;
//
//     switch (getType(target)) {
//         case 'array':
//             console.log('array')
//             for (const item of target) {
//                 console.log(item)
//                 if (getType(item) === 'array' || getType(item) === 'object') {
//                     deepCopy(item);
//                 } else {
//                     copyTarget = copyTarget.append(item);
//                 }
//             }
//             break;
//         case 'object':
//             console.log('object')
//             for (const item in target) {
//                 console.log(item)
//                 if (getType(item) === 'array' || getType(item) === 'object') {
//                     deepCopy(item);
//                 } else {
//                     copyTarget = {item: target[item]};
//                 }
//             }
//             break;
//         default:
//             copyTarget = target;
//     }
//
//     return copyTarget;
// }
//
// const original = { a: 1, b: { c: 2 } };
// const copy = deepCopy(original);

// console.log(copy); // { a: 1, b: { c: 2 } }
// console.log(copy !== original); // true
// console.log(copy.b !== original.b); // true

// const originalArray = [1, 2, { a: 3 }];
// const copyArray = deepCopy(originalArray);
//
// console.log(copyArray); // [1, 2, { a: 3 }]
// console.log(copyArray !== originalArray); // true
// console.log(copyArray[2] !== originalArray[2]); // true

function deepEqual(obj1, obj2) {
    // Проверка на строгое равенство
    if (obj1 === obj2) return true;

    // Проверка на null и тип объектов
    if (
        obj1 === null ||
        obj2 === null ||
        typeof obj1 !== 'object' ||
        typeof obj2 !== 'object'
    ) {
        return false;
    }

    // Получение ключей объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Проверка количества ключей
    if (keys1.length !== keys2.length) return false;

    // Проверка наличия всех ключей и их значений
    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }

    return true;
}

// 1.
const simpleObject = {
    name: "Иван",
    age: 30,
    isActive: true,
    hobbies: ["чтение", "спорт"],
};

const copySimpleObject = {
    ...simpleObject,
    hobbies: [...simpleObject.hobbies]
}
console.log(deepEqual(simpleObject, copySimpleObject))

// 2.
const nestedObject = {
    user: {
        id: 1,
        profile: {
            firstName: "Мария",
            lastName: "Петрова",
            contact: {
                email: "maria@example.com",
                phone: "123-456-7890",
            },
        },
    },
    roles: ["admin", "editor"],
};

const copyNestedObject = {
    user: {
        ...nestedObject.user,
        profile: {
            ...nestedObject.user.profile,
            contact: {...nestedObject.user.profile.contact},
        }
    },
    roles: [...nestedObject.roles]
}
console.log(deepEqual(nestedObject, copyNestedObject))

const diverseObject = {
    title: "Проект",
    createdAt: new Date(),
    pattern: /test/i,
    calculate: function (a, b) {
        return a + b;
    },
    data: {
        values: [10, 20, 30],
        nested: {
            flag: false,
        },
    },
};

const copyDiverseObject = {
    ...diverseObject,
    createdAt: new Date(),
    data: {
        values: [...diverseObject.data.values],
        nested: {...diverseObject.data.nested},
    }
}
console.log(deepEqual(diverseObject, copyDiverseObject))

const arrayOfObjects = [
    { id: 1, name: "Объект 1" },
    { id: 2, name: "Объект 2", details: { info: "Дополнительная информация" } },
    { id: 3, name: "Объект 3", tags: ["тег1", "тег2"] },
];
const copyArrayOfObjects = arrayOfObjects.map(el => {
    if (el.hasOwnProperty("details")) {
        return {...el, details: {...el.details}};
    } else if (el.hasOwnProperty("tags")) {
        return {...el, tags: [...el.tags]};
    }
    return el
})
console.log(deepEqual(arrayOfObjects, copyArrayOfObjects))

const cyclicObject = {
    name: "Циклический объект",
};
cyclicObject.self = cyclicObject;
const copyCyclicObject = {
    name: cyclicObject.name,
    self: null,
}
console.log(deepEqual(cyclicObject, copyCyclicObject))

const mapSetObject = {
    myMap: new Map([
        ["ключ1", "значение1"],
        ["ключ2", "значение2"],
    ]),
    mySet: new Set([1, 2, 3, 4]),
};

const binaryDataObject = {
    buffer: new ArrayBuffer(8),
    int8Array: new Int8Array([1, 2, 3, 4, 5, 6, 7, 8]),
    float32Array: new Float32Array([1.1, 2.2, 3.3]),
};

const promiseObject = {
    asyncOperation: new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Операция завершена");
        }, 1000);
    }),
};

const target = { message: "Hello, Proxy!" };
const proxyObject = new Proxy(target, {
    get: function (obj, prop) {
        return prop in obj ? obj[prop] : "Свойство не найдено";
    },
});

const parent = {
    greet: function () {
        return "Привет!";
    },
};

const child = Object.create(parent);
child.name = "Наследник";
child.age = 25;



