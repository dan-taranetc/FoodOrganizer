import pandas as pd
import diet_algorithm_v2
from pathlib import Path
import json

def get_receipt(user):
    receipts_and_content = pd.read_csv('dishes_and_content.csv')
    all_receipts = diet_algorithm_v2.get_user()
    receipts = list()
    all_tags = dict()

    idx = 0
    count_receipts = 0
    mass = [0]*100
    mass2 = [0]* 10
    i = 0
    k = 0
    time = 2
    if time == 1:
        time = 'breakfast'
    elif time == 2:
        time = 'lunch'
    elif time == 3:
        time = 'dinner'
    for receipt in receipts_and_content['Content']:
        count = 0
        for tag in receipt.split(','):
            if all_receipts['User'][tag] == '+':
                count = 1
                break
        if count == 0:
            if receipts_and_content[time][idx] == '+':
                mass[i] = [receipts_and_content['Dish'][idx], receipts_and_content['Content'][idx],
                           receipts_and_content['belki'][idx], receipts_and_content['zhiry'][idx],
                           receipts_and_content['uglevodi'][idx], receipts_and_content['kallorii'][idx]]
                i += 1
            count_receipts += 1
        idx += 1
    data = {"dishes": mass,
        }
    with open('user_content.json','w') as outfile:
        json.dump(data, outfile, ensure_ascii=False)


if __name__ == '__main__':
    user = diet_algorithm_v2.get_user()
    get_receipt(user)
