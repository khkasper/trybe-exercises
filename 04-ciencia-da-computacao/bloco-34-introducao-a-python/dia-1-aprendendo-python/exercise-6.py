def triangleType(a, b, c):
    if a > b + c or b > a + c or c > a + b:
        return "Não é um triângulo"
    elif a == b == c:
        return "Equilátero"
    elif a == b or b == c or a == c:
        return "Isóceles"
    else:
        return "Escaleno"


print(triangleType(1, 5, 3))
