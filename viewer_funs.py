def view_meals():
    try:
        # Open the meals log file in read mode
        with open("meals_log.txt", "r") as file:
            # Read and display the contents of the file
            meals_log = file.read()
            if meals_log:
                print("Meal Log:")
                print(meals_log)
            else:
                print("No meals logged yet.")
    except FileNotFoundError:
        print("Meal log file not found.")

def view_exercises():
    try:
        # Open the exercises log file in read mode
        with open("exercises_log.txt", "r") as file:
            # Read and display the contents of the file
            exercises_log = file.read()
            if exercises_log:
                print("Exercise Log:")
                print(exercises_log)
            else:
                print("No exercises logged yet.")
    except FileNotFoundError:
        print("Exercise log file not found.")

def view_screen_time():
    try:
        # Open the screen time log file in read mode
        with open("screen_time_log.txt", "r") as file:
            # Read and display the contents of the file
            screen_time_log = file.read()
            if screen_time_log:
                print("Screen Time Log:")
                print(screen_time_log)
            else:
                print("No screen time logged yet.")
    except FileNotFoundError:
        print("Screen time log file not found.")