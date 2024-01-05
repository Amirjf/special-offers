export const handleShowingTextWithTradeMark = (term) => {
  let fullTitle = term;

  if (fullTitle.includes('4MATIC') && !fullTitle.includes('®')) {
    fullTitle = fullTitle.replace(
      '4MATIC',
      '4MATIC<sub style="vertical-align: super;margin-left: 2px;">®</sub>'
    );
  }
  if (fullTitle.includes('4matic') && !fullTitle.includes('®')) {
    fullTitle = fullTitle.replace(
      '4matic',
      '4MATIC<sub style="vertical-align: super;margin-left: 2px;">®</sub>'
    );
  }

  if (fullTitle.includes('AMG') && !fullTitle.includes('®')) {
    fullTitle = fullTitle.replace(
      'AMG',
      'AMG<sub style="vertical-align: super;margin-left: 2px;">®</sub>'
    );
  }
  if (fullTitle.includes('amg') && !fullTitle.includes('®')) {
    fullTitle = fullTitle.replace(
      'amg',
      'AMG<sub style="vertical-align: super;margin-left: 2px;">®</sub>'
    );
  }

  return fullTitle;
};
