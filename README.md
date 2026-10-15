# IT313 React State & Hooks Laboratory 5

## Problem

The application is a Lab Timer & Practice Tracker for students during laboratory activities. It allows the user to track the number of practice problems solved and the amount of time spent working.

## Approach

The application uses `useState` to manage the solved problem count and the running state of the stopwatch.

A custom `useStopwatch` hook uses `useEffect` and `setInterval` to increase the timer every second. The cleanup function uses `clearInterval` so the timer stops correctly when the stopwatch is stopped or the component is unmounted.

Conditional rendering is used to display "Great job!" after solving five problems and to display either "Running..." or "Paused" depending on the stopwatch state.

State is lifted up to `LabScreen` so that `PracticeTracker` and `Stopwatch` can receive the data they need through props.

## Main Components

- `LabScreen` - owns the shared state.
- `PracticeTracker` - displays and updates the solved problem count.
- `Stopwatch` - displays the elapsed time and stopwatch status.
- `useStopwatch` - handles the stopwatch timer logic.

## How to Run

1. Install Node.js and Expo.
2. Open the project folder in VS Code.
3. Run:

```bash
npm install