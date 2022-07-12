fuels = {
    "A": {"name": "Álcool", "price": 1.9},
    "G": {"name": "Gasolina", "price": 2.5},
}


def totalToPay(fuel_type, amount):
    price = fuels[fuel_type]["price"]
    total = amount * price
    if fuel_type == "A":
        if amount < 20:
            total -= total * 0.03
        else:
            total -= total * 0.05
    if fuel_type == "G":
        if amount < 20:
            total -= total * 0.04
        else:
            total -= total * 0.06
    return total


print(totalToPay("G", 10))
