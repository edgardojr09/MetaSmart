# Smart Contract Management.
# Description.
## Back end
## Create 3 Function
function WaterPerDay, function SleepPerDay, and function EatTimesPerDay
## Front end
The import statement brings in React and useState, crucial for developing React applications. This setup establishes functional components, vital for constructing UI elements and structuring code, ensuring essential tools are readily accessible. Within this framework, a functional React component named BeHealthy is defined. It employs the useState Hook to manage four state variables: water, sleep, eat, and message, crucial for handling user inputs. Each function within BeHealthy accepts an event object 'e', leveraging 'e.target.value' to extract the current input field value and update the corresponding state variable accordingly. Additionally, specialized functions like checkWaterIntake monitor the user's water intake against health recommendations, providing insights into adherence levels. Meanwhile, checkSleep evaluates if the user's sleep duration aligns with the ideal 8 hours, signaling correctness or triggering error messages as needed. Similarly, checkEatTimes assesses the user's eating frequency, aiming for the recommended three meals daily. These functions ensure users stay informed about their health behaviors, aligning with established guidelines for optimal well-being.The last function, connects to a user's MetaMask wallet, checks if it's available, requests account access, and retrieves the user's Ethereum address, storing it in the account state.

