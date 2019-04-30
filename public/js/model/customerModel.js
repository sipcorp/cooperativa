customerModel = {
    loginValidate: function(id, pass) {
       var response =  $.get('./loginConfig.php', {loginid: id, passwordid: pass},function(result){
            customerValid = $.parseJSON(result);
            return customerValid
        })
        return response  
    },
    getCustomerInfo: function(e) {
        modelCust = [
            {
                email: "pdellasera@gmail.com",
                pass: "panama2000",
                user: "pcastillo",
                role: "CEO"
            }
        ]
        return modelCust
        /* $.get("/getCustomerByID", {
            id: id
        }, json) */
    }
}