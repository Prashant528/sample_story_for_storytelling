from viewer_funs import *
from logger_funs import *

def screen_tracker():
    print("\n Welcome to the Health and Fitness Tracker")
    print("Menu:")
    print("1. Log time")
    print("2. View time")
    print("3. Exit")

    choice = input("Enter your choice (1-3): ")
    if choice == '1':
        log_screen_time()
    elif choice == '2':
        view_screen_time()
    else:
        print("Invalid choice. Please enter a number between 1 and 3.")