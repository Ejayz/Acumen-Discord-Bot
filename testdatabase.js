
const { getUserLastChat } = require('./database_interaction/getUserLastChat');

getUserLastChat('916475538330255390', '408659394054848523')
    .then(result => {
        if(result==''){
            console.log('No data');
        }else{
            console.log(result[0].LAST_LOG);
        }
    })
    .catch(error => {
        console.log(error);
    });


