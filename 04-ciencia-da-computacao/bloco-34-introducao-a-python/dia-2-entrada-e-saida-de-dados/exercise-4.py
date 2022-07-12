import json
import csv


with open("books.json") as file:
    books = json.load(file)

    python_books = list(
        filter(lambda book: "Python" in book["categories"], books)
    )

    java_books = list(filter(lambda book: "Java" in book["categories"], books))

    php_books = list(filter(lambda book: "PHP" in book["categories"], books))

    with open("report.csv", "w") as report:
        books_len = len(books)
        writer = csv.writer(report)
        writer.writerow(("Categoria", "Porcentagem"))
        writer.writerow(("Python", len(python_books) / books_len))
        writer.writerow(("Java", len(java_books) / books_len))
        writer.writerow(("Python", len(php_books) / books_len))

# ----- #


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_porcentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate porcentage
    number_of_books = len(books)
    books_percentage_rows = calculate_porcentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
