import axios from 'axios';

class ItemService {

  getData() {
    console.log();
    axios.get('http://localhost:4200/'
  )
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }
}

export default ItemService;