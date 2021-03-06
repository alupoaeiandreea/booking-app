(function () {
    var $card = $('.row');

    function addTemplate(item) {
        $card.append(
            '<div class="col-md-3"><div class="card">'
            +'<div class="view overlay hm-white-slight">'
            +'<img src="'+ item.logo +'" class="img-fluid" alt="">'
            +'<a><div class="mask"></div></a></div>'
            +'<div class="card-body">'
            +'<h4 class="card-title">' + item.name + '</h4>'
            +'<p class="card-text">' + item.details.substr(0,32) + '...</p>'
            +'<a class="black-text d-flex flex-row-reverse hvr-pulse">'
            +'<button class="waves-effect p-2" id="selectOff" onclick="selectCompany(\'' + item.id +  '\',\'' + item.name +  '\',\'' + item.details + '\')">Book Now <i class="fa fa-chevron-right"></i></button>'
            +'</a></div></div></div>'
        );
    }

    //Select company
    window.selectCompany = function(companyId,companyName,companyDetails){
        window.myStore.companyId = companyId;
        window.myStore.companyName = companyName;
        window.myStore.companyDetails = companyDetails;
        // Get company's offices
        window.getOffices(companyId);
    };

    // Get companies
    function getCompanies() {
        $.ajax({
            type: "GET",
            url: ApiUrl + 'companies',
            success: function (companies){
                console.log('companies ', companies)
                $.each(companies, function (index, item){
                    addTemplate(item);
                });
            },
            error: function (err){
                console.log('Err ', err);
            }
        });
    }
   //Call the function
   getCompanies();
})();