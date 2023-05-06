<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>

<head>
    <title>메인 화면</title>
    <style>
        
        *{
            text-decoration: none;
            list-style: none;
            padding: 0;
            margin: 0;

        }
       .container{
        width: 100vw;
        height: 100px;
       }
        #topMenu {
           display: flex;
            height: 100px; /*흰 색 높이*/
            background-color: white;
           margin: auto;
        }
        #topMenu h1{
           
           width: 350px;
           height: 100px;
        }
        .menu{
            display: flex;
           justify-content: flex-end;
           height: 100px;
           width: calc(100vw-350px);
           margin-left: auto;
    
        }
        .menu >li{
           height: 77px;             
           display: flex;
           margin-top: 13px;
          
           margin-left: 5px;
           float: right;
        }
        body{
            background-image: url("img/back.png");
            background-color: white;
            background-repeat: no-repeat;
            background-size: cover;
        }
    </style>
</head>

<body>
    <div class="container">
        <header id="topMenu">
            <h1>
                <a href= "https://www.naver.com/">
                    <img src ="img/title.png"  width="350" height="100" alt="logo"/>
                </a>
    
            </h1>
            
                <ul class="menu">
                    <li><a href="main.jsp"> 
                        <img src="img/category.png" alt="category"/></a>
                    </li>
                     <li><a href="main.jsp"> 
                        <img src="img/upload.png" alt="upload"/></a>
                    </li>
                    <li><a href="main.jsp"> 
                        <img src="img/delete.png" alt="delete" /></a>
                    </li>
                    <li><a href="login.jsp"> 
                        <img src="img/login.png" alt="login"/></a>
                    </li>
                </ul>
           
        </header>

    </div>
    
   
    
    
    
</body>

</html>