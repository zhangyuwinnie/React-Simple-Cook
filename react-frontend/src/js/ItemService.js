import axios from 'axios';

class ItemService {
  getData(data) {
    console.log("itemservice,getdatas");
    console.log(data);
    axios.get('http://localhost:4200/recipes'
  )
  .then(function (response) {
      console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  getData() {
    console.log("itemservice,getdatas,no params");
    axios.get('http://localhost:4200/recipes'
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