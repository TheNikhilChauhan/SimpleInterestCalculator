const capitalize = () =>{
    let name = document.getElementById('name').value.toString();
    let capitalString = name;
    const firstLetter = name[0] === name[0].toLowerCase()? true : false
    if( firstLetter == true){
        let newName = name.charAt(0).toUpperCase();
        capitalString = newName + name.slice(1);
    }
    
    document.getElementById('result').innerHTML = capitalString;
    alert(`${capitalString}`)
} 

