import { playRound } from "./playRound.js";

/* eslint-disable no-undef */

test("Player wins", () => {
  expect(playRound("rock", "scissors")).toBe(1);
});

test("Player ties with computer", () => {
  expect(playRound("scissors", "scissors")).toBe(0);
});

test("Computer wins", () => {
  expect(playRound("rock", "paper")).toBe(-1);
});

/* eslint-enable no-undef */
