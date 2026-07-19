import { questions, topics } from './questions.js';

console.log("=== DIAGNOSTIC REPORT ===");

let hasErrors = false;

topics.forEach(topic => {
  const categoryQuestions = questions[topic.key];
  if (!categoryQuestions) {
    console.error(`Error: Category "${topic.key}" (${topic.label}) is missing from questions.`);
    hasErrors = true;
    return;
  }

  const count = categoryQuestions.length;
  console.log(`- ${topic.label} (${topic.key}): ${count} questions`);
  if (count === 0) {
    console.error(`  Error: Category "${topic.key}" has 0 questions.`);
    hasErrors = true;
  }

  categoryQuestions.forEach((q, idx) => {
    if (!q.question) {
      console.error(`Error: Question at index ${idx} in category "${topic.key}" has empty 'question'.`);
      hasErrors = true;
    }

    if (!Array.isArray(q.options) || q.options.length !== 4) {
      console.error(`Error: Question at index ${idx} in category "${topic.key}" must have exactly 4 options.`);
      hasErrors = true;
    }

    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) {
      console.error(`Error: Question at index ${idx} in category "${topic.key}" has invalid correctAnswer: ${q.correctAnswer}`);
      hasErrors = true;
    }

    if (!q.explanation) {
      console.error(`Error: Question at index ${idx} in category "${topic.key}" is missing 'explanation'.`);
      hasErrors = true;
    }
  });
});

if (hasErrors) {
  console.log("\n❌ DIAGNOSTIC STATUS: ERRORS FOUND");
} else {
  console.log("\n✅ DIAGNOSTIC STATUS: ALL OK!");
}
