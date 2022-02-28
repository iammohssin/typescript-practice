//Get date in TypeScript 

const formatDate:any = (date = new Date()) =>{
	const days = date.getDate();
	const months = date.getMonth() +1;
	const years = date.getFullYear();
	return `${days}-${months}-${years}`;
}

console.log(formatDate());