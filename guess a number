import java.util.Random;
import java.util.Scanner;

public class GuessTheNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int maxAttempts = 10; 
        int totalRounds = 3; 
        int score = 0; 

        System.out.println("Welcome to the Guess the Number Game!");
        System.out.println("You have " + maxAttempts + " attempts to guess the number between 1 and 100.");
        
        for (int round = 1; round <= totalRounds; round++) {
            System.out.println("\nRound " + round + " begins!");
            int targetNumber = random.nextInt(100) + 1;
            boolean guessedCorrectly = false;
            
            for (int attempt = 1; attempt <= maxAttempts; attempt++) {
                System.out.print("Attempt " + attempt + ": Enter your guess: ");
                int userGuess = scanner.nextInt();

                if (userGuess == targetNumber) {
                    System.out.println("Congratulations! You've guessed the correct number.");
                    score += (maxAttempts - attempt + 1) * 10; // points based on the number of attempts left
                    guessedCorrectly = true;
                    break;
                } else if (userGuess < targetNumber) {
                    System.out.println("The number is higher than your guess.");
                } else {
                    System.out.println("The number is lower than your guess.");
                }
            }

            if (!guessedCorrectly) {
                System.out.println("Sorry, you've used all attempts. The correct number was " + targetNumber);
            }

            System.out.println("Your score after round " + round + " is: " + score);
        }
        
        System.out.println("\nGame Over! Your final score is: " + score);
        scanner.close();
    }
}
