from scipy.spatial.distance import cosine
from connect_db import get_data
import pandas as pd

def vectorization(usr_input):
    arr = list(usr_input)
    
    cloth = None
    color = None
    country = None
    mol = None
    season = None
    sex = None

    # cloth 데이터
    
    cloth_data = {
        "드레스" : 0 ,
        "재킷" : 1 ,
        "바지" : 2 ,
        "플리스" : 3 ,
        "셔츠" : 4 ,
        "반팔옷" : 5 ,
        "스커트" : 6
    }

    color_data = {
        "밝은 갈색" : 0 ,
        "매우 밝은 갈색" : 1 ,
        "검은색" : 2 ,
        "약간 밝은 갈색" : 3 ,
        "시안색" : 4 ,
        "약간 밝은 회색" : 5 ,
        "노란색" : 6 ,
        "약간 어두운 초록색" : 7 ,
        "약간 밝은 다홍색" : 8 ,
        "약간 밝은 초록색" : 9 ,
        "약간 어두운 마젠타색" : 10 ,
        "어두운 시안색" : 11 ,
        "밝은 회색" : 12 ,
        "매우 밝은 회색" : 13 ,
        "회색" : 14 ,
        "밝은 붉은색" : 15 ,
        "마젠타색" : 16 ,
        "약간 밝은 붉은색" : 17 ,
        "약간 어두운 흰색" : 18 ,
        "밝은 파란색" : 19 ,
        "약간 어두운 하늘색" : 20 ,
        "약간 어두운 연두색" : 21 ,
        "밝은 노란색" : 22 ,
        "연두색" : 23 ,
        "약간 밝은 마젠타색" : 24 ,
        "약간 밝은 오렌지색" : 25 ,
        "오렌지색" : 26 ,
        "은색" : 27 ,
        "약간 어두운 회색" : 28 ,
        "파란색" : 29 ,
        "황갈색" : 30 ,
        "약간 밝은 분홍색" : 31 ,
        "갈색": 32 ,
        "흰색" : 33
    }

    country_data = {
        "Japan" : 0 ,
        "Korea" : 1
    }

    mol_data = {
        "LOTTE_ON" : 0 ,
        "Look_pin" : 1 ,
        "RAKUTEN" : 2 ,
        "UNIQLO" : 3 ,
        "mushinsa" : 4
    }
    
    season_data = {
        "가을" : 0 ,
        "봄" : 1 ,
        "여름" : 2 ,
        "겨울" : 3
    }

    sex_data = {
        "여성" : 0 ,
        "남성" : 1
    }

    cloth = cloth_data[arr[0]]
    color = color_data[arr[1]]
    country = country_data[arr[2]]
    mol = mol_data[arr[3]]
    season = season_data[arr[4]]
    sex = sex_data[arr[5]]

    return [cloth , color , country , mol , season , sex]

def run(usr_input):

    usr_input = usr_input.split()
    
    # 사용자의 입력값을 벡터화
    usr_vector = vectorization(usr_input)

    # DB 불러오기
    
    db_vectors = get_data('SELECT * FROM picture')
    
    id = 1 # 카운트용 id

    similarities = {}

    for i in range(len(db_vectors)):
        
        compare = list(db_vectors.loc[db_vectors["ID"] == id][["cloth" , "color" , "country" , "mol" , "season" , "sex"]].values)

        similarity = cosine(usr_vector , compare)
        similarities[id] = similarity

        id += 1 
    
    similarities = sorted(similarities.items() , key = lambda x : x[1])

    return db_vectors.loc[similarities[0][0]]['address']

