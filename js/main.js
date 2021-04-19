function helloConsole() {
    console.log('Hello, Console!');
}

const letterPairs = {
    'q': 'й',
    'w': 'ц',
    ',': 'б',
    'j': 'о',
    'h': 'р',
}

function prepareQuery(query) {
    lowercaseQuery = query.toLowerCase();
    russianQuery = query
        .split('')
        .map(letter => letterPairs[letter] || letter)
        .join('');
    return russianQuery;
}

function filterStudents(query) {
    query = prepareQuery(query);
    console.log(query);
    const studentsList = document.querySelector('#students-list')
    for (const studentLi of studentsList.children) {
        const name = studentLi.innerText.toLowerCase();
        const isMatched = name.includes(query);
        studentLi.classList.toggle('hidden', !isMatched);
    }
}

function main() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', event => filterStudents(event.target.value))
    
    // alert(((x,y) => x * y)(2,3));

}

main();