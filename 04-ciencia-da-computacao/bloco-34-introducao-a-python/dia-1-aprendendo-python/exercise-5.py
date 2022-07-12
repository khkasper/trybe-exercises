def paint(size):
    paint_litters = size / 3
    paint_cans = paint_litters // 18
    can_price = 80
    if paint_litters % 18:
        paint_cans += 1
    return paint_cans, paint_cans * can_price


print(paint(220))
