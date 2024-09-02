function insert_Row() {
      let table=document.getElementById("sampleTable");
	  let row=table.insertRow(0);
	  let col1=row.insertCell(0);
	  let col2=row.insertCell(1);
	  col1.innerHTML="New Cell1"
	  col2.innerHTML="New Cell2"
  
}
