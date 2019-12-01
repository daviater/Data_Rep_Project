import axios from 'axios';

class ItemService {

  sendData(data) {
    axios.post('http://localhost:4200/api/recipes', {
    item: data
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  getData(){
    axios.get('http://localhost:4200/api/recipes')
        .then((response)=>{
            this.setState({recipes: response.data.Search})
        }).catch((error)=>{
            console.log(error);
        });
  }

  deleteData(data){
    axios.delete('http://localhost:4200/api/recipes', {
    item: data
  })
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default ItemService;