const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll('.price');
	let sum=0;
	prices.forEach((item) =>{
		sum=sum+Number(item.innerText);
	});
	const table=document.getElementsByTagName("table");
	const tr=document.createElement("tr");
	const td=document.createElement("td");
	td.innerText=`Total price is ${sum}`;
	td.colspan="2";
	td.id="ans";
	tr.append(td);
	table.append(tr);
	
  
};

getSumBtn.addEventListener("click", getSum);

