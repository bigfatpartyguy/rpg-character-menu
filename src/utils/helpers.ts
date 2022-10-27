const downloadAsJSON = (obj: Object): void => {
  const dataURI = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(obj)
  )}`;

  const link = document.createElement('a');
  link.href = dataURI;
  link.download = 'data.json';
  link.click();
};

export {downloadAsJSON};
