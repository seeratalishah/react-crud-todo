export async function getAllToDos(){
  const response = await  fetch('http://ec2-50-17-231-251.compute-1.amazonaws.com:4000/api/todoapp');
  if(response.ok){
    const jsonResponse = await response.json();
    return jsonResponse
  }
  
  throw new Error("Could not load todo's. Please try again");
}