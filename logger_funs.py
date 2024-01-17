def log_meals():
    # Get user input for meal type and amount
    meal_type = input("Enter meal type: ")
    amount = input("Enter meal amount: ")

    # Create or open a file for holding meals in append mode
    with open("meals_log.txt", "a") as file:
        # Write the meal information to the file
        file.write(f"{meal_type}: {amount} grams\n")
    print("Meal logged successfully.")

def log_exercise():
    # Get user input for exercise type, duration, and intensity
    exercise_type = input("Enter exercise type: ")
    duration = input("Enter exercise duration (in minutes): ")
    intensity = input("Enter exercise intensity: ")

    # Create or open a file for holding exercises in append mode
    with open("exercises_log.txt", "a") as file:
        # Write the exercise information to the file
        file.write(f"{exercise_type}: {duration} minutes at {intensity} intensity\n")
    print("Exercise logged successfully.")

def log_screen_time():
    # Get user input for screen time details
    screen_type = input("Enter screen type (e.g., Computer, TV, Phone): ")
    duration = input("Enter screen time duration (in minutes): ")

    # Create or open a file for holding screen time in append mode
    with open("screen_time_log.txt", "a") as file:
        # Write the screen time information to the file
        file.write(f"{screen_type}: {duration} minutes\n")

    print("Screen time logged successfully.")
