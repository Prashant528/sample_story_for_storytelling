from viewer_funs import *
from logger_funs import *

def fitness_tracker():
    print("\nWelcome to the Health and Fitness Tracker")
    print("Menu:")
    print("1. Meal tracker")
    print("2. Exercise tracker")

    choice = input("Enter your choice (1-3): ")
    if choice == '1':
        meal_tracker()
    elif choice == '2':
        exercise_tracker()
    else:
        print("Invalid choice. Please enter a number between 1 and 3.")

def  meal_tracker():
    print("\nWelcome to the meal tracker.")
    print("Menu:")
    print("1. Log meal")
    print("2. View meal")

    choice = input("Enter your choice (1-2): ")
    if choice == '1':
        log_meals()
    elif choice == '2':
        view_meals()
    else:
        print("Invalid choice. Please enter a number between 1 and 2.")

def exercise_tracker():
    print("\nWelcome to the exercise tracker.")
    print("Menu:")
    print("1. Log exercise")
    print("2. View exercise")

    choice = input("Enter your choice (1-2): ")
    if choice == '1':
        log_exercise()
    elif choice == '2':
        view_exercises()
    else:
        print("Invalid choice. Please enter a number between 1 and 2.")