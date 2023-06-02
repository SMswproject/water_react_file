function call(data)
{
    usr_input_list = data.split(" ");
    
    const test_data = JSON.stringify({
        cloth : usr_input_list[0] ,
        color : usr_input_list[1] ,
        country : usr_input_list[2] ,
        mol : usr_input_list[3] ,
        season : usr_input_list[4] ,
        sex : usr_input_list[5]
    })

    console.log(typeof test_data);

    fetch("http://localhost:5000/api/data" , {
        method : 'POST' ,
        headers : {
            'Content-Type' : 'application/json'
        } ,
        body : test_data
    }).then(response => response.json())
    .then(jsonData => {
        //const address = jsonData.cloth;
        //console.log(address);
        return jsonData;
    })
}