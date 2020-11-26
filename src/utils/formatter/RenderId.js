const RenderId = (data) => {
  const rx = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/([A-Za-z0-9-_]+)\//;
  const urlMatch = rx.exec(data?.url);
  if (urlMatch) {
    return urlMatch[1];
  }
  return '0';
};

export default RenderId;
