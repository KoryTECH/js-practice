function banjo(str){
    name = str.split('');
    if (name[0] === "R" || name[0] === 'r'){
        return `${str} plays banjo`
    }
    else {
        return `${str} doesn't plays banjo`
    }
}
banjo("Roary");