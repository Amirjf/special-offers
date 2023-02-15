export const handleShowingTextWithTradeMark = (term) => {
  let fillTitle = term;
  if (fillTitle.includes('4MATIC')) {
    fillTitle = fillTitle.replace('4MATIC', '4MATIC&#174;');
  }
  if (fillTitle.includes('AMG')) {
    fillTitle = fillTitle.replace('AMG', 'AMG&#174;');
  }

  return fillTitle;
};
