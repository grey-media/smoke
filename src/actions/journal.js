export const journalInsertToday = data => ({
  type: 'JOURNAL_INSERT_TODAY',
  payload: data,
});

export const journalInsertYesterday = data => ({
  type: 'JOURNAL_INSERT_YESTERDAY',
  payload: data,
});

export const journalInsertBefore = data => ({
  type: 'JOURNAL_INSERT_BEFORE',
  payload: data,
});

export const journalInsertAll = data => ({
  type: 'JOURNAL_INSERT_ALL',
  payload: data,
});
