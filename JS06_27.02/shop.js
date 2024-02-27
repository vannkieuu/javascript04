var man = [
    {
      id:1,
      name: "Áo thun Catsa cổ tròn",
      code: "TN001",
      oldprice: "300.000",
      newprice: "199.000",
      image: "../img/nam1.jpg"
    },
    {
      id:2,
      name: "Quần jean nam",
      code: "TN002",
      oldprice: "250.000",
      newprice: "160.000",
      image: "../img/nam2.jpg"
    },
    {
      id:3,
      name: "Sơ mi Catsa",
      code: "TN003",
      oldprice: "500.000",
      newprice: "399.000",
      image: "../img/nam3.jpg"
    },
    {
      id:4,
      name: "Polo Catsa cotton",
      code: "TN004",
      oldprice: "450.000",
      newprice: "199.000",
      image: "../img/nam4.jpg"
    },
  ];
  var woman = [
    {
      id:1,
      name: "Set kiểu",
      code: "TN011",
      oldprice: "300.000",
      newprice: "199.000",
      image: "../img/nu1.jpg"
    },
    {
      id:2,
      name: "Áo khoác len",
      code: "TN012",
      oldprice: "199.000",
      newprice: "125.000",
      image: "../img/nu2.jpg"
    },
    {
      id:3,
      name: "Váy kẻ caro",
      code: "TN013",
      oldprice: "400.000",
      newprice: "199.000",
      image: "../img/nu3.jpg"
    },
    {
      id:4,
      name: "Áo cổ lọ",
      code: "TN014",
      oldprice: "499.000",
      newprice: "299.000",
      image: "../img/nu4.jpg"
    },
  ];
  function listProducts(){
    for (let i=0;i<=man.length-1;i++){
      var demo= '<div class="col-3">';
      demo += '<div class="card" style="width: 18rem">';
      demo += '<img src="'+man[i].image+'"class="card-img-top" style="height:300px;">';
      demo += '<div class="card-body">';
      demo += '<h4 class="card-title">'+man[i].name+'</h4>';
      demo += '<p class="card-text"><del>'+man[i].oldprice+' vnđ </del></p>';
      demo += '<span class="new-price">' + man[i].newprice + ' vnđ</span></p>';
      demo += '<a href="#" class="btn btn-danger" onclick="oder()">Đặt mua</a>'
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      
      document.getElementById("man").innerHTML +=demo;
    }
    for (let i=0;i<=woman.length-1;i++){
      var demo= '<div class="col-3">';
      demo += '<div class="card" style="width: 18rem">';
      demo += '<img src="'+woman[i].image+'"class="card-img-top" style="height:300px;">';
      demo += '<div class="card-body">';
      demo += '<h5 class="card-title">'+woman[i].name+'</h5>';
      demo += '<p class="card-text"><del>'+woman[i].oldprice+' vnđ</p>';
      demo += '<p class="card-text">'+woman[i].newprice+' vnđ</p>';
      demo += '<a href="#" class="btn btn-danger" onclick="oder()">Đặt mua</a>'
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      document.getElementById("woman").innerHTML +=demo;
    }
  }