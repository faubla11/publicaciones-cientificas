// instruccion que permite vizualizar la publicación
document.querySelector('#articleFile').addEventListener('change', () => {

    let articleFile = document.querySelector('#articleFile').files[0];
    let articleFileURL = URL.createObjectURL(articleFile) + "#toolbar=0";

    document.querySelector('#vistaPrevia').setAttribute('src', articleFileURL);
});