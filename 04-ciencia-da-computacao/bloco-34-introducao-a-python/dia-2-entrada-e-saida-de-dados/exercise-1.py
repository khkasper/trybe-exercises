name = input("Digite um nome: ")

for counter in range(len(name), 0, -1):
    print(name[:counter])
