# Реализуйте функцию hide_card(), которая принимает один аргумент:

# card_number — строка, представляющая собой корректный номер банковской карты из 
# 16 цифр, между которыми могут присутствовать символы пробела
# Функция должна заменять первые 
# 12 цифр в строке card_number на символ * и возвращать полученный результат. 
# Если между цифрами в номере имелись символы пробела, их следует удалить.

def hide_card(card_number):
    num = "".join(card_number.split())
    hiden_number = ""
    for n in range(len(num)):
        if n < 12:
            hiden_number += "*"
        else:
            hiden_number += num[n]
    return hiden_number

with open('input_49.txt') as input_file:
    lines = input_file.readlines()

for line in lines:
    if line.startswith('card = '):
        start = line.find("'") + 1
        end = line.find("'", start)
        result = line[start:end]
        
        print(hide_card(result))