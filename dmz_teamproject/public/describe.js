function describe(info)
{
    var box_obj = document.getElementById('desc_box');
    var logo_box_obj = document.getElementById('logo_box');
    box_obj.classList.remove('hidden');
    logo_box_obj.classList.remove('hidden');

    switch(info)
    {
        case "RAKUTEN":
            const img_RAKUTEN = document.createElement("img");
            img_RAKUTEN.style.width='100%';
            img_RAKUTEN.style.height='100%'
            img_RAKUTEN.style.objectFit='cover';

            img_RAKUTEN.src="rakuten_log.png";
            logo_box_obj.appendChild(img_RAKUTEN);

            box_obj.innerText = "RAKUTEN";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "일본의 인터넷 종합 서비스 제공업체로 , 일본 최대 인터넷 쇼핑몰인 라쿠텐 이치바와 종합 여행 사이트 라쿠텐 트래블을 , 통신사 라쿠텐 모바일 , 신용카드사 라쿠텐 카드등의 서비스를 운영중이다.";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "https://www.rakuten.co.jp/?l-id=pc_header_logo";
            break;
        
        case "UNIQLO":
            const img_UNIQLO = document.createElement("img");
            img_UNIQLO.style.width='100%';
            img_UNIQLO.style.height='100%'
            img_UNIQLO.style.objectFit='cover';

            img_UNIQLO.src="uniqlo_log.png";
            logo_box_obj.appendChild(img_UNIQLO);

            box_obj.innerText = "UNIQLO";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "일본의 주식회사 패스트 리테일링의 자회사로 , 의류 및 피복의 생산 및 판매업을 주력으로 하는 기업이다. 세계 SPA 브랜드 중 시가총액 1위 , 매출 3위의 대기업 의류 브랜드이다.";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "https://www.uniqlo.com/jp/ja/";
            break;

        case "LOTTE_ON":
            const img_LOTTE = document.createElement("img");
            img_LOTTE.style.width='100%';
            img_LOTTE.style.height='100%'
            img_LOTTE.style.objectFit='cover';

            img_LOTTE.src="lotte_log.png";
            logo_box_obj.appendChild(img_LOTTE);

            box_obj.innerText = "LOTTE_ON";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "신세계 , 이마트와 함께 국내 유통업계의 공룡기업중 하나인 롯데쇼핑 산하의 인터넷 전자상거래 부문이다. 사업영역으로 여러 물품이나 의류를 시작으로 티켓 , 보험까지 넓은 사업영역을 가지고 있다.";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "https://www.lotteon.com/p/display/main/lotteon?mall_no=1";
            break;
        
        case "Look_pin":
            const img_PIN = document.createElement("img");
            img_PIN.style.width='100%';
            img_PIN.style.height='100%'
            img_PIN.style.objectFit='cover';

            img_PIN.src="look_pin_log.png";
            logo_box_obj.appendChild(img_PIN);

            box_obj.innerText = "Look_pin";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "온라인 쇼핑몰들을 한군데 모아서 보여주는 대한민국의 패션 어플리케이션이다. 주로 남성 패션을 타겟으로 하며 지속적인 업데이트로 라이프스타일 분야로 범위를 넓혀가고 있다.";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "https://www.lookpin.co.kr";
            break;

        case "mushinsa":
            const img_MU = document.createElement("img");
            img_MU.style.width='100%';
            img_MU.style.height='100%'
            img_MU.style.objectFit='cover';

            img_MU.src="musinsa_log.png";
            logo_box_obj.appendChild(img_MU);

            box_obj.innerText = "musinsa";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "대한민국 최대 규모의 온라인 편집숍이자 , 대한민국의 10번째 유니콘 기업이다. 의류 뿐만 아니라 가방 , 액세서리 등 다양한 상품을 취급하며 , 특히 20대 젊은 남성 청년 고객이 많은 특징을 가지고 있다. 비교적 저렴한 상품이 많으며 , 30대 직장 남성을 타겟으로 하는 고급 브랜드상품은 거의 취급하지 않는다.";
            box_obj.innerText += '\n';
            box_obj.innerText += '\n';
            box_obj.innerText += "https://www.musinsa.com/app/";
            break;

    }
}

function erase()
{
    var box_obj = document.getElementById('desc_box');
    var logo_box_obj = document.getElementById('logo_box');
    box_obj.classList.add('hidden');
    logo_box_obj.innerHTML = "";
    logo_box_obj.classList.add('hidden');
}