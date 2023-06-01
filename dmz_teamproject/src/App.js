import React from 'react';
import './App.css';
function App() {
    return (
      
    <div>
      <header>
        <h2 id="logo">
          <a href="main.html">
            <img src="images/design.gif" alt="DMZ_website"></img>
          </a>
        </h2>
        {/* <aside id="mainimg">
          <img src="images/1.jpg" alt="" class="slide0"></img>
          <img src="images/1.jpg" alt="" class="slide1"></img>
          <img src="images/2.jpg" alt="" class="slide2"></img>
          <img src="images/3.jpg" alt="" class="slide3"></img>
          <img src="images/123_kazari.png" alt="" class="kazari"></img>
        </aside> */}
      </header>
      
      {/* <nav id="menubar">
        <ul>
          <li><a href="main.html" >표지</a></li>
          <li><a href="instructions.html" >사용법</a></li>
          <li><a href="Program_Introduction.html" >프로그램 소개</a></li>
          <li><a href="execution.html" >실행</a></li>
        </ul>
      </nav> */}
      <div id="contents">
        <section>
          {/* <h2>DMZ<span>Member Introduction</span></h2> */}
          <div class="list">
            <a href="images_photo/daeyang.jpg" data-lightbox="group1" data-title="title">
              <figure><img src="images_photo/daeyang.jpg" alt="" height="280" width="280"></img></figure>
            </a>
          </div>
          {/* <div class="list">
            <a href="images_photo/jungsu.jpg" data-lightbox="group1" data-title="title">
              <figure><img src="images_photo/jungsu.jpg" alt=""></img></figure>
            </a>
          </div>
          <div class="list">
            <a href="images_photo/masa.jpg" data-lightbox="group1" data-title="title">
              <figure><img src="images_photo/masa.jpg" alt=""></img></figure>
            </a>
          </div>
          <div class="list">
            <a href="images_photo/taka.jpg" data-lightbox="group1" data-title="title">
              <figure><img src="images_photo/taka.jpg" alt=""></img></figure>
            </a>
          </div> */}
        </section>
        
        {/* <section id="new">
          <h2>게시판<span>소식</span></h2>
          <dl>
            <dt>2023/05/02</dt>
            <dd>신곡 공개 "도망도망가"<span class="newicon">NEW</span></dd>
            <dt>2023/05/01</dt>
            <dd>신곡 공개 "도망도망가 김대양ver."</dd>
            <dt>2023/04/30</dt>
            <dd>신곡 공개 "도망도망가 태정수ver."</dd>
            <dt>2023/04/29</dt>
            <dd>신곡 공개 "도망도망가 마사아키ver."</dd>
            <dt>2023/04/28</dt>
            <dd>신곡 공개 "도망도망가 타카노부ver."</dd>
          </dl>
         
        </section> */}
      </div></div>
  );
}
export default App;

