import pandas as pd
import json


def get_receipt(user, time):
    receipts_and_content = pd.read_csv('dishes_and_content.csv')
    data_diseases = pd.read_csv('diseases.csv')
    # diseases = ['gastritis', 'stomach_ulcer', 'intestine_ulcer', 'pancreatitis', 'diabetes']
    # allergies = ["milk_product", "wheat", "citrus", 'meat_product', 'fish_product', 'nut']
    data_allergies = pd.read_csv('allergies.csv')
    all_receipts = user
    receipts = list()
    all_tags = dict()
    idx = 0
    count_receipts = 0
    mass = [0] * 100
    mass2 = [0] * 10
    i = 0
    k = 0
    if time == 1:
        time = 'breakfast'
    elif time == 2:
        time = 'lunch'
    elif time == 3:
        time = 'dinner'

    banned_receipts = set()

    for values in data_allergies.iterrows():
        if user[values[1][0]] == '+':
            for receipt in receipts_and_content.iterrows():
                for value in values[1][1].split(','):
                    if value in receipt[1][1].split(','):
                        banned_receipts.add(receipt[1][0])

    for values in data_diseases.iterrows():
        if user[values[1][0]] == '+':
            for receipt in receipts_and_content.iterrows():
                for value in values[1][1].split(','):
                    if value in receipt[1][1].split(','):
                        banned_receipts.add(receipt[1][0])

    for receipt in receipts_and_content.iterrows():
        count = 0
        for tag in receipt[1][1].split(','):
            if tag != '' and all_receipts[tag] == '+' or receipt[1][0] in banned_receipts:
                count = 1
                break
        if count == 0:
            if receipts_and_content[time][idx] == '+':
                mass[i] = [receipts_and_content['Dish'][idx], receipts_and_content['Content'][idx],
                           receipts_and_content['belki'][idx], receipts_and_content['zhiry'][idx],
                           receipts_and_content['uglevodi'][idx], receipts_and_content['kallorii'][idx],
                           receipts_and_content['Receipt'][idx]]
                i += 1
            elif receipts_and_content['Tags'][idx] == 'drinks':
                mass2[k] = receipts_and_content['Dish'][idx]
                k += 1
            count_receipts += 1
        idx += 1
    data = {"dishes": mass,
            "drinks": mass2,
            }
    return json.dumps(data, ensure_ascii=False)
