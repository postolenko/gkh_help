$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();
    $(".scroll_box").mCustomScrollbar();

});

$(document).ready(function() {		

	$("select").each(function() {

		$(this).select2({
			minimumResultsForSearch: Infinity,
			width: '100%'
		});

	});

  $(".news_slider").on("init", function(){
        var thumbIndex = 0;
        $(this).find(".thumb").each(function() {
          $(this).attr("data-thumbindex", thumbIndex);
          thumbIndex++;
        });
        thumbIndex = 0;
        $(".popup_news_slider").find(".popup_news_slide").each(function() {
          $(this).attr("data-articleindex", thumbIndex);
          thumbIndex++;
        });
  });

	$(".news_slider").not(".slick-initialized").slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        appendArrows: $(".slider_arrows")
    });

    $("#privateForm").validate({
        rules:{
            name:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            region:{
              required: true,
              minlength: 1,
              maxlength: 40,
            },
            city:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            street:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            home:{
              required: true,
              minlength: 1,
              maxlength: 40,
            },
            corp:{
              required: false,
              minlength: 1,
              maxlength: 40,
            },
            flat:{
              required: true,
              minlength: 1,
              maxlength: 40,
            },
            tel:{
              required: true,
              minlength: 3,
              maxlength: 40,
            },
            email:{
              required: true,
              minlength: 4,
              maxlength : 40
            },
            password:{
              required: true,
              minlength: 4,
              maxlength : 40
            }
         },
         messages:{
            name:{
              required: "Это поле обязательно для заполнения",
              minlength: "Логин должен быть минимум 2 символа",
              maxlength: "Максимальное число символов - 40"
            },
            region:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 1 символа",
              maxlength: "Максимальное число символов - 40"
            },
            city:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 2 символа",
              maxlength: "Максимальное число символов - 40"
            },
            street:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 2 символа",
              maxlength: "Максимальное число символов - 40"
            },
            home:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 1 символ",
              maxlength: "Максимальное число символов - 40"
            },
            corp:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 1 символ",
              maxlength: "Максимальное число символов - 40"
            },
            flat:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 1 символ",
              maxlength: "Максимальное число символов - 40"
            },
            tel:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 3 символа",
              maxlength: "Максимальное число символов - 40"
            },
            email:{
             required: "Это поле обязательно для заполнения",
             minlength: "Должно быть минимум 4 символа",
             email: "Введите корректный емейл адрес"
            },
            password:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 3 символа",
              maxlength: "Максимальное число символов - 40"
            }
     }
    });

    $("#form_2").validate({
        errorPlacement: function(error,element) {
            return true;
        },
        rules:{
            region_2:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            city_2:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            street:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            house:{
              required: true,
              minlength: 1,
              maxlength: 40,
            },
            corp:{
              required: false,
              minlength: 1,
              maxlength: 40,
            },
            kv:{
              required: true,
              minlength: 1,
              maxlength: 40,
            },
            name_2:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            tel_2:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            email_2:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            message:{
              required: true,
              minlength: 5
          }
         },
         messages:{

     }
    });

    // ---------------------------------------------------------

    var userInfoLast;
    var addInfoTempl;
    var index;

    $(document.body).on('click', '.add_info_link', function(e) {
        e.preventDefault();
        userInfoLast = $(this).closest(".user_info");
        index = parseInt( userInfoLast.find(".index").text() );
    });

    $(".cansel").click(function(e) {

        e.preventDefault();
        parentBlock = $(this).closest(".popup_wrapp");
        parentBlock.find(".user_info input").val("");
        parentBlock.removeClass("active");

    });

    $("#form_3").validate({
        rules:{
            street_3:{
              required: true,
              minlength: 2,
              maxlength: 40,
            },
            home_3:{
              required: true,
              minlength: 1,
              maxlength: 40,
            },
            corp_3:{
              required: false,
              minlength: 1,
              maxlength: 40,
            },
            flat_3:{
              required: true,
              minlength: 1,
              maxlength: 40,
            }
         },
         messages:{
            street_3:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должен быть минимум 1 символ",
              maxlength: "Максимальное число символов - 40"
            },
            home_3:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должен быть минимум 1 символ",
              maxlength: "Максимальное число символов - 40"
            },
            corp_3:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должно быть минимум 2 символа",
              maxlength: "Максимальное число символов - 40"
            },
            flat_3:{
              required: "Это поле обязательно для заполнения",
              minlength: "Должен быть минимум 1 символ",
              maxlength: "Максимальное число символов - 40"
            }
        },
        submitHandler: function(form) {
            
            var textRes = "";

            $("#add_info").find(".user_info input").each(function() {

                if( $(this).val() != "" ) {

                    if( $(this).attr("id") ==  "street" ) {
                        textRes += "ул. " + $(this).val();
                    }

                    if( $(this).attr("id") ==  "home" ) {
                        textRes += " " + $(this).val();
                    }

                    if( $(this).attr("id") ==  "corp" ) {
                        textRes += " корпус " + $(this).val();
                    }

                    if( $(this).attr("id") ==  "flat" ) {
                        textRes += " кв. " + $(this).val();
                    }

                    $(this).val("");

                }

            });
            userInfoLast.find(".p-2").text(textRes);
            index++;
            addInfoTempl = "<div class='user_info'>" +
                                    "<p>Адрес <span class='index'>"+ index +"</span></p>" +
                                    "<p class='p-2'><a href='#' class='black_link show_popup add_info_link' data-popup-name ='popup_2'>+ Добавить</a></p>" +
                                "</div>";
            $( addInfoTempl ).insertAfter( userInfoLast );
            $("#add_info").closest(".popup_wrapp").removeClass("active");

          }
    });

    // ---------------------------------------------------------

});

