function describe(info)
{
    var head_obj = document.getElementById('hidden_head');
    var text_obj = document.getElementById('hidden_text');
    var url_obj = document.getElementById('url');

    switch(info)
    {
        case "RAKUTEN":
            head_obj.innerText = "RAKUTEN";
            text_obj.innerText = "일본의 인터넷 종합 서비스 제공업체로 , 일본 최대 인터넷 쇼핑몰인 라쿠텐 이치바와 종합 여행 사이트 라쿠텐 트래블을 , 통신사 라쿠텐 모바일 , 신용카드사 라쿠텐 카드등의 서비스를 운영중이다."
            var link = document.createElement('a');
            link.href = 'https://www.rakuten.co.jp/?l-id=pc_header_logo';
            url_obj.appendChild(link);
            break;
        
        case "UNIQLO":
            head_obj.innerText = 'UNIQLO';
            text_obj.innerText = "일본의 주식회사 패스트 리테일링의 자회사로 , 의류 및 피복의 생산 및 판매업을 주력으로 하는 기업이다. 세계 SPA 브랜드 중 시가총액 1위 , 매출 3위의 대기업 의류 브랜드이다.";
            var link = document.createElement('a');
            link.href = 'https://www.uniqlo.com/jp/ja/';
            url_obj.appendChild(link);
            break;

        case "LOTTE_ON":
            head_obj.innerText = 'LOTTE_ON';
            text_obj.innerText = '신세계 , 이마트와 함께 국내 유통업계의 공룡기업중 하나인 롯데쇼핑 산하의 인터넷 전자상거래 부문이다. 사업영역으로 여러 물품이나 의류를 시작으로 티켓 , 보험까지 넓은 사업영역을 가지고 있다.';
            var link = document.createElement('a');
            link.href = 'https://www.lotteon.com/p/display/main/lotteon?mall_no=1';
            url_obj.appendChild(link);
            break;
        
        case "Look_pin":
            head_obj.innerText = 'Look_pin';
            text_obj.innerText = '온라인 쇼핑몰들을 한군데 모아서 보여주는 대한민국의 패션 어플리케이션이다. 주로 남성 패션을 타겟으로 하며 지속적인 업데이트로 라이프스타일 분야로 범위를 넓혀가고 있다.';
            var link = document.createElement('a');
            link.href = 'https://www.lookpin.co.kr';
            url_obj.appendChild(link);
            break;

        case "mushinsa":
            head_obj.innerText = 'musinsa';
            text_obj.innerText = '대한민국 최대 규모의 온라인 편집숍이자 , 대한민국의 10번째 유니콘 기업이다. 의류 뿐만 아니라 가방 , 액세서리 등 다양한 상품을 취급하며 , 특히 20대 젊은 남성 청년 고객이 많은 특징을 가지고 있다. 비교적 저렴한 상품이 많으며 , 30대 직장 남성을 타겟으로 하는 고급 브랜드상품은 거의 취급하지 않는다.';
            var link = document.createElement('a');
            link.href = 'https://www.musinsa.com/app/';
            url_obj.appendChild(link);
            break;
    }
}

function erase()
{
    var head_obj = document.getElementById('hidden_head');
    var text_obj = document.getElementById('hidden_text');
    var url_obj = document.getElementById('url');
    head_obj.innerText = "";
    text_obj.innerText = "";
    url_obj.removeChild();
}