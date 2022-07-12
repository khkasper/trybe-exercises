list = [10, 20, 30]


def average(list):
    total = 0
    for index in list:
        total += index
    return total / len(list)


print(average(list))
