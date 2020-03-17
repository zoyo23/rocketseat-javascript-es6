const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('ok') }, 2000);
});

// minhaPromise()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// async function executaPromise() {
//     const response = await minhaPromise();
//     console.log(response);
// }

const executaPromise = async () => {
    const response = await minhaPromise();
    console.log(response);
}

executaPromise();