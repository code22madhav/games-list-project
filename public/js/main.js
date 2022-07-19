fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json").then((data)=>{
    // console.log(data);
    return data.json();
}).then((objectData)=>{
    let tableData="";
            objectData.map((values)=>{
            tableData+=`<tr>
            <td>${values.title}</td>
            <td>${values.platform}</td>
            <td>${values.score}</td>
            <td>${values.genre}</td>
            <td>${values.editors_choice}</td>
            </tr>`;
    });
    document.getElementById("t_body").innerHTML=tableData;    
}).catch((err)=>{
    console.log(error);
})


const searchFun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable= document.getElementById('tableid');
    let tr=myTable.getElementsByTagName('tr');
    for(var i=0;i<tr.length;i++){
        let td= tr[i].getElementsByTagName('td')[0];
        if(td){
            let textValue= td.textContent || td.innerHTML;

            if(textValue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display="";
            }else{
                tr[i].style.display="none";
            }
        }
    }
}




