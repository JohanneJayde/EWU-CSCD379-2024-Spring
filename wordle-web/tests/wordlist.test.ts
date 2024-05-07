import { expect, test } from "vitest";
import { Game } from "~/scripts/game";
import { WordList } from "~/scripts/wordList";
import { filterValidWords } from "~/scripts/wordListUtils";

test("filterValidWords init contains all wordlist", () => {
  const game = new Game("games");
  // test if filterValidWords returns an array
  expect(filterValidWords(game).length).equal(WordList.length);
});

test("filterValidWords removes words with wrong letters", () => {
  const game = new Game("hello");
  game.guess.addLetter("H");
  game.guess.addLetter("A");
  game.guess.addLetter("N");
  game.guess.addLetter("D");
  game.guess.addLetter("S");
  game.submitGuess();

  expect(filterValidWords(game)).not.toContain("hands");
  expect(filterValidWords(game)).not.toContain("snare");
});

test("filterValidWords removes words with correct letters in wrong position", () => {
  const game = new Game("hello");
  game.guess.addLetter("L");
  game.guess.addLetter("A");
  game.guess.addLetter("M");
  game.guess.addLetter("P");
  game.guess.addLetter("S");
  game.submitGuess();

  expect(filterValidWords(game)).not.toContain("loads");
  expect(filterValidWords(game)).not.toContain("laced");
});

test("filterValidWords contains words with letters that are misplaced in different position", () => {
  const game = new Game("clear");
  game.guess.addLetter("p");
  game.guess.addLetter("u");
  game.guess.addLetter("l");
  game.guess.addLetter("s");
  game.guess.addLetter("e");
  game.submitGuess();
  console.log(filterValidWords(game));

  expect(filterValidWords(game)).toContain("biggy");
  expect(filterValidWords(game)).toContain("drink");
});
