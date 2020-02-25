import axios from 'axios';

class PrintService {
  static async getPrints(page) {
    return await axios.get(`https://api.harvardartmuseums.org/object?sort=rank&sortorder=desc&hasimage=1&q=verificationlevel:4&apikey=${process.env.API_KEY}&page=${page}`)
        .then(function (response) {

          // loop through the data and make sure there is an image in the image array to display
          const filteredRecords = response.data.records.filter(record => record.images.length > 1);

          return {
            ...response.data,
            records: filteredRecords
          };
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
  }
}

export default PrintService;
