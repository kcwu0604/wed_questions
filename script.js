jQuery('.mm-prev-btn').hide();

var x;
var count;
var current;
var percent;
var z = [];

init();
getCurrentSlide();
goToNext();
goToPrev();
getCount();
// checkStatus();
// buttonConfig();
buildStatus();
deliverStatus();
submitData();
goBack();

function init() {
		
		jQuery('.mm-survey-container .mm-survey-page').each(function() {

			var item;
			var page;

			item = jQuery(this);
			page = item.data('page');

			item.addClass('mm-page-'+page);
      getCurrentSlide(x);
      current = x;
			//item.html(page);
		});

	}

	function getCount() {

		count = jQuery('.mm-survey-page').length;
		return count;

	}

	function goToNext() {

		jQuery('.mm-next-btn').on('click', function() {
			goToSlide(x);
			getCount();
			current = x + 1;
			var g = current/count;
			buildProgress(g);
			var y = (count + 1);
			getButtons();
			jQuery('.mm-survey-page').removeClass('active');
			jQuery('.mm-page-'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			if( jQuery('.mm-page-'+count).hasClass('active') ){
				if( jQuery('.mm-page-'+count).hasClass('pass') ) {
					jQuery('.mm-finish-btn').addClass('active');
				}
				else {
					jQuery('.mm-page-'+count+' .mm-survery-content .mm-survey-item').on('click', function() {
						jQuery('.mm-finish-btn').addClass('active');
					});
				}
			}
			else {
				jQuery('.mm-finish-btn').removeClass('active');
				if( jQuery('.mm-page-'+current).hasClass('pass') ) {
					jQuery('.mm-survey-container').addClass('good');
					jQuery('.mm-survey').addClass('okay');
				}
				else {
					jQuery('.mm-survey-container').removeClass('good');
					jQuery('.mm-survey').removeClass('okay');
				}
			}
			buttonConfig();
		});

	}

	function goToPrev() {

		jQuery('.mm-prev-btn').on('click', function() {
			goToSlide(x);
			getCount();			
			current = (x - 1);
			var g = current/count;
			buildProgress(g);
			var y = count;
			getButtons();
			jQuery('.mm-survey-page').removeClass('active');
			jQuery('.mm-page-'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			jQuery('.mm-finish-btn').removeClass('active');
			if( jQuery('.mm-page-'+current).hasClass('pass') ) {
				jQuery('.mm-survey-container').addClass('good');
				jQuery('.mm-survey').addClass('okay');
			}
			else {
				jQuery('.mm-survey-container').removeClass('good');
				jQuery('.mm-survey').removeClass('okay');
			}
			buttonConfig();
		});

	}

	function buildProgress(g) {

		if(g > 1){
			g = g - 1;
		}
		else if (g === 0) {
			g = 1;
		}
		g = g * 100;
		jQuery('.mm-survey-progress-bar').css({ 'width' : g+'%' });

	}

	function goToSlide(x) {

		return x;

	}
	function getCurrentSlide() {

		jQuery('.mm-survey-page').each(function() {

			var item;

			item = jQuery(this);

			if( jQuery(item).hasClass('active') ) {
				x = item.data('page');
			}
			else {
				
			}

			return x;
		});

	}

	function getButtons() {
		if(current === count) {
			jQuery('.mm-next-btn').hide();
      jQuery('.mm-finish-btn').show();
		}else{
     if(current === 1) {
			  jQuery('.mm-prev-btn').hide();
        jQuery('.mm-next-btn').show();
        jQuery('.mm-finish-btn').hide();
      }
      else {
        jQuery('.mm-next-btn').show();
        jQuery('.mm-prev-btn').show();
        jQuery('.mm-finish-btn').hide();
      } 
    }

	}

	jQuery('.mm-survey-q li input').each(function() {

		var item;
		item = jQuery(this);

		jQuery(item).on('click', function() {
			if( jQuery('input:checked').length > 0 ) {
		    	// console.log(item.val());
		    	jQuery('label').parent().removeClass('active');
		    	item.closest( 'li' ).addClass('active');
			}
			else {
				//
			}
		});

	});

	percent = (x/count) * 100;
	jQuery('.mm-survey-progress-bar').css({ 'width' : percent+'%' });

	function checkStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
      console.log("checkStatus");      
			var item;
			item = jQuery(this);
			item.closest('.mm-survey-page').addClass('pass');
		});
	}

	function buildStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
      console.log("buildStatus");
      var friend = $("input[name=radio2]:checked").val();
      if (friend === '否') {
        jQuery('.mm-next-btn').hide();
        jQuery('.mm-finish-btn').show();
        //buildProgress(0);
      } else {
        getButtons();
			  // current = x;
			  // var g = current/count;
			  // buildProgress(g);
      }
			var item;
			item = jQuery(this);
			item.addClass('bingo');
			item.closest('.mm-survey-page').addClass('pass');
			jQuery('.mm-survey-container').addClass('good');
		});
	}

	function deliverStatus() {
		jQuery('.mm-survey-item').on('click', function() {
      console.log("deliverStatus");
			if( jQuery('.mm-survey-container').hasClass('good') ){
				jQuery('.mm-survey').addClass('okay');
			}
			else {
				jQuery('.mm-survey').removeClass('okay');	
			}
			buttonConfig();
		});
	}

	function buttonConfig() {
		if( jQuery('.mm-survey').hasClass('okay') ) {
			jQuery('.mm-next-btn button').prop('disabled', false);
		}
		else {
			jQuery('.mm-next-btn button').prop('disabled', true);
		}
	}

	function submitData() {
    jQuery('.mm-finish-btn').on('click', function() {
      if (checkAnswers() == false)
      {
        //alert('資料填答尚未完成，請確認是否有遺漏的問題');
        return;
      }
		//jQuery('.mm-finish-btn').on('click', function() {
			collectData();
			jQuery('.mm-survey-bottom').slideUp();
			jQuery('.mm-survey-results').slideDown();
      buildProgress(0);
		});
	}

function collectData(){
// 定義一個空陣列來儲存問題的值
var values = [];
var names = [];

  // 將 name 加入陣列中
  names.push('entry.661952874');
  names.push('entry.1466543124');
  names.push('entry.1374585129');
  names.push('entry.404716697');
  names.push('entry.1184862839');
  names.push('entry.1580276281');
  names.push('entry.1493738319');
  names.push('entry.305453747');
  names.push('entry.2084234523');
  names.push('entry.2087222557');
  names.push('entry.1260781225');
  names.push('entry.1140793109');
  names.push('entry.1126790829');
  names.push('entry.2049331128');
  
  $('.mm-survey-question').each(function() {

  // 取得問題的標題
  var title = $(this).find('p').first().text();

  // 判斷問題的類型
  if ($(this).find('input[type="radio"]').length > 0)  //選項問題
  {
    // 取得選項的值
    if ( $(this).find('input[type="radio"]:checked').length > 0)
    {
      var options = $(this).find('input[type="radio"]:checked').val() || '未填寫';

      // 如果選項中有額外的input text，取得額外的值
      if ($(this).find('input[type="radio"]:checked + label input[type="text"]').length > 0) {
        if (options === "取代")
        {
          var extra = $(this).find('input[type="radio"]:checked + label input[type="text"]').val()|| '未填寫';  
          options = extra;
        }else{
          values.push({
          title: title,
          value: options
          });  
          var extra = $(this).find('input[type="radio"]:checked + label input[type="text"]').val()|| '未填寫';
          options = extra;
        }
        
        
      }
      values.push({
          title: title,
          value: options
        });
    }else{
      var options = '未填寫';
       values.push({
          title: title,
          value: options
        });
    }
  } else { //簡答題
    var options = '';
    $(this).find('input[type="text"]').each(function() {
      var inputTitle = $(this).prev('p').first().text(); // 取得簡答題題目
      var inputValue = $(this).val() || '未填寫'; // 取得簡答題回答
      values.push({
        title: inputTitle,
        value: inputValue
      });
    });
  }
});
  
// //遍歷每個問題
// $('.mm-survey-question').each(function() {

//   // 取得問題的標題
//   var title = $(this).find('p').text();
//   var options = '';
//   // 判斷問題的類型
//   if ($(this).find('input[type="radio"]').length > 0)  //確認是選項問題還是簡答題
//   {
//     // 取得選項的值
//     if ( $(this).find('input[type="radio"]:checked').length > 0)
//     {
//       options = $(this).find('input[type="radio"]:checked').val() || '未填寫';

//       // 如果選項中有額外的input text，取得額外的值
//       if ($(this).find('input[type="radio"]:checked + label input[type="text"]').length > 0) {
//         if (options === "取代")
//         {
//           values.push({
//           title: title,
//           value: options
//           });  
//         }
        
//         var extra = $(this).find('input[type="radio"]:checked + label input[type="text"]').val()|| '未填寫';
//         //options += ' ' + extra;
        
//       }
//       values.push({
//           title: title,
//           value: options
//         });
//     }
//   } else {
//     //簡答題
//     var title = $(this).find('p').text();
//     // 取得回答的值
//     var options = $(this).find('input[type="text"]').val();

//   }
//   if (options === '')
//       options='未填寫';
//   // 將問題的標題和回答的值加入陣列中
//   values.push({
//     title: title,
//     value: options
//   });
  
// });
  for (var i = 0; i < values.length; i++) {
  var title = values[i].title;
  var value = values[i].value;
  // console.log(title + ': ' + value);
}

  var data = {};
for (var i = 0; i < names.length; i++) {
    data[names[i]] = values[i] ? values[i].value : '空的阿QQ';
}
console.log("data : ", data);

 $.ajax({
    type: 'POST',
    url: 'https://docs.google.com/forms/u/2/d/e/1FAIpQLScPUZ8eYW4rtzT95GP_p9oJaLmFlPNbsnQc7xEt-vyNfh9q9Q/formResponse',
    data: data,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function () {
        alert('資料已送出！感謝提交表單❤️');
    },
       error: function (jqXHR, textStatus, errorThrown) {
        var status = jqXHR.status;
         if (jqXHR.status === 200)
           alert('資料已送出！感謝提交表單❤️');
         else
           alert('資料傳送失敗！ status code:' +status );
      }
 });

}

function goBack() {
  jQuery('.mm-back-btn').on('click', function() {
    current = x;
    var g = current/count;
    buildProgress(g);
    jQuery('.mm-survey-bottom').slideDown();
    jQuery('.mm-survey-results').slideUp();
  });
}
function checkAnswers() {
//   // 設定標記是否全部填寫
//   let allAnswersFilled = true;
  
//   // 找到目前頁面內的每個問題的 div，遍歷每個 div 檢查回答
//   var page = $('.mm-survey-page.active');
//   page.find('.mm-survey-question').each(function() {
//     const question = $(this);
//     const questionNumber = question.index() + 1;
    
//     // 判斷題目類型，若是選擇題就檢查是否有選取一個答案，否則就檢查 input 的值是否為空
//     if (question.find('input[type=radio]').length > 0) {
//       if (!question.find('input[type=radio]:checked').val()) {
//         allAnswersFilled = false;
//         alert(`第 ${questionNumber} 題尚未填寫`);
//         return false; // 中斷遍歷
//       }
//     } else {
//       const input = question.find('input[type=text], textarea');
//       if (input.prop('required') && !input.val()) {
//         allAnswersFilled = false;
//         alert(`第 ${questionNumber} 題尚未填寫`);
//         return false; // 中斷遍歷
//       }
//     }
//   });

//   // 回傳是否全部填寫
//   return allAnswersFilled;
	return true;
}
