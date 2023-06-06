from connect_db import get_data
import pandas as pd
import random

def free_extranct(string):

    sex_target = {
        "남성" : 1 ,
        "여성" : 0
    }

    cloth_target = {
            "드레스" : 0 ,
            "재킷" : 1 ,
            "바지" : 2 ,
            "플리스" : 3 ,
            "셔츠" : 4 ,
            "반팔옷" : 5 ,
            "스커트" : 6
    }

    season_target = {
            "가을" : 0 ,
            "봄" : 1 ,
            "여름" : 2 ,
            "겨울" : 3
    }

    set_index = []
    result = -1
    for value in sex_target.keys():
        index = string.find(value)

        if index == -1:
            continue
        else:
            result = sex_target[value]

    if result == -1:
        result = random.randrange(0 , 2) # 없을 경우에는 랜덤을 사용한다.
        set_index.append(result)
    else:
        set_index.append(result)
    
    result = -1
    for value in cloth_target.keys():
        index = string.find(value)

        if index == -1:
            continue
        else:
            result = cloth_target[value]

    if result == -1:
        result = random.randrange(0 , 7)
        set_index.append(result)
    else:
        set_index.append(result)

    result = -1
    for value in season_target.keys():
        index = string.find(value)

        if index == -1:
            continue
        else:
            result = season_target[value]
        
    if result == -1:
        result = random.randrange(0 , 4)
        set_index.append(result)
    else:
        set_index.append(result)
    
    return set_index

def mol_change(num):
    mol_data = {
        "LOTTE_ON" : 0 ,
        "Look_pin" : 1 ,
        "RAKUTEN" : 2 ,
        "UNIQLO" : 3 ,
        "mushinsa" : 4
    }

    for name in mol_data.keys():

        if num == mol_data[name]:
            return name

def run_free(string):
    
    set_index = free_extranct(string)
    
    df = get_data('SELECT * FROM picture')

    random_row = df[(df['sex'] == set_index[0]) & (df['cloth'] == set_index[1]) & (df['season'] == set_index[2])].sample(n = 1)
    name = mol_change(random_row[['address' , 'mol']]['mol'].values[0])
    
    return (random_row['address'] , name)