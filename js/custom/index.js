function transLang(){
    let oText= document.querySelector('#oText').value;
    let lang= document.querySelector('#lang').value;
    if(oText==""){
        alert("please fill original text");
        return;
    }
    if(lang==""){
        alert("please select a language to translate");
        return;
    }

    fetch(ApiPath+"/translate?key="+ApiKey+"&text="+oText+"&lang="+lang).then(res=>{
        return  res.json();
    })
        .then(data=>{
            console.log(data.text[0]);
            document.querySelector('#tText').value = data.text[0];
    });
}