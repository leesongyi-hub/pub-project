import $ from 'jquery';

/*
	통합검색,
	메인페이지 관련 스크립트 모음
*/

var UI = {
	repositoryListMore: {
		init: function (){
			//저장소 리스트 접고 펼치기
			$('.repo_area .btn_more').on('click', function(){
				$(this).parents('.repo_head').toggleClass('on');
			});

			// 저장소 필터 높이가 40px보다 작거나 같으면 '전체보기' 버튼 미노출
			$('.chip_area').each(function(index, item) {
				$(item).siblings('.btn_more').toggle($(item).height() > 40);
			});
		}
	},
	repositorySwiper: {
    init: function () {
			//Swiper 1920px ~ 769px까지 기능 사용. 768px이하일때 리셋
			$(window).on('resize', function () {
				ww = $(window).width();
				initSwiper();
			});

			function initSwiper() {
				if (ww > 768 && mySwiper == null) {
					mySwiper = new Swiper(".repository .swiper-container", {
						loop: false,
						slidesPerView: 3,
						spaceBetween: 24,
						breakpoints: {
							1024: {
								slidesPerView: 2,
								spaceBetween: 24,
							},
						},
						pagination: {
							el: '.swiper-pagination',
						},
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},      
					});
				} else if (ww <= 768 && mySwiper != null) {
					mySwiper.destroy();
					mySwiper = null;
				}
			}

			// 초기 실행
			var ww = $(window).width();
			var mySwiper = null;
			initSwiper();
		}
	},
  treeAccordion: {
    init: function () {
			//필터 아코디언
      $('.tree_listItem .btn_doc .btn_arr').on('click', function () {
        $(this).parents('.tree_listItem').toggleClass('on');
      });
    }
  },
  treeAllCheckAccordion: {
    init: function () {
			//필터 아코디언	
      $('.tree_listItem .btn_doc .custom-checkbox').on('click', function () {
				$(this).parents('.tree_listItem').addClass('on');
      });
    }
  },
	allChecked: {
		//필터 체크박스 전체선택
		init: function (allCheckId, chkName){
			$("#" + allCheckId).click(function () {
					if ($("#" + allCheckId).is(":checked")) {
							$("input[name=" + chkName + "]").prop("checked", true);
					} else {
							$("input[name=" + chkName + "]").prop("checked", false);
					}					
			});
		},
	},
	customSelect: {
		init: function () {
			//커스텀셀렉트
			var $customSelectArea = $('.customSelect_area');
			var $customSelect = $customSelectArea.find('.customSelect');
			var $customSelectList = $customSelectArea.find('.customSelect_list');
			var $customSelectOption = $customSelectArea.find('.customSelect_option');
			
			$customSelect.on('click', function() {
				var $select = $(this);
				var $list = $select.siblings('.customSelect_list');
				
				$select.toggleClass('selected');
				$list.toggle($select.hasClass('selected'));
			});
			
			$customSelect.on('focusin', function() {
				$(this).siblings('.customSelect_list').show();
			});
			
			$customSelect.on('focusout', function() {
				var $select = $(this);
				var $list = $select.siblings('.customSelect_list');
				
				if (!selectFlag) {
					$list.hide();
				}
				$select.removeClass('selected');
			});
			
			$customSelectOption.on('mouseenter', function() {
				selectFlag = true;
			});
			
			$customSelectOption.on('mouseout', function() {
				selectFlag = false;
			});
			
			$customSelectOption.on('click', function() {
				var $option = $(this);
				var $area = $option.parents('.customSelect_area');
				var $text = $area.find('.customSelect_text');
				var $origin = $area.find('.select_origin');
				var value = $option.attr('value');
				
				$text.text($option.text());
				$origin.val(value);
				$customSelectList.hide();
				
				$origin.find('option').each(function(index, el) {
					if ($(el).attr('value') == value) {
						$(el).attr('selected', 'selected');
					} else {
						$(el).removeAttr('selected');
					}
				});
			});
		}
	},
	filterToggle:{
		init: function () {
		  //필터토글			
			var backdropAdded = false;

			//모바일 토글필터
			function toggleFilterMobile() {
				$('.btn_filter').on('click', function() {
					$(this).parents('.search_page').addClass('expend');
					$('body').addClass('modal-open');
					if (!backdropAdded) {
						$('body').append('<div class="modal_overlay"></div>');
						backdropAdded = true;
					}
				});
		
				$('.filter .btn_close').on('click', function() {
					$(this).parents('.search_page').removeClass('expend');
					$('body').removeClass('modal-open');
					if (backdropAdded) {
						$('.modal_overlay').remove();
						backdropAdded = false;
					}
				});
			}
		
			//PC화면 토글필터
			function toggleFilterDesktop() {
				$('.search_page').removeClass('expend');
				$('body').removeClass('modal-open');
				$('.modal_overlay').remove();
		
				$('.filter .btn_fold').off('click').on('click', function() {
					$(this).parents('.search_page').toggleClass('fold');
				});
			}
		
			function handleResize() {
				var isWindowWidth = window.innerWidth < 1024;
				if (isWindowWidth) {
					toggleFilterMobile();
				} else {
					toggleFilterDesktop();
				}
			}
		
			//브라우저 리사이징 시 토글필터 실행
			$(window).on('resize', function() {
				handleResize();
			});
		
			//초기접속 시 토글필터 실행
			handleResize();
		}
	},	
	filterListMore:{
		init: function () {
			//검색필터 리스트 더보기/간략보기
			$('.filterComp_list').each(function(index, item) {
				var $lnbList = $(item);
				var liCount = $lnbList.children('li').length;
				var $btnMore = $lnbList.next('.btn_more');
				var $btnLabel = $btnMore.children('.label');
		
				//리스트 6개부터 버튼 노출
				if (liCount <= 5) {
					$btnMore.css('display', 'none');
				} else {
					$lnbList.children('li').slice(5).css('display', 'none');
				}

				$btnMore.on('click', function() {
					if ($btnMore.hasClass('on')) {
						$lnbList.children('li').slice(5).css('display', 'none');
						$btnMore.removeClass('on');
						$btnLabel.text('더보기');
						$lnb_list.slideUp();
					} else {
						$lnbList.children('li').slice(5).css('display', 'block');
						$btnMore.addClass('on');
						$btnLabel.text('간략보기');
						$lnb_list.slideDown();
					}
				});
			});
		}
	},	
	filterCompAccordion:{
		init: function () {
			//검색필터 아코디언
			$('.filterComp').addClass('on');

			$('.btn_aco').on( "click", function() {
				var $filterComp = $(this).parent('.filterComp');
				var $slide_target = $(this).next('.filterComp_body');
				if( $filterComp.hasClass('on') ){
					$filterComp.removeClass('on')
					$slide_target.slideUp('fast')
				}else{
					$filterComp.addClass('on')
					$slide_target.slideDown('fast')
				}
			});
		}
	},
	subInfoAccordion:{
		init: function (){
			//부가정보영역 펼침 토글
			$('.subInfo_area .btn_more').on('click', function(){
				$(this).parent('.subInfo_area').toggleClass('on');
			});

			//Function : 부가정보영역 높이값 감지하여 펼침 버튼 토글
			function toggleListVisible() {
					$('.subInfo_area .inner').each(function(index, item) {
					$(item).siblings('.btn_more').toggle($(item).height() > 40);
				});
			}
			//Function 실행
			toggleListVisible(); 
			$(window).on('resize', toggleListVisible);
		}
	},
	detailSearch: {
		init: function (){
			//상세검색버튼 토글
			$('.btn_detailSearch').on('click', function() {
				var useElement = $(this).find('use');
				var currentHref = useElement.attr('xlink:href');
				var btnTxt = $(this).children('.label');
	
				if (currentHref === '#ico_minus') {
					useElement.attr('xlink:href', '#ico_plus');
					btnTxt.text('상세검색 열기');
				} else {
					useElement.attr('xlink:href', '#ico_minus');
					btnTxt.text('상세검색 닫기');
				}
				$('.detailSearch_area').slideToggle();
			});
	
			//상세검색창 닫기
			$('.detailSearch_area .btn_close').on('click', function() {
				$(this).parents('.detailSearch_area').slideUp();
				$('.btn_detailSearch .label').text('상세검색 열기');
				$('.btn_detailSearch use').attr('xlink:href', '#ico_plus');
			});
	
			//상세검색창 열기
			$(window).on('scroll', function() {
				var scrollTop = $(window).scrollTop();
				var detailSearchHeight = $('.detailSearch_area').outerHeight();
	
				if (scrollTop > detailSearchHeight) {
					$('.detailSearch_area').addClass('fix');
				} else {
					$('.detailSearch_area').removeClass('fix');
				}
			});
		}
	},
	filePreviewToggle: {
		init: function (){
			//첨부파일탭 리스트 미리보기영역 펼침 토글
			$('.type_file .btn_more').on('click', function(){
				$(this).siblings('.inner').scrollTop(0);
				$(this).parent('.preview_area').toggleClass('on');          
			});
		}
	},
	queryListMore:{
		init: function () {
			//질의 리스트 더보기/간략보기		

			$('.add_tag_list').each(function(index, item) {
				var $tagListArea = $('.add_tag_list_area');
				var $lnbList = $(item);
				var liCount = $lnbList.children('li').length;
				var $btnMore = $lnbList.next('.btn_more');
				var $btnLabel = $btnMore.children('.label');
		
				//리스트 4개부터 버튼 노출
				if (liCount <= 3) {
					$btnMore.css('display', 'none');
				} else {
					$lnbList.children('li').slice(3).css('display', 'none');
				}

				$btnMore.on('click', function () {
					var isExpanded = $tagListArea.attr('aria-expanded') === "true";
					$tagListArea.attr('aria-expanded', isExpanded ? "false" : "true");
					var displayValue = isExpanded ? 'none' : '';
					$lnbList.children('li').slice(3).css('display', displayValue);
					$btnMore.toggleClass('on');
					$btnLabel.text(isExpanded ? '펼치기' : '접기');
				});
			});
		}
	},
	swiperRepositorySelect: {
		init: function () {
			
			// Swiper 초기화
			mySwiper = new Swiper(".repo_select_area .swiper-container", {
				direction: 'horizontal',
				loop: false,
				slidesPerView: 'auto',
				spaceBetween: 0,
				freeMode: true,
      	// freeMode 관련 옵션 설정
				freeModeMomentum: true, // 마우스 드래그 속도 관련
				freeModeMomentumBounce: false, // 바운스 효과 비활성화
				freeModeSticky: false, // 멈추는 위치에서 고정
				spaceBetween: 8,
				freeModeMomentumRatio: 0.2,
				pagination: {
					el: '.swiper-pagination',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
	
			$('.repo_select_area .swiper-container .swiper-slide button').each(function (index, item) {
				$(item).click(function () {
					// 모든 버튼에서 'on' 클래스 제거
					$('.repo_select_area .swiper-container .swiper-slide button').removeClass('on');
	
					// 해당 버튼에 'on' 클래스 추가
					$(this).addClass('on');
	
					// 해당 버튼의 부모 슬라이드 인덱스 가져오기
					const slideIndex = $(this).parent().index();
	
					// 해당 슬라이드로 이동
					mySwiper.slideTo(slideIndex - 1)
				});
			});
		},
	},
	dragScrollX: {
    init: function (dataAttrName) {
			// data-dragX 속성이 true인 모든 요소에 함수 적용
			var elements = document.querySelectorAll('[' + dataAttrName + '="true"]');

			for (var i = 0; i < elements.length; i++) {
				(function () {
					var element = elements[i];
					var isDown = false;
					var startX;
					var scrollLeft;

					element.addEventListener('mousedown', function (e) {
							isDown = true;
							element.classList.add('active');
							startX = e.pageX - element.offsetLeft;
							scrollLeft = element.scrollLeft;
					});

					element.addEventListener('mouseleave', function (e) {
							isDown = false;
							element.classList.remove('active');
					});

					element.addEventListener('mouseup', function (e) {
							isDown = false;
							element.classList.remove('active');
					});

					element.addEventListener('mousemove', function (e) {
							if (!isDown) return;
							e.preventDefault();
							var x = e.pageX - element.offsetLeft;
							var walk = (x - startX) * 2; // scroll-fast
							element.scrollLeft = scrollLeft - walk;
					});
				})();
			}
    }
	}
};

$(function () {
	UI.swiperRepositorySelect.init();
	UI.repositorySwiper.init();
	UI.repositoryListMore.init();
  UI.treeAccordion.init();
	UI.treeAllCheckAccordion.init();
  UI.customSelect.init();
	UI.filterToggle.init();
	UI.filterListMore.init();
	UI.filterCompAccordion.init();
	UI.subInfoAccordion.init();
	UI.detailSearch.init();
	UI.filePreviewToggle.init();
	UI.queryListMore.init();
	UI.dragScrollX.init('data-dragX');

	//[통합검색] 필터 문서분류 체크박스 전체선택
	$(".filter .tree_listItem").each(function () {
		var allCheckId = $(this).find(".custom-control-input").attr("id");
		var chkName = $(this).find(".custom-control-input").attr("name");
		UI.allChecked.init(allCheckId, chkName);
	});
	
});
