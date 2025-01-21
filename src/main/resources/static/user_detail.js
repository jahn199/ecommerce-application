
    const query = new URLSearchParams(window.location.search);
    const userId = query.get('id');
  if(userId) {
      $.ajax({
          url: '/api/user/' + userId,
          method: 'GET',
          success: function (data) {
              console.log(data);
              if (data) {
                  $("#email").html(data.email);
                  $("#username").html(data.username);
                  $("#password").html(data.password);
                  $("#firstname").html(data.firstname);
                  $("#lastname").html(data.lastname);
                  $("#phone").html(data.phone);
                  $("#city").html(data.city);
                  $("#street").html(data.street);
                  $("#streetNumber").html(data.streetNumber);
                  $("#zipcode").html(data.zipcode);
                  $("#geolocationLat").html(data.geolocationLat);
                  $("#geolocationLong").html(data.geolocationLong);
              } else {
                  $("#user-detail-container").html(`<p>일치하는 유저를 찾을 수 없습니다.</p>`);
              }
          },
          error: function () {
              alert("데이터를 가져오는데 실패했습니다.");
          }
      });
  }
