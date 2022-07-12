import json
import random
from random import choice


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]
    pokemons_names = [pokemon["name"] for pokemon in pokemons]
    choosen_pokemon = choice(pokemons_names)

    attempts = 0

    wins = False

    while attempts < len(choosen_pokemon):
        hint = "".join(
            [
                letter if index < attempts else "_"
                for index, letter in list(enumerate(choosen_pokemon))
            ]
        )

        print("Hint: ", hint)

        guess = input("What is the pokémon? ")

        attempts += 1

        if guess == choosen_pokemon:
            wins = True
            print("Your guess is correct! Congratulations!")
            break

    if not wins:
        print("Game over")
        print(f"The correct answer was {choosen_pokemon}")

# ----- #


def shot(pokemon_name):
    wrong_shot = True
    num_of_shots = 0
    while wrong_shot:
        num_of_shots += 1
        shot = input("Quem é esse pokemon? ")
        if shot == pokemon_name:
            print("Você acertou! Parabéns!")
            break
        elif num_of_shots == len(pokemon_name):
            print("Você errou!")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_of_shots):
                print(pokemon_name[i], end="")
            print("")


if __name__ == "__main__":
    with open("pokemons.json") as file:
        pokemons = json.load(file)["results"]
        pokemon = random.choice(pokemons)
        pokemon_name = pokemon["name"]

    shot(pokemon_name)
