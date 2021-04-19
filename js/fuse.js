function helloConsole() {
    console.log('Hello, Console!');
}

// Полное соответствие
const keys = {
    en: "qwertyuiop[]asdfghjkl;zxcvbnm,./",
    ru: "йцукенгшщзхъфывапролджэячсмитьбю."
}

const letterPairs = keys.en.split('')
    .reduce((acc, enLetter, index) => (acc[enLetter] = keys.ru[index]) && acc, {})

function prepareQuery(query) {
    query = query.toLowerCase();
    query = query
        .split('')
        .map(letter => letterPairs[letter] || letter)
        .join('');
    return query;
}

function filterStudents(query) {
    query = prepareQuery(query);
    console.log(query);
    const studentsList = document.querySelector('#students-list')
    const lis = new Array(...studentsList.children); 

    // Юзаем либу 
    // https://fusejs.io/demo.html
    
    const options = {
        threshold: 0.5,
        keys: [
            'innerText'
        ],
    };

    const fuse = new Fuse(lis, options)

    matchedStudents = !query
    ? lis
    : fuse.search(query)
        .map(({ item }) => item);

    for (const studentLi of lis) {
        const isMatched = matchedStudents.includes(studentLi);
        studentLi.classList.toggle('hidden', !isMatched);
    }
}

function main() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', event => filterStudents(event.target.value))

    // alert(((x,y) => x * y)(2,3));

}

main();