list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggerChar(list):
    bigger = list[0]
    for index in list:
        if len(index) > len(bigger):
            bigger = index
    return bigger


print(biggerChar(list))
