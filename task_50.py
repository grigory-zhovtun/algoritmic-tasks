import csv



def condense_csv(filename, id_name='ID'):
    result_dict = dict()
    with open(filename, newline='', encoding='utf-8') as csvfile:
        csvreader = csv.reader(csvfile, delimiter=',')
        for row in csvreader:

            id_, attribute, value = row

            if id_ not in result_dict:
                result_dict[id_] = {id_name: id_}

            result_dict[id_][attribute] = value

        dicts_for_csv = list(result_dict.values())

    with open('condensed.csv', 'w', newline='', encoding='utf-8') as f:
        fieldnames = dicts_for_csv[0].keys()
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(dicts_for_csv)
