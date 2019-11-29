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