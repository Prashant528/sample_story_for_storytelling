from fitness_tracker import fitness_tracker
from screen_tracker import screen_tracker

def main():
    health_records = []
    print("\n\n\Welcome to the habit tracker.")

    while True:
        print("Menu:")
        print("1. Fitness tracker")
        print("2. Screen time tracker")
        print("3. Exit")

        choice = input("Enter your choice (1-3): ")

        if choice == '1':
            fitness_tracker()
        elif choice == '2':
            screen_tracker()
        elif choice == '3':
            print("Exiting Health and Fitness Tracker. Goodbye!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 3.")

if __name__ == "__main__":
    main()