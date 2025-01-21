
    const query = new URLSearchParams(window.location.search);
    const productId = query.get('id');

    $.ajax({
    url:'/api/product/' + productId,
    method:'GET',
    success: function (data) {
    console.log(data);
    if(data) {
    $("#title").html(`"<p id="title"></p>`);
    $("#price").html(`"<p id="price"></p>`);
    $("#description").html(`"<p id="description"></p>`);
    $("#category").html(`"<p id="category"></p>`);
    $("#image").html(`"<p id="image"></p>`);
    $("#ratingRate").html(`"<p id="ratingRate"></p>`);
    $("#ratingCount").html(`"<p id="ratingCount"></p>`);
} else {
    $("#user-detail-container").html(`<p>일치하는 유저를 찾을 수 없습니다.</p>`);
}
},
    error:function (){
    alert("데이터를 가져오는데 실패했습니다.");
}
});
