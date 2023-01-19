function parse(qs){
    const queryString = qs.substr(1);
    const chunks = queryString.split('&');
    let result ={};

    chunks.forEach((chunk) => {
        const parts = chunks.split('=');
        const key = parts[0];
        const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
        result[key] = value;
    });

    console.log(result);
    return result
}
parse('banana=10&apple=20&orange=30');