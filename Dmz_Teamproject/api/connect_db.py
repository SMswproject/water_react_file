import pymysql
import pandas as pd

def connect_database():
    # DB와 연결하는 함수
    
    connection = pymysql.connect(
        host = "127.0.0.1" ,
        user = "myuser" ,
        password = "pass" ,
        database = "app" ,
        port = 43306 ,
    )

    return connection

def get_data(query):
    # 쿼리로 데이터베이스에서 데이터를 가져옵니다.
    
    connection = connect_database()
    
    # 데이터 프레임
    df = pd.read_sql(query , connection)

    return df