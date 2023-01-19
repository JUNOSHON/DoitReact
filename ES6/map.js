function parse(qs) {
    const queryString = qs.substr(1);
    const chunks = qs.split('&');
    const result = chunks.map((chunks) => {
        const [key,value] = chunks.split('=');
        return {key: key, value: value};
    });
    console.log(result);
    return result;


}
parse('banana=10&apple=20&orange=30');