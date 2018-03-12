import React from 'react'

export function formatQuestionsLength(questionsLength) {
  const ql = questionsLength;

  if (ql === 1) {
    return `${ql} card`;
  }
  return `${ql} cards`;
}