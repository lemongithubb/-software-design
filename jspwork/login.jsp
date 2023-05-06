<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <html>
        <head>
            <title>로그인 화면</title>
            <style>
                *{
                 text-decoration: none;
                  list-style: none;
                   padding: 0;
                   margin: 0;

                }
                header{
                    display: flex;
                    width: 100vw;
                     height: 100px;
                     background-color: white;
                    
                }
                header h1{  
                     width: 350px;
                     height: 100px;
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
            <header>
                <h1>
                    <a href= "main.jsp">
                        <img src ="img/title.png"  width="350" height="100" alt="logo"/>
                    </a>
        
                </h1>
            </header>
            <div class="container">
                <h2>
                    Login
                </h2>
                
                    <input type="text" placeholder="아이디" name="userID" maxlength="20">
                
                    <input type="text" placeholder="비밀번호" name="userPW" maxlength="20">
                

            </div>

        </body>
    </html>