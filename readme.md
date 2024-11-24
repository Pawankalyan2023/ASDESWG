# Installation steps:

- Install TypeScript.

    -- Using the command:
    ```bash
    npm install
    ```
    or
    ```bash
    npm i
    ```

# File Structure and Members

-- game.ts : file consists of the Playing Arena and Operations were taken in the file.

-- dice.ts : This file Consists of Dice rolled to a specific value(randomly).

-- get_player_data.ts :  Returns a Promise consists of data to be assigned with the attacker and Defender data.

-- get_players.ts : Evaluates who is Attacker and Defender.

-- Attacker.ts , Defender.ts : They consists of current data to be used for both attacker and defender.


# Packages 
-- Packages included in the project:
    -- Jest (for testing purposes)
    -- Typescript 


# Test Environment (Unit Testing):

-- The test environment is integrated with the code. To modify the test cases, navigate to `/__tests__/index.test.ts`.

-- Example of initializing players in the test file:
    ```typescript
    const attacker = new Player("Attacker", AttackerHealth, AttackerStrength, AttackerAttack);
    const defender = new Player("Defender", DefenderHealth, DefenderStrength, DefenderAttack);
    ```

-- Change the values accordingly for `AttackerHealth`, `AttackerStrength`, `AttackerAttack`, `DefenderHealth`, `DefenderStrength`, and `DefenderAttack`, and save the file.


-- Test Report Files can be found under the directory `/coverage/Icov-report/src/`


# Note : 

-- The Output May vary based on the given input and dice rolled

# Running Tests:

-- To run the tests, use the command:
    ```bash
    npm test
    ```

-- The results will be printed in the command line.
