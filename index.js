function solution(string) {
  let solution = ""
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toUpperCase()) {
      solution += string[i]
    } else {
      solution += " " + string[i]
    }
  }
  return solution
}