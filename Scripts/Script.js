async function copyElement(v){
    try{
        await navigator.clipboard.writeText(v);
    }
    catch (err){
        alert(err);
    }
}